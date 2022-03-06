import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";
import { useState } from "react";

export const MessageSender = () => {

  const [post, setPost] = useState(""); 
  const handlePostInput = (e : React.FormEvent<HTMLInputElement>):void => { 
    setPost(e.currentTarget.value)
  }

  const [imagePost, setImagePost] = useState(""); 
  const handleImagePostInput = (e : React.FormEvent<HTMLInputElement>):void => { 
    setImagePost(e.currentTarget.value)
  }

  const handleSubmit = (e : React.SyntheticEvent ) => {
    e.preventDefault(); 
    console.log("Submitted : ", post , imagePost)
  }

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={"https://media-exp1.licdn.com/dms/image/C4D03AQGTmkS8TNfuDA/profile-displayphoto-shrink_800_800/0/1605539149032?e=1651708800&v=beta&t=FggsNS9GNPao7DndKRv4xCptAk91PVbcbmIcT1czdS0" } />
        <form>
          <input
            type="text"
            placeholder="What's  in your Mind"
            className="messageSender__input"
            value={post}
            onChange={handlePostInput}
          />
          <input
            type="text"
            placeholder="Insert Your Image"
            value={imagePost}
            onChange={handleImagePostInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Handle Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
