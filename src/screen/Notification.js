import './Notification.css';
import {useNavigate} from 'react-router-dom';
function Notification(){
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

    return(
        <div className="Notification">
            <ul>
                <div onClick={clickHomescreen}>home </div>
                <div onClick={clickFriend}>Friends</div>
                <div onClick={clickChat}>chats</div>
                <div onClick={clickNotification}>Notifications</div>
                <div onClick={clickVideo}>Videos</div>
                <div onClick={clickMarket}>Market</div>
            </ul>
            <div className="Ntop">
                <p>Notifications</p>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="Ncontent">
                <p>Earlier</p>
                <div className="holder">
                    <div className="Nprofile-pics"></div>
                    <div className="Ntext">
                        <div><h3>tunde</h3><h4>mentioned you and other followers in a post.</h4></div>
                        <h3>10/OCT at 09:30</h3>
                    </div>
                    <div className="icon"></div>
                </div>
            </div>
        </div>
    );
}
export default Notification;