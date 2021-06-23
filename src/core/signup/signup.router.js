import {SIGNUP_REDIRECT_ON_LOGGED, SIGNUP_ROUTER_PATH} from './signup.constant'
import {setActivePath} from '../../lib/common/navigation/navigation.action'
import { authRedirectLogged } from '../../lib/common/auth'

export function SignupRouter(ctx) {
	ctx.store.dispatch(setActivePath(SIGNUP_ROUTER_PATH))
	authRedirectLogged(ctx, SIGNUP_REDIRECT_ON_LOGGED)
}