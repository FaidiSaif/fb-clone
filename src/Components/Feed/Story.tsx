import { Avatar } from '@material-ui/core'
import './Story.css'
type StoryItemsType = {
  image : string, 
  profileImage : string, 
  name : string 
}

export const Story = ( {image, profileImage, name}:  StoryItemsType) => {
  return (
    <div className="story" style={{backgroundImage :`url(${image})`}}>
      <Avatar src={profileImage}/>
      <h4>{name}</h4>
    </div>
    )
}
