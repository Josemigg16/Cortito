import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
}))
app.use((req, res, next) => {
    if (req.headers.origin !== process.env.FRONTEND_URL) res.sendStatus(403)
    else next()
})
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', authRoutes)


export default app;