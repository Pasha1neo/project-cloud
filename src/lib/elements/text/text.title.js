import {text} from '../../common/text'
import styled from 'styled-components'
import {THEME_SIZE, THEME_COLOR} from '../../theme'

export function TextTitle({tid}){
return (
	<Text>
		{text(tid)}
	</Text>
)
}
const Text = styled.span`
font-size: ${THEME_SIZE.FONT.TITLE};
color: ${THEME_COLOR.TEXT_PRIMARY};
font-family: Inter;
font-style: normal;
font-weight: bold;
line-height: 27px;
`