import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';


const CHANGE_EVENT = 'change';
let _loginParams = {
    username: '',
    password: ''
}
let _loginResult={
    token:'',
    errorMessage:''
}
let _loginStatus = { trying_login: false, succeed_login: false };

function setLoginParams(params) {
        _loginParams.username = params.email,
        _loginParams.password = params.password

}
function setLoginStatus(newStatus) {
    _loginStatus = newStatus;
}
function setLoginResult(result){
    _loginResult.token = result
}
function setLoginResultError(result){
    _loginResult.errorMessage = result
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
    getLoginParams() {
        return _loginParams
    }
    getLoginStatus(){
        return _loginStatus
    }

}
const LoginStore = new LoginStoreClass();

LoginStore.dispatchToken = AppDispatcher.register(action => {
    switch (action.actionType) {
        case LoginConstants.SET_LOGIN_PARAMS:
            setLoginParams(action.params);
            LoginStore.emitChange();
            break;
        case LoginConstants.TRY_LOGIN:
            setLoginStatus({trying_login: true, succeed_login: false});
            break;
        case LoginConstants.SUCCEED_LOGIN:
            setLoginStatus({trying_login: false, succeed_login: false});
            setLoginResult(action.result)
            break;
        case LoginConstants.ERROR_LOGIN:
            setLoginStatus({trying_login: false, succeed_login: false});
            setLoginResultError(action.result)
            break;
    }
})
export default LoginStore