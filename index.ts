import express, { Express, Request, Response } from "express"
import cors from "cors"

const app: Express = express()
const port: number = 5000
app.use(cors())

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
