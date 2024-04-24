import { useEffect } from "react";
import Profile from "./Profile"
import axios  from "axios";
import { useState } from "react";
export default function ProfileContainer(props){

    const [ userData, setUserData ] = useState([])

    // const APIEndpoint = 'http://13.232.225.142:3000/user-profile/'
    // const APIEndpoint = 'https://cors-anywhere.herokuapp.com/http://13.232.225.142:3000/user-profile';
    const APIEndpoint = 'http://localhost:3000/user/'
    useEffect( () => {
        props.users.forEach(user => {


            // axios.post(APIEndpoint,payload)
            // .then( response => {
            //     console.log( response.data )
            //     setUserData(prevData => [ ...prevData, response.data] )
            // }).catch( err => {
            //     console.log("ERROR OCCURED" + err)
            // })
            const APIURL = APIEndpoint + `${user}`
            console.log(APIURL) 
            axios.get(APIURL)
            .then( response => {
                console.log( response.data )
                setUserData(prevData => [ ...prevData, response.data] )
            }).catch( err => {
                console.log("ERROR OCCURED" + err)
            })


        });
    

    }, [props.users])


    // return(
    //     <div id="profilecontainer">
    //         {/* <Profile name="adityaaparadh" submissions="125" easy="55" medium="64" hard="12" total="255" /> */}
        

        
    //     </div>
    // )
    return (
        <div id='profilecontainer'>
            {/* Render Profile component for each user */}
            {userData.map(user => (
                <Profile
                    name={user.username}
                    submissions={user.submitStats.acSubmissionNum[0].submissions}
                    easy={user.submitStats.acSubmissionNum[1].count}
                    medium={user.submitStats.acSubmissionNum[2].count}
                    hard={user.submitStats.acSubmissionNum[3].count}
                    total={user.submitStats.acSubmissionNum[0].count}
                />
            ))}
        </div>
    );

}
