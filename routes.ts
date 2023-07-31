import { Router, Context } from './imports.ts';
import { HomeRoute, AboutMe } from './utilities.ts';
// import * as util from './utilities.ts';
import authenticate from  './Controllers/Authentication.ts';
import about from './Controllers/About.ts';

const router = new Router()
// console.log("The router instance is", router)

router.get(
    '/',
    async (ctx: Context)  => {
        // HomeRoute(ctx)
        ctx.response.body = "Hola!"
    }
    // ...util.HomeRoute
)
.get(
    '/about-me',
    async (ctx: Context) => {
        await about.handlerFn<Context>(ctx)
    }
)
.post(
    '/login',
    async (ctx: Context) => {
        await authenticate.login<Context>(ctx)
    }
)


// console.log("the routes are", router)
export default router