import { jwt } from './JWT.ts';

class Authentication {

    constructor() {}

    async login<T>(context: T) {
        let payload = await context.request.body().value;
        let JWT_TOKEN = await jwt.generateToken(payload)
        console.log("the JWT TOKEN ", JWT_TOKEN)
        context.response.body = { token: JWT_TOKEN }
    }
}

const auth = new Authentication();
export default auth;
