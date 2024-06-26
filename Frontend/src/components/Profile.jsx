const Profile = (props) =>{

   return(
        <a className={`profile` } href={props.leetcodeprofile} target="_blank" rel="noopener noreferrer">
        <div id="index" > {props.index + 1}</div>
        <div id="profileimgcontainer">

        <img src={props.avatar} alt="profile" className="profileimg" />
        </div>

        <div id="namesolved" >
            <div id = "name" className={props.color} >
                {props.name}
            </div>
            <div id="submissions"> Total Solved: {props.total} </div>
        </div>
        <div id="emh">
        <div id="easy"> {props.easy} </div>
        <div id="medium"> {props.medium} </div>
        <div id="hard"> {props.hard }</div>
        </div>
        <div style={{width:"2%"}}></div>
        {/* <div id="totalcontainer">
        <div id='total'> {props.total}  <div style={{fontSize: "0.6em"}}>total</div></div>
        </div> */}
    </a>
   ) 

}

export default Profile;

