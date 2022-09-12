import { Request, Response } from 'express';

const dataModels = require("../models")

export class PessoasController {

    public static listAll = async (req : Request , res : Response) => {

        try {
            const pessoas = await dataModels.pessoas.findAll() ;
            
            res.status(200).json(pessoas)
        }catch (err : any) {
            res.status(500).json(err.message)
        }


    }

    static getPessoaById = async (req : Request, res : Response) => { 

        try {

            const {id} = req.params

            const pessoa = await dataModels.pessoas.findAll({where:{id}})
            
            res.status(200).json(pessoa)

        } catch (err : any) {
            res.status(200).json(err.message)
        }

    }

    static deleteById = async (req : Request , res : Response) => {
      
        const {id} = req.params

        try {
            const pessoasExcluida = await dataModels.pessoas.destroy({where:{id}}) 
            
            res.status(200).json(pessoasExcluida)
        } catch (err : any) {
            res.status(500).json(err.message)
        }

    }

    static updatePessoa = async (req : Request , res : Response) => {
      
        const {id} = req.params
        const novosDadosPessoa = req.body

        try {
            const pessoaAtualizada = await dataModels.pessoas.update(
                {name : novosDadosPessoa.name},
                {where : {id}}
            ) 
            
            res.status(200).json(pessoaAtualizada)
        } catch (err : any) {
            res.status(500).json(err.message)
        }

    }


}