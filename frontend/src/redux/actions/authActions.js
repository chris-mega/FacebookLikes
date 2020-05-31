export function changeUser(user){
  return{
    type: "CHANGE_USER",
    logged: true,
    user: user
  }
}