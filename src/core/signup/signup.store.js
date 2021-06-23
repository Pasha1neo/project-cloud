import { SIGNUP_ACTION_TYPE } from './signup.type';
import { initRequestState, resetRequestStatus, setRequestError, setRequestPending, setRequestSuccess } from '../../main/store/store.service';
const initialState = {
  signupForm: initRequestState()
};

export function signupStore(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING:
		return {
			...state,
			signupForm: setRequestPending(state.signupForm)
		};
	case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS:
		return {
			...state,
			signupForm: setRequestSuccess(state.signupForm)
		};
	case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR:
		return {
			...state,
			signupForm: setRequestError(state.signupForm, action.message)
		};
	// case SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_RESET:
	// 	return {
	// 		...state,
	// 		signupForm: resetRequestStatus(state.signupForm)
	// }
    default:
    	return state;
  }
}
