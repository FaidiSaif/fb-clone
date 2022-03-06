import { Button } from '@material-ui/core';
import {auth, signInWithPopup,provider} from '../firebase'; 
import { ActionsEnum } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css'; 


export const Login = () => {
  const [{user}, dispatch ] = useStateValue(); 

  const signIn = () => {
    signInWithPopup(auth, provider).then(res => {
      console.log("auth ====> ", res.user)
      dispatch({type: ActionsEnum.USER_LOGIN , payload :res.user})
    })
  }
  return (
    <div className="login">
    <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png" 
        alt="Facebook Logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/250px-Facebook_Logo_%282019%29.svg.png"
        alt="Facebook Logo" width="150px" />
    </div>
    <Button type="submit" onClick={signIn} >Sign In</Button>
</div>
  )
}
