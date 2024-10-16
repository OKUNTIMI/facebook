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
            name:"Yetunde ",
        },
        {
            profile:"",
            name:"Ayomide",
        },
        {
            profile:"",
            name:"Malik",
        },
        {
            profile:"",
            name:"Nifemi",
        },
        {
            profile:"",
            name:"Miracle",
        },
        {
            profile:"",
            name:"Eric",
        },
        {
            profile:"",
            name:"Moses",
        }
    ]

    const message=[
        {
            profile:"",
            name:"Yetunde Liasa",
            text:"baby why are you doing this to ma nah",
        },
        {
            profile:"",
            name:"Eric Adefolakanmi",
            text:"Bro you sabi that girl?",
        },
        {
            profile:"",
            name:"Moses Deroid",
            text:"Brother David the said I should tell you something.",
        },
        {
            profile:"",
            name:"Malik Ahmad",
            text:"bro hwfar send me code",
        },
        {
            profile:"",
            name:"Bola made",
            text:" omo e get one babe wey i been see today",
        },
        {
            profile:"",
            name:"Tola finde",
            text:"longest time bro",
        },
        {
            profile:"",
            name:"Amaka Glory",
            text:"hey baby boy how have you been ",
        },
        {
            profile:"",
            name:"Babatunde sherif",
            text:"Sir the good are ready when should we transport dem",
        }
    ]
    return(
        <div className="chat">
            <ul>
                <div onClick={clickHomescreen}><span class="material-symbols-outlined">
home
</span></div>
                <div onClick={clickFriend}><span class="material-symbols-outlined">
group
</span></div>
                <div onClick={clickChat}><span class="material-symbols-outlined">
chat
</span></div>
                <div onClick={clickNotification}><span class="material-symbols-outlined">
notifications
</span></div>
                <div onClick={clickVideo}><span class="material-symbols-outlined">
smart_display
</span></div>
                <div onClick={clickMarket}><span class="material-symbols-outlined">
store
</span></div>
            </ul>
            <div className="active">
                <div className="top">
                    <p>Messages</p>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="PH">
                {active.map((item,index)=>(
                    <div key={index} className='profile'>
                        <div></div>
                        <p>{item.name}</p>
               </div> 
                ))}
                </div>
            </div>
            <div className="messages">
                {message.map((item,index)=>(
                <div key={index} className="message-holder">
                    <div className="message-profile-pic"></div>
                    <div className="message-content">
                        <h3>{item.name}</h3>
                        <h4>{item.text}</h4>
                    </div>
                </div>
                ))}
            </div>
            <div className="Add-Chat">+</div>
        </div>
    );
}
export default Chat;