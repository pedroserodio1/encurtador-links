import {Request, Response, Router} from 'express'

export const router = Router()

router.get('/', (req: Request, res: Response) => {

    res.json({
        author: 'Pedro Serôdio',
        description: 'Sistema para encurtar links',
        contact: {
            twitter: 'https://twitter.com/pedroserodio',
            github: 'https://github.com/pedroserodio1',
            linkedin: 'https://www.linkedin.com/in/pedroserodio1/'
        },
        version: '1.0.0'
    })
})

