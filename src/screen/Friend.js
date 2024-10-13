import './Friend.css';
import {useNavigate} from 'react-router-dom';
function Friend(){
    const navigate=useNavigate()
    const clickHomescreen=()=>{
        navigate("/",{})
    }
    const clickFriend=()=>{
        navigate("/Friend",{})
    }
    const clickChat=()=>{
        navigate("/Chat",{})
    }
    const clickNotification=()=>{
        navigate("/Notification",{})
    }
    const clickVideo=()=>{
        navigate("/Video",{})
    }
    
    const clickMarket=()=>{
        navigate("/Market",{})
    }


    const FR =[
        {
            img:"",
            name:"",
        },
        {
            img:"",
            name:"",
        }
    ]

    const PYMK=[
        {
            img:"",
            name:"",
        },
        {
            img:"",
            name:"",
        },
        {
            img:"",
            name:"",
        }
    ]
    return(
        <body>
            <ul>
                <div onClick={clickHomescreen}>home </div>
                <div onClick={clickFriend}>Friends</div>
                <div onClick={clickChat}>chats</div>
                <div onClick={clickNotification}>Notifications</div>
                <div onClick={clickVideo}>Videos</div>
                <div onClick={clickMarket}>Market</div></ul>
            <div className="searchE">
                <p>Friends</p>
                <div></div>
            </div>
            <div className="SYF">
                <p>Sugestions</p> <p>Your Friends</p>
            </div>
            <div className="friendRequest">
                <div className="title"><p>Friends Requests</p> <a href='#'>See All</a></div>
                <div className="fRusers">
                    <img/>
                    <div className="action">
                        <p>BRIGHT</p>
                        <div>
                            <p>Confirm</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pymk">
                
                <div className="title"><p>People you may know</p> </div>
                <div className="pymkusers">
                    <img/>
                    <div className="action">
                        <p>BRIGHT</p>
                        <div>
                            <p>Confirm</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}
export default Friend;