import authorization from './Authorization.ts';
import { userDetails } from '../mongose.ts';

class AboutMe {

    constructor() {}

    async handlerFn<T>(context: T){
        let token = await context.request.headers.get('Authorization')
        try {
            if(await authorization.isAuthorized(token)) await this.responseHandlerFn<T>(context)
            else context.response.body = JSON.stringify("Token Expired")
        }
        catch (e: any) {
            throw new Error(e)
        }
    }
    
    async responseHandlerFn<T>(context: T){
        console.log("data from mongo is", userDetails)
        context.response.body = JSON.stringify("Hello World")
    }
}

export default new AboutMe() as const;