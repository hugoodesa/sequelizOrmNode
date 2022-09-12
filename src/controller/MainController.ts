import { Request, Response } from 'express';

export class MainController {

    static mainRouter = (req : Request, res : Response) => {
      
        res.status(200).json({message:"Hellow World"})

    }

}