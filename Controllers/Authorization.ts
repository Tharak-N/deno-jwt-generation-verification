import { jwt } from './JWT.ts';

class AuthorizationCheck {

    constructor(){}

    async isAuthorized(token: any) {
        return await jwt.isAuthorized(token)
    }
}

export default new AuthorizationCheck() as const;