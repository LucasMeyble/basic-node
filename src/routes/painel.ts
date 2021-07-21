import { Router, Request, Response } from "express";

export const routerPainel = Router();

routerPainel.get('/', (req: Request, res: Response) => {
    res.send('Home painel')
});

routerPainel.get( '/noticias/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(` noticia: ${slug} `)
})