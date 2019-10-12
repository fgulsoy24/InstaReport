import AppDispatcher from '../dispatcher/AppDispatcher';
import LoginConstants from '../constants/LoginConstants';
import LoginAPI from '../utils/LoginAPI';


export default {
	setLoginParams: (params) => {
		AppDispatcher.dispatch({
		  actionType: LoginConstants.SET_LOGIN_PARAMS,
		  params: params
		});
    },
    login:(params) =>{
        AppDispatcher.dispatch({
            actionType: LoginConstants.TRY_LOGIN,
            params: params
          });
          LoginAPI
          .login(params)
          .then(result => AppDispatcher.dispatch({
              actionType: LoginConstants.SUCCEED_LOGIN,
              result: result
            }),
            failure => AppDispatcher.dispatch({
              actionType: LoginConstants.ERROR_LOGIN,
            }) 
          );


    }
}