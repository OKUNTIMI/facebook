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

    const Notification=[
        {
            img:"",
            name:"Tunde Glory",
            info:"Request you join wenddy group",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"Globy Tee",
            info:"Highlighted a post from you too see",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"Eric Adewale",
            info:"mention you in a commemt section",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"Osas Obi",
            info:"Tag you in a post",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"Howard blutin",
            info:"Mentioned you in a comment section",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"okunola David",
            info:"Post on your timeline",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
        {
            img:"",
            name:"",
            info:"",
            icon:<span class="material-symbols-outlined">more_horiz</span>,
        },
    ]
    return(
        <div className="Notification">
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