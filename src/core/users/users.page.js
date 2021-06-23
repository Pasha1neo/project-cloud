import { PageLayout, AuthLayout, ContentLayout, SectionLayout} from '../../lib/elements/layout'
import { UsersContainer } from './users.container'

export function UsersPage () {
	return (
		<ContentLayout>
			<PageLayout>
				<AuthLayout>
					<SectionLayout>
						<UsersContainer/>
					</SectionLayout>
				</AuthLayout>
			</PageLayout>
		</ContentLayout>
	)
}
