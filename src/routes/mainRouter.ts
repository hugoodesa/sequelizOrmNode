import { Router } from 'express';

import { MainController } from '../controller/MainController';

const MainRouter : Router =  Router()

MainRouter.get("/",MainController.mainRouter)

export default MainRouter
