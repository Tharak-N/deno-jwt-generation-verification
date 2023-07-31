import { Context } from './imports.ts';

export async function HomeRoute(ctx: Context) {
    const { request, response } = await ctx;
    response.body = "Hello Tharak "
}


export async function AboutMe(ctx: Context) {
    const {request, response} = await ctx;
    response.body = "Tharak"
}



// const HomeRoute = [
//     async (ctx: Context) => {
//         ctx.response.body = "Hey Tharak"
//     }
// ]
// export { HomeRoute }