import { Application, oakCors } from './imports.ts';
import route from './routes.ts';

const app = new Application();

// console.log("the routes are", route)
app.use(oakCors())
app.use(route.routes())
app.use(route.allowedMethods())


await app.listen({port: 8800})



