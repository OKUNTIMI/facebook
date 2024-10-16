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
            name:"Tunde Abosede",
        },
        {
            img:"",
            name:"mummt Gee",
        }
    ]

    const PYMK=[
        {
            img:"",
            name:"Okunola Kehinde",
        },
        {
            img:"",
            name:"Bola Bade",
        },
        {
            img:"",
            name:"Olori ogbe",
        }
    ]
    return(
        <body>
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
            <div className="searchE">
                <p>Friends</p>
                <div></div>
            </div>
            <div className="SYF">
                <p>Sugestions</p> <p>Your Friends</p>
            </div>
            <div className="friendRequest">
                <div className="title"><p>Friends Requests</p> <a href='#'>See All</a></div>
                {FR.map((item,index)=>(
                    <div key={index} className="fRusers">
                        <img/>
                        <div className="action">
                            <p>{item.name}</p>
                            <div>
                                <p>Confirm</p>
                                <p>Delete</p>
                            </div>
                        </div>
                </div>
                ))}
                
            </div>
            <div className="pymk">
                
                <div className="title"><p>People you may know</p> </div>
                {PYMK.map((item,inmdex)=>(
                    <div className="pymkusers">
                    <img/>
                    <div className="action">
                        <p>{item.name}</p>
                        <div>
                            <p>Confirm</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </body>
    );
}
export default Friend;