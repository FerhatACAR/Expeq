import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import testRoutes from './routes/test.routes';
import sharedRoutes from './routes/shared.routes';
import userRoutes from './routes/user.routes';

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.use('/', testRoutes);
app.use('/', sharedRoutes);
app.use('/', userRoutes);

export default app
