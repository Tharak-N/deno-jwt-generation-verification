import authorization from './Authorization.ts';

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
        context.response.body = JSON.stringify("Hello Tharak")
    }
}

export default new AboutMe() as const;