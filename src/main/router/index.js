import { routesInit } from './router.core';
import { SignupRouter, SIGNUP_ROUTER_PATH } from '../../core/signup';
import { UsersRouter, USERS_ROUTER_PATH } from '../../core/users';
export const routes = {
	[SIGNUP_ROUTER_PATH]: SignupRouter,
	[USERS_ROUTER_PATH]: UsersRouter,
};

export const Router = routesInit(routes);
