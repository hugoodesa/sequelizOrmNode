import express, { Application } from 'express';

import router from '../routes';

const api : Application = express()

router(api)

export default api