import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

//pseudo code.

//using databases from supabase, allow program to access for movie API(maybe) and book API(maybe) and use a DB to hold user info

//DB connection information

//get requests for fetching current data

//post requests for adding information to watched/read DB

//setting reminders using general date and time stamps

//delete reminders

//update requests