import { SignupFormContainer } from "./frame/signup-form";
import { TextTitle } from "../../lib/elements/text";
// я использовал фрагмент из за SectionLayout его стили применились к этому компоненту
// На счёт Есть аккаунт? Войти? Ну есть вариант сделать Link компонент с какими то свойствами 
export function SignupComponent(props) {
	return (
		<>  
			<TextTitle tid='OTHER.TITLE.SIGN.UP'/>
			<SignupFormContainer {...props} />
			<div> Есть аккаунт? Войти?</div>
		</>
	)
}
