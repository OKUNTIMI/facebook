import "./Homescreen.css"
import { useNavigate } from "react-router-dom";

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
    const clickfriends=()=>{
        navigate("/friends",{})
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
                <li><a href="/">1</a></li>
                <li onClick={clickfriends}>2</li>
                <li><a href="./chats">3</a></li>
                <li><a href="./notifications">4</a></li>
                <li><a href="./video">5</a></li>
                <li><a href="./market">6</a></li>
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