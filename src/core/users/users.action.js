import {httpRequest} from '../../main/http'
import {USERS_ACTION_TYPE} from './users.type'
import { USERS_API } from './users.constant'
import {authSetData} from '../../lib/common/auth'
export function UsersActionGetData() {
	return async(dispatch)=>{
		dispatch({type: USERS_ACTION_TYPE.USERS_DATA_GET_PENDING})
		try {
			// const res = await httpRequest({
			// 	method: USERS_API.USERS_DATA_GET.METHOD,// НЕРАБОТАЕТ возможно нужен access token
			// 	url:USERS_API.USERS_DATA_GET.ENDPOINT, // НЕРАБОТАЕТ возможно нужен access token 
			// })
			// dispatch(authSetData(res.data.accessToken))
			const res = await new Promise((resolve, reject) => {
				setTimeout(() => {
				  resolve({data: {
					  users: [
						  {ID: 1, username: 'testUser1',},
						  {ID: 2, username: 'testUser2',},
						  {ID: 3, username: 'testUser3',}
						]
					}});
				}, 2000);
			});
			const usersConvertedData = res.data.users.map(({ID, username})=>{
				return {id: ID, name: username}
			})
			dispatch({type: USERS_ACTION_TYPE.USERS_DATA_GET_SUCCESS, users: usersConvertedData})
		} catch (error) {
			dispatch({type: USERS_ACTION_TYPE.USERS_DATA_GET_ERROR, message: error.response.data.message})
		}
	}
}