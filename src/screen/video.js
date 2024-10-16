import './Video.css';
import {useNavigate} from 'react-router-dom';
function Video(){
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
        <div className="Video">
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
            <div className="Vtop">
                <p>Videos</p>
                <div className="Icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="content">
            <div className="topholder">
                <img />
                <p></p>
                <icon1/>
                <icon2/>
            </div>
            <caption> <h5></h5> </caption>
            <main></main>
            <div className="react">
                <icon3/>
                <icon4/>
                <icon5/>
            </div>
        </div>
        </div>
    );
}
export default Video;