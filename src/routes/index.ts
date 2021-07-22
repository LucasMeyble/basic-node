import { Router, Request, Response } from 'express';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('alo alo caruaru')
});

router.get( '/voos/:voou-:destinos', (req: Request, res: Response) => {
    let { voou, destinos } = req.params
    res.send(` Procurando voos de ${voou} até ${destinos}`)
});