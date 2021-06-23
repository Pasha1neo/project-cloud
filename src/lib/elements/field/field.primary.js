import styled from 'styled-components'
import {spacing} from '../../theme'
import {text} from '../../common/text'
import { TextSecondary, TextError } from '../text'

export function FieldPrimary(props) {
	const {
		titleTid,
		onChange,
		onBlur,
		value,
		name,
		placeholderTid,
		error,
		type = 'text'
	} = props
 return (
	<Container>
		<TextSecondary tid={titleTid} value={"Логин"}/>
		<Input 
		onChange={onChange}
		onBlur={onBlur}
		value={value}
		name={name}
		placeholder={text(placeholderTid)}
		type={type}
		/>
		{error && <TextError>{error}</TextError>}
	</Container>
 )
}
const Container = styled.div`
display: flex;
flex-direction: column;
`
const Input = styled.input`
margin-top: 4px;
border-radius: 5px;
padding: ${spacing(3)};
background-color: #c1c1c1;
color: #707070;
`