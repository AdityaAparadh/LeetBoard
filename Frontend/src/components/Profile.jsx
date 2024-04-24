const Profile = (props) =>{

   return(
    <div className="profile">

        <img src="../src/assets/profile.png" alt="profile" className="profileimg" />

        <div id="namesolved">
            <div id = "name">
                {props.name}
            </div>
            <div id="submissions"> Total Submissions: {props.submissions} </div>
        </div>
        <div id="emh">
        <div id="easy"> {props.easy} </div>
        <div id="medium"> {props.medium} </div>
        <div id="hard"> {props.hard }</div>

        </div>
        <div id='total'> {props.total}  <div style={{fontSize: "12px"}}>total</div></div>
    </div>
   ) 

}

export default Profile;

