import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from "./action"


const initial = {
    loading : false,
    failure : false,
    username:"",
    token:"",
}

export const loginReducer = (store=initial,{type,payload})=>{
    switch(type){
        case LOGIN_LOADING:
          return {...store, loading:true};
        case LOGIN_SUCCESS:
            return {
                ...store,
                loading:false,
                username:payload.username,
                failure:false,
            }
        case LOGIN_FAILURE:
            return{...store, failure:true}
        default:
            return store;
    }
}