import "./Homescreen.css"
import {useNavigate} from "react-router-dom";

const content=[
    {
        Pic:"",
        user:"",
        icon1:"",
        icon2:"",
        caption:"",
        main:"",
        icon3:"",
        icon4:"",
        icon5:""
    },
    {
        Pic:"",
        user:"",
        icon1:"",
        icon2:"",
        caption:"",
        main:"",
        icon3:"",
        icon4:"",
        icon5:""
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
                <div onClick={clickHomescreen}>home </div>
                <div onClick={clickFriend}>Friends</div>
                <div onClick={clickChat}>chats</div>
                <div onClick={clickNotification}>Notification</div>
                <div onClick={clickVideo}>Videos</div>
                <div onClick={clickMarket}>Market</div>
            </ul>
        </div>
        <div className="homeprofileaccess">
            <div></div>
            <input type="text" placeholder="what's on your mind?"  />
            <div></div>
        </div>
        <div className="story">
        </div>
        <div className="content">
            <div className="topholder">
                <img />
                <p></p>
                <icon1/>
                <icon2/>
            </div>
            <caption> <h5></h5> </caption>
            <main/>
            <div className="react">
                <icon3/>
                <icon4/>
                <icon5/>
            </div>
        </div>
    </div>
    );
}
export default Homescreen;