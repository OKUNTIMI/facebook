import "./Homescreen.css"
import {useNavigate} from "react-router-dom";

const content=[
    {
        Pics:<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"/>,
        user:"Oribhunuebho osas",
        icon1:<span class="material-symbols-outlined">more_horiz</span>,
        icon2:<span class="material-symbols-outlined">close</span>,
        caption:"I am a website developers",
        main:"",
        icon3:<span class="material-symbols-outlined">thumb_up</span>,
        icon4:<span class="material-symbols-outlined">send</span>,
        icon5:<span class="material-symbols-outlined">tooltip</span>
    },
    {
        Pics:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        user:"Okunola David",
        icon1:<span class="material-symbols-outlined">more_horiz</span>,
        icon2:<span class="material-symbols-outlined">close</span>,
        caption:"I am the main deal",
        main:"",
        icon3:<span class="material-symbols-outlined">thumb_up</span>,
        icon4:<span class="material-symbols-outlined">send</span>,
        icon5:<span class="material-symbols-outlined">tooltip</span>
    },
]


function Homescreen(){
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
    <div className="Homescreen">
        <header>
            <p>facebook</p>
            <ul>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
            </ul>
        </header>
        <div className="homeicon">
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
        </div>
        <div className="homeprofileaccess">
            <div className="HPLI"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"/></div>
            <input type="text" placeholder="what's on your mind?"  />
            <div></div>
        </div>
        <div className="story">
        </div>
        <div className="content">
        {content.map((value,index)=>(
            <div key={index}>
                <div key={index} className="topholder">
                    <div className="img">{value.pics}</div>
                    <p>{value.user}</p>
                    <div>{value.icon1}</div>
                    <div>{value.icon2}</div>
                </div>
                <div className="caption"> <p>{value.caption}</p> </div>
                <main></main>
                <div className="react">
                    <div>{value.icon3}</div>
                    <div>{value.icon5}</div>
                    <div>{value.icon4}</div>
                </div>
            </div>
        ))}
        </div>
    </div>
    );
}
export default Homescreen;