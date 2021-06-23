import {text} from '../../common/text'
import styled from 'styled-components'
import {THEME_SIZE, THEME_COLOR} from '../../theme'


export function TextSecondary({tid=null, children=null}) {
	return <Text>{text(tid) || children}</Text>
}

const Text = styled.span`
font-size: ${THEME_SIZE.FONT.SMALL};
color: ${THEME_COLOR.TEXT_SECONDARY};
`