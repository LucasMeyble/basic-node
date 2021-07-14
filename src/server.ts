import express, { Request, Response } from 'express';

const server = express()

server.get('/', (req: Request, res: Response) => {
    res.send('alo alo caruaru')
});

server.get('/contatos', (req: Request, res: Response) => {
    res.send('contatos')
});

server.get('/teste', (req: Request, res: Response) => {
    res.send('teste')
});

server.listen(3000)