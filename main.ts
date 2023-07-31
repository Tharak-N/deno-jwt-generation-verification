import { Application, oakCors } from './imports.ts';
import route from './routes.ts';

const app = new Application();

// console.log("the routes are", route)
// console.log("the puter routes are", route.routes())
app.use(
    oakCors(),
    route.routes(),
    route.allowedMethods()
)

// console.log("the app file", app)

await app.listen({port: 8800})



