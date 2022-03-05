import './SideBar.css';
import {SidebarRow} from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar">
        <SidebarRow src={"https://media-exp1.licdn.com/dms/image/C4D03AQGTmkS8TNfuDA/profile-displayphoto-shrink_800_800/0/1605539149032?e=1651708800&v=beta&t=FggsNS9GNPao7DndKRv4xCptAk91PVbcbmIcT1czdS0"} title={"saif faidi"} />
        <SidebarRow
          Icon={LocalHospitalIcon}
          title="COVID-19 Information Center"
        />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Market" />
      </div>
    </div>
  );
};
