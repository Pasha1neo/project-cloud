import {httpRequest} from '../../main/http'
import {SIGNUP_ACTION_TYPE} from './signup.type'
import { SIGNUP_API, SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH } from './signup.constant'
import {authSetData} from '../../lib/common/auth'
import { redirect } from 'next/dist/next-server/server/api-utils'
export function signupFormUploadData(data) {
	return async(dispatch)=>{
		dispatch({type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_PENDING})
		try {
			const res = await httpRequest({
				method: SIGNUP_API.SIGNUP_FORM_UPLOAD.METHOD,
				url:SIGNUP_API.SIGNUP_FORM_UPLOAD.ENDPOINT, 
				data
			})
			dispatch(authSetData(res.data.accessToken))
			dispatch({type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_SUCCESS})
			redirect(SIGNUP_FORM_REDIRECT_ON_UPLOAD_PATH)
		} catch (error) {
			dispatch({type: SIGNUP_ACTION_TYPE.SIGNUP_FORM_UPLOAD_ERROR, 
				message: error.response.data.message})
		}
	}
}