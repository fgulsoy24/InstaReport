import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';


export default {
	setLoginParams: (params) => {
		AppDispatcher.dispatch({
		  actionType: LoginConstants.SET_LOGIN_PARAMS,
		  params: params
		});
    }
}