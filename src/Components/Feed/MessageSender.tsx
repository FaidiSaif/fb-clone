import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import "./MessageSender.css";
import { useState } from "react";
import db, { collection, addDoc , Timestamp  } from "../../firebase";
import { useStateValue } from "../../StateProvider";



export const MessageSender = () => {
  const [postMessage, setPostMessage] = useState("");
  const [imagePost, setImagePost] = useState("");
  const [{user}, dispatch] = useStateValue(); 
  
  const handlePostInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setPostMessage(e.currentTarget.value);
  };

  const handleImagePostInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setImagePost(e.currentTarget.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("just before addign doc", {"name":  user?.displayName, "url" : user?.photoURL})
    addDoc(collection(db, "posts"), {
      message: postMessage,
      profilPic: user?.photoURL,
      username: user?.displayName,
      image: imagePost
    })
      .then((resp) => console.log("added doc ..", resp))
      .catch((e) => console.error("Error adding document: ", e));

      setPostMessage(""); 
      setImagePost(""); 

  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar
          src={
            "https://media-exp1.licdn.com/dms/image/C4D03AQGTmkS8TNfuDA/profile-displayphoto-shrink_800_800/0/1605539149032?e=1651708800&v=beta&t=FggsNS9GNPao7DndKRv4xCptAk91PVbcbmIcT1czdS0"
          }
        />
        <form>
          <input
            type="text"
            placeholder="What's  in your Mind"
            className="messageSender__input"
            value={postMessage}
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
