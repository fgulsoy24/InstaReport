import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';


const CHANGE_EVENT = 'change';
let _loginParams = {
   email:'',
   password:''
}
function setLoginParams(params){
    _loginParams.email = params.email,
    _loginParams.password = params.password

}
class LoginStoreClass extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.listeners().forEach(function (listener) {
            listener.remove();
        });
    }
    getLoginParams(){
        return _loginParams
    }

}
const LoginStore = new LoginStoreClass();

LoginStore.dispatchToken = AppDispatcher.register(action =>{
    switch (action.actionType){
        case LoginConstants.SET_LOGIN_PARAMS:
            setLoginParams(action.params);
            break;
    }
})
export default LoginStore