import {Divider} from '../../../lib/elements/divider'
import styled from 'styled-components'
import { spacing } from '../../../lib/theme'
import { TextSecondary } from '../../../lib/elements/text'

export function UsersListComponent({usersData, isPending, isError, isSuccess, errorMessage}){
	const UsersList = usersData.map((item)=> <UsersListItem {...item}/>) 
	return (
		<Container>
			{isPending && <TextSecondary>...Loading</TextSecondary>}
			{UsersList}
		</Container>
	)
}

export function UsersListItem({id, name}) {
	return (
		<>
			<TextSecondary>ID: {id}</TextSecondary>
			<div>{name}</div>
			<Divider/>
		</>
	)
}
const Container = styled.div`
 display: grid;
 gap: ${spacing(2)}
`