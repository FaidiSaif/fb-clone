
import { StoryReel } from './StoryReel'
import { MessageSender } from './MessageSender'
import { Post } from './Post'
import './Feed.css'

export const Feed = () => {
  return (
    <div className='feed'>
      <StoryReel /> 
      <MessageSender />
      <Post 
        profilePic = "https://media-exp1.licdn.com/dms/image/C4D03AQGTmkS8TNfuDA/profile-displayphoto-shrink_800_800/0/1605539149032?e=1651708800&v=beta&t=FggsNS9GNPao7DndKRv4xCptAk91PVbcbmIcT1czdS0"
        image = "https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg"
        username = "Saif"
        message  ="Look to this beautiful guy !"
      />
    </div>
  )
}
