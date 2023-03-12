import { NextApiRequest, NextApiResponse } from "next"
import { tycs } from '../db';

export default function handlerProducts(req: NextApiRequest, res: NextApiResponse) {

    const { query: { lan } } = req

    if (typeof (lan) === 'string') {
        res.status(200).json(tycs[lan])
    }

    /* if (lan === "en-US") {
        res.status(200).json(tycs['en-US'])
    } if (lan === "pt-BR") {
        res.status(200).json(tycs['pt-BR'])
    } else {
        res.status(200).json(tycs['es-ES'])
    } */
}