import { Context, Next } from './imports.ts';

// const HomeRoute = [
//     async (ctx: Context) => {
//         ctx.response.body = ""
//     }
// ]
// export { HomeRoute }



export function handleAuth() {
    let _ = async (context: Context, next: Next) => {
        await next()
    }
    return _
}