import { jwt } from './JWT.ts';

class Authentication {

    constructor() {}

    async login<T>(context: T) {
        let payload = await context.request.body().value;
        let JWT_TOKEN = await jwt.generateToken(payload)
        context.response.body = { token: JWT_TOKEN }
    }

    async logout<T>(context: T){

    }

    async register(){

    }
}

export default new Authentication() as const;
