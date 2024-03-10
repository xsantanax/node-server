import express, { Request, Response } from "express"
// const express = require("express")

const app = express()
const port = 5000

app.get("/", (req: Request, res: Response) => {
  console.log("req", req)
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
