import styled from 'styled-components';
import { spacing } from '../../theme'

// Чёт в голову не приходит чё ещё можно впихнуть сюда
export function ButtonSuccess({successing, type='button', children, disabledFn=null,}) {
	return (
		<Button type={type} disabled={disabledFn}>
			{successing ? 'Подождите' : children}
		</Button>
	)
} 

const Button = styled.button`
background: linear-gradient(160.64deg, #2D9CDB 0%, #0098EE 0.01%, #54B6ED 100%);
border-radius: 5px;
padding: ${spacing(3)};
color: white;
`
