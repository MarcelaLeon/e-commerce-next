import { NextApiRequest, NextApiResponse } from "next"
import { type } from "os";
import { products } from '../db';

export default function handlerProducts(req: NextApiRequest, res: NextApiResponse) {

    const { query: { lan } } = req

    if (typeof (lan) === 'string') {
        res.status(200).json(products[lan])
    }

    /* if (lan === "en-US") {
        res.status(200).json(products['en-US'])
    } if (lan === "pt-BR") {
        res.status(200).json(products['pt-BR'])
    } else {
        res.status(200).json(products['es-ES'])
    } */
}