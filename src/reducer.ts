export type StateType = {
  user: UserType | null;
};

export enum ActionsEnum {
  USER_LOGIN,
  USER_LOGOUT,
}


type UserType  ={
  photoURL : any,
  displayName: any 
}


export type ActionType = {
  payload: null | UserType;
  type: ActionsEnum;
};
export const initialState  ={
  user: null
} 

export const userReducer = (prevState: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case ActionsEnum.USER_LOGIN:
      return {
        ...prevState,
        user: action.payload!,
      };
    case ActionsEnum.USER_LOGOUT:
      return prevState;

    default:
      return prevState;
  }
};
