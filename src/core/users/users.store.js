import { USERS_ACTION_TYPE } from './users.type';
import { initRequestState, setRequestError, setRequestPending, setRequestSuccess } from '../../main/store/store.service';
const initialState = {
  usersList: {
	  ...initRequestState(),
	  usersData: [],
  }
};

export function usersStore(state = initialState, action) {
  switch (action.type) {
    case USERS_ACTION_TYPE.USERS_DATA_GET_PENDING:
		return {
			...state,
			usersList: setRequestPending(state.usersList)
		};
	case USERS_ACTION_TYPE.USERS_DATA_GET_SUCCESS:
		return {
			...state,
			usersList: {
				...setRequestSuccess(state.usersList),
				usersData: action.users
			}
		};
	case USERS_ACTION_TYPE.USERS_DATA_GET_ERROR:
		return {
			...state,
			usersList: setRequestError(state.usersList, action.message)
		};
    default:
    	return state;
  }
}
