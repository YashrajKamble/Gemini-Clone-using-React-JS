import "./Sidebar.css";
import { assets } from '../../assets/assets';
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const SideBar = () => {
    const [extended, setExtended] = useState(true);
    const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`sidebar ${extended ? "larger" : ""}`}>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu" src={assets.menu_icon} alt="menu icon" />

                <div className="new-chat">
                    <img src={assets.plus_icon} alt="plus icon" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry" key={index}>
                                <img src={assets.message_icon} alt="message icon" />
                                {extended ? <p>{item.slice(0, 31)}...</p> : null}
                            </div>
                        );
                    })}

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

                {extended ? <div className="location">
                    <span></span>
                    <div>
                        <p>Mumbai, Maharashtra, India</p>
                        <p className="ip">From your IP address • Update location</p>
                    </div>

                </div> : null}

            </div>
        </div>
    );
};

export default SideBar;