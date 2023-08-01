import { Application, oakCors } from './imports.ts';
import route from './routes.ts';

import { handleAuth } from './utilities.ts';

const app = new Application();

app.use(
    oakCors(),
    handleAuth(),
    route.routes(),
    route.allowedMethods()
)

await app.listen({port: 8800})



