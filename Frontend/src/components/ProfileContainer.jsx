import { useEffect } from "react";
import Profile from "./Profile"
import axios  from "axios";
import { useState } from "react";


export default function ProfileContainer(props){

    const [ userData, setUserData ] = useState([])

    // const APIEndpoint = 'http://13.232.225.142:3000/user/'
    // const APIEndpoint = 'https://cors-anywhere.herokuapp.com/http://13.232.225.142:3000/user-profile';
    const APIEndpoint = 'http://192.168.1.22:8000/user/'


    
    useEffect( () => {
        props.users.forEach(user => {
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
    function getColor(index){
        switch (index) {
            case 1:
                return "gold";
            case 2:
                return "silver"
            case 3:
                return "bronze";
            default:
                break;
        }
    }
    return (
        <div id='profilecontainer'>
            {userData
                .slice() 
                .sort((a, b) => {
                    let aScore = (a.submitStats.acSubmissionNum[1].count) + (a.submitStats.acSubmissionNum[2].count * 3) + (a.submitStats.acSubmissionNum[3].count * 5)
                    let bScore = (a.submitStats.acSubmissionNum[1].count) + (b.submitStats.acSubmissionNum[2].count * 3) + (b.submitStats.acSubmissionNum[3].count * 5)
                    return bScore - aScore
                })
                .map((user, index, array) => (
                    <>
                    <Profile
                        index = {index}
                        key={user.id} 
                        name={user.username}
                        submissions={user.submitStats.acSubmissionNum[0].submissions}
                        easy={user.submitStats.acSubmissionNum[1].count}
                        medium={user.submitStats.acSubmissionNum[2].count}
                        hard={user.submitStats.acSubmissionNum[3].count}
                        total={user.submitStats.acSubmissionNum[0].count}
                        avatar={user.profile.userAvatar}
                        leetcodeprofile={`https://leetcode.com/` + user.username}
                        color={getColor(index+1)}
                    />
                    {index !== array.length - 1 && <div id="divider"></div>}
                 </>
                ))
            }
        </div>
    );
    
}
