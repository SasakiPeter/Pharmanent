// action type
const LOGIN='LOGIN';
const 

const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                username: action.username,
                password: action.password,
            }
        // in case of failure
        default:
            return state;
    }
};

export default LoginReducer;

// なんとかしたい　これは新規登録
const saveTokenReducer = (state = {}, action) => {
    switch (action.type) {
        case "SAVE_TOKEN":
            console.log(action.token)
            console.log("saveTokenReducer.SAVE_TOKEN")
            localStorage.setItem('jwt', action.token)
            // return Object.assign({}, state, {
            //     token: action.token
            // })
            return state;
        // in case of failure
        default:
            return state;
    }
};

export default saveTokenReducer;



export const Login = (username, password) => {
    return {
      type: "LOGIN",
      username: username,
      password: password,
    }
  }
  
  export const saveToken = (token) => {
    return {
      type: "SAVE_TOKEN",
      token,
    }
  }