import { Router } from 'express';

import { PessoasController } from './../controller/PessoasController';

const PessoasRouter = Router()

PessoasRouter
    .get("/pessoas",PessoasController.listAll)
    .get("/pessoas/:id",PessoasController.getPessoaById)
    .delete("/pessoas/:id",PessoasController.deleteById)
    .put("/pessoas/:id",PessoasController.updatePessoa)


export default PessoasRouter