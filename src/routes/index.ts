import express, { Application } from 'express';

import MainRouter from './mainRouter';
import PessoasRouter from './PessoasRouter';

const router = (api : Application) => {
  
    api.use(express.json(),MainRouter,PessoasRouter)

}

export default router