import { Application, oakCors } from './imports.ts';
import route from './routes.ts';

const app = new Application();
app.use(
    oakCors(),
    route.routes(),
    route.allowedMethods()
)
await app.listen({port: 8800})



