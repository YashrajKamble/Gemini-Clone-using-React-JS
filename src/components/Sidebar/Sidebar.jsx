import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { useState } from "react";

const SideBar = () => {
    const [extended, setExtended] = useState(true);

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="menu icon" />

                <div className="new-chat">
                    <img src={assets.plus_icon} alt="plus icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="message icon" />
                        {extended ? <p>What is react</p> : null}
                    </div>
                </div> : null}

            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="help" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="activity" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default SideBar;