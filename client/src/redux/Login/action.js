

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginLoading = ()=>({
    type:LOGIN_LOADING
})

export const loginSuccess = (payload)=>({
    type:LOGIN_SUCCESS,
    payload
})

export const loginFailure = ()=>({
    type:LOGIN_FAILURE
})

export const login = ({email,password})=>(dispatch)=>{
    dispatch(loginLoading());
    fetch("/login",{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email:email,password:password})
    })
    .then(res=>console.log(res.json())).then((data)=>{localStorage.setItem('user',JSON.stringify(data)); dispatch(loginSuccess({username:email}))})
    .catch((error)=>dispatch(loginFailure()))
}