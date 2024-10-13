import './Chat.css';
import {useNavigate} from 'react-router-dom';
function Chat(){
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


    const active=[
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        },
        {
            profile:"",
            name:"",
        }
    ]

    const message=[
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        },
        {
            profile:"",
            name:"",
            text:"",
        }
    ]
    return(
        <div className="chat">
            <ul>
                <div onClick={clickHomescreen}>home </div>
                <div onClick={clickFriend}>Friends</div>
                <div onClick={clickChat}>chats</div>
                <div onClick={clickNotification}>Notifications</div>
                <div onClick={clickVideo}>Videos</div>
                <div onClick={clickMarket}>Market</div>
            </ul>
            <div className="active">
                <div className="top">
                    <p>Messages</p>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='profile'>
                    <div></div>
                    <p>tunde</p>
                </div>
            </div>
            <div className="messages">
                <div className="message-holder">
                    <div className="message-profile-pic"></div>
                    <div className="message-content">
                        <h3>Okunola Timilehin</h3>
                        <h4>hey it been a little while bro</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chat;