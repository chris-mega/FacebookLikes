const initialState = {
   logged: false
};

export default function(state = initialState, action){
   switch(action.type){
      case "CHANGE_USER":
         return {
            ...state,
            logged: action.logged,
            user: action.user
         };
      default:
         return state;
   }
}