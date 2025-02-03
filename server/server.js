import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()