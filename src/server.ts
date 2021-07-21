import express from 'express';
import { router } from './routes';
import { routerPainel } from './routes/painel';

const server = express()

server.use('/', router)
server.use('/painel', routerPainel)

server.listen(3000)