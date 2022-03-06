import { StoryReel } from "./StoryReel";
import { MessageSender } from "./MessageSender";
import { Post, PostType } from "./Post";
import "./Feed.css";
import { useEffect, useState } from "react";
import db from "../../firebase";

import { collection, getDocs } from "../../firebase";

export const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const func = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const locPosts: PostType[] = [];
      querySnapshot.forEach((doc) => {
        console.log("data =====>", doc.data())
        const { id , profilePic, image, username, timestamp, message } = doc.data();
        locPosts.push({ key: id, profilePic: `${profilePic}`, image, username, timestamp, message });
      });
      setPosts(locPosts);
    };
    func();
  }, []);

  if (posts) {
    console.log("posts = ", posts)
  }
  //console.log(posts);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post: PostType) => (
        <Post
          key={post.key}
          profilePic={post.profilePic as string}
          image={post.image}
          username={post.username}
          timestamp={post.timestamp}
          message={post.message}
        />
      ))}
    </div>
  );
};
