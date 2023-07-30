import { Router, Context } from './imports.ts';
import { HomeRoute, AboutMe } from './utilities.ts';
// import * as util from './utilities.ts';
import authenticate from  './Controllers/Authentication.ts';

const router = new Router()
// console.log("The router instance is", router)

router.get(
    '/',
    async (ctx: Context)  => {
        // HomeRoute(ctx)
    }
    // ...util.HomeRoute
)
.get(
    '/about-me',
    async (ctx: Context) => {
        AboutMe(ctx)
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