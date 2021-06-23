import {USERS_ROUTER_PATH} from './users.constant'
import {setActivePath} from '../../lib/common/navigation/navigation.action'

export function UsersRouter(ctx) {
	ctx.store.dispatch(setActivePath(USERS_ROUTER_PATH))
}