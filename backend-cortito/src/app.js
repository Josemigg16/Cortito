import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(cors({
    origin: "http://localhost:4321",
}))
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)


export default app;