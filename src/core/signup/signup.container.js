import React from 'react';
import {signupFormValidation} from './signup.validation'
import {SIGNUP_FORM_FIELD_NAME, SIGNUP_FIELD_NAME} from './signup.type'
import {SignupComponent} from './signup.component'
import {signupFormUploadData} from './signup.action'
import { useDispatch, useSelector } from 'react-redux';
import { SIGNUP_STORE_NAME } from './signup.constant';
import {NAVIGATION_STORE_NAME} from '../../lib/common/navigation'
import {isRequestPending, isRequestError, isRequestSuccess, getRequestErrorMessage} from '../../main/store/store.service'

export function SignupContainer()  {
	const {state, pageLoading} = useSelector((state)=>({
		state: state[SIGNUP_STORE_NAME],
		pageLoading: state[NAVIGATION_STORE_NAME]
	}))
	const dispatch = useDispatch()
	const signupFormSendData = (values)=>{
		dispatch(signupFormUploadData(values))
	}
	const signupFormGetInitialValue = ()=> {
		return {
			[SIGNUP_FIELD_NAME.LOGIN]: '',
			[SIGNUP_FIELD_NAME.PASSWORD]: '',
		}
	}
  return <SignupComponent
  isPending={isRequestPending(state.signupForm)}
  isError={isRequestError(state.signupForm)}
  isSuccess={isRequestSuccess(state.signupForm)}
  errorMessage={getRequestErrorMessage(state.signupForm)}
  pageLoading={pageLoading}
  validation={signupFormValidation}
  initialValue={signupFormGetInitialValue()} 
  onSubmitForm={signupFormSendData}
  fieldName={SIGNUP_FORM_FIELD_NAME}
  />
}
