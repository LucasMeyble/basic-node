import express, { Request, Response } from 'express';

const server = express()

server.get('/', (req: Request, res: Response) => {
    res.send('alo alo caruaru')
});

server.get( '/noticias/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(` noticia: ${slug} `)
})

server.get( '/voos/:voou-:destinos', (req: Request, res: Response) => {
    let { voou, destinos } = req.params
    res.send(` Procurando voos de ${voou} até ${destinos}`)
})

server.listen(3000)