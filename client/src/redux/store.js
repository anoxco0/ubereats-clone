import { compose,applyMiddleware,combineReducers,createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { emailReducer, emailStatusReducer, NavBgReducer, navSearchReducer, pageReducer, passwordReducer } from "./reducer";

const composeEnhancers = 
typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

  const middleware = [thunk]

const enhancer = composeEnhancers(
applyMiddleware(...middleware),
// other store enhancers if any
);

const rootReducer = combineReducers({
    openPage:pageReducer,
    navSearch:navSearchReducer,
    setNavBg:NavBgReducer,
    email:emailReducer,
    password:passwordReducer,
    emailStatus:emailStatusReducer,
    login: loginReducer,
})

export const store = createStore(rootReducer,enhancer);