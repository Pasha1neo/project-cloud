import styled from 'styled-components';
import { FieldLayout } from '../../../../lib/elements/layout';
import { FieldPrimary as Field } from '../../../../lib/elements/field/field.primary';
import {ButtonSuccess as Button} from '../../../../lib/elements/button'

export function SignupFormComponent (props) {
	const {
		fieldLogin, 
		fieldPassword, 
		handleChange, 
		handleBlur, 
		handleSubmit, 
		values, 
		errors, 
		touched, 
		isSubmitting,
		isPending,
		isSuccess,
		isError,
		errorMessage,
		pageLoading
	} = props
	const isFieldError = (name) => {
		return errors[name] && touched[name] && errors[name]
	}
	const isSubmitDisabled = ()=> isPending || isSuccess
	return(
		<form onSubmit={handleSubmit}>
			<Container>
				{!pageLoading && 'pageLoading'}
				<FieldLayout>
					<Field
					titleTid='SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE'
					placeholderTid='SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER'
					name={fieldLogin}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[fieldLogin]}
					error={isFieldError(fieldLogin)}
					/>
					<Field
					titleTid='SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE'
					placeholderTid='SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER'
					name={fieldPassword}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values[fieldPassword]}
					error={isFieldError(fieldPassword)}
					type='password'
					/>
				</FieldLayout>
					<Button successing={isPending} type="submit" disabled={isSubmitDisabled()}>
						Создать аккаунт
					</Button>
					{isError && errorMessage}
			</Container>
		</form>
	)
}
const Container = styled.div`
display: grid;
gap: 12px;
`
