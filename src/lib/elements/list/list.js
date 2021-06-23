import styled from 'styled-components'
import {THEME_SIZE, THEME_COLOR, spacing} from '../../theme'
import { Divider } from '../divider/divider'
// Реализацию можно подправить
function List({component='div', }) {
	return array.map((id, name)=>(
		<component key ={id}>
			{children}
			<Divider/>
		</component>
	))
}
// Короче это на пару часов что бы всё это сбацать нужно засесть



