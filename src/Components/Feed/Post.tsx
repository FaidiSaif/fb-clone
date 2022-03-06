import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { ExpandMoreOutlined } from "@material-ui/icons";
import "./Post.css";

export type PostType = {
  key: number
  profilePic : string ,
  image : string ,
  username : string,
  timestamp? : any,
  message: string ,
};

export const Post = ({
  key,
  profilePic,
  image,
  username,
  timestamp,
  message,
}: PostType) => {
  return (
    <div className="post" key={key}>
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3> {username} </h3>
          <p> {new Date(timestamp?.toDate()).toLocaleTimeString()} </p>
        </div>
      </div>

      <div className="post__bottom">
        <p> {message} </p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};
