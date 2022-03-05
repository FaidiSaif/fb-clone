import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";

import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";

export const Header = () => {
  return (
    <div className="header">
      {/* left icons */}
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook Logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="txt" placeholder="Search Facebook" />
        </div>
      </div>

      {/* center icons */}
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        {/* <div className="test">C1</div>
        <div className="test">C2</div>
        <div className="test">C3</div> */}
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQGTmkS8TNfuDA/profile-displayphoto-shrink_800_800/0/1605539149032?e=1651708800&v=beta&t=FggsNS9GNPao7DndKRv4xCptAk91PVbcbmIcT1czdS0" />
          <h4> saif faidi</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};
