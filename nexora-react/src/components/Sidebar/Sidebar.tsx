import "./Sidebar.css"
import NexoraLogo from "../../assets/logos/Nexora_Logo.png";
import SettingsIcon from "../../assets/icons/icon_settings.svg"
import SkillList from "./SkillList";
import TotalProgress from "./TotalProgress";

function Sidebar(){
    return (
        <aside id="sidebar">
            <div>
                <img src={NexoraLogo} alt="Nexora" id="nexora-logo"/>
                <SkillList />
            </div>

            <TotalProgress />

            <div id="sidebar-settings">
                <hr/>
                <button className="btn" id="btn-settings">
                    <img src={SettingsIcon} alt="Zahnrad Icon für die Einstellungen"/>
                    <span>Einstellungen</span>
                </button>
            </div>
        </aside>

    )
}

export default Sidebar;