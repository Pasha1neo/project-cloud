import { UsersListComponent as UsersList } from "./userslist";
import { TextTitle } from "../../lib/elements/text";
// я использовал фрагмент из за SectionLayout его стили применились к этому компоненту
export function UsersComponent(props) {
	return (
		<>  
			<TextTitle tid='OTHER.TITLE.USERS'/>
			<UsersList {...props} />
		</>
	)
}
