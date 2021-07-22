import express, {Request, Response} from 'express';
import { router } from './routes';
import path from 'path';
import { routerPainel } from './routes/painel';

const server = express();

server.use(express.static(path.join(__dirname, '../public')))

server.use('/', router);
server.use('/painel', routerPainel);

//se nenhum dos use la de cima for ultilizado esse sera feito.
server.use((req: Request, res: Response) => {
    res.status(404).send('Pagina não encontrada!')
})

server.listen(3000);