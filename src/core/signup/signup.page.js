import { PageLayout, AuthLayout, ContentLayout, SectionLayout} from '../../lib/elements/layout'
import {SignupContainer} from './signup.container'

export function SignupPage () {
	return (
		<ContentLayout>
			<PageLayout>
				<AuthLayout>
					<SectionLayout>
						<SignupContainer/>
					</SectionLayout>
				</AuthLayout>
			</PageLayout>
		</ContentLayout>
	)
}
