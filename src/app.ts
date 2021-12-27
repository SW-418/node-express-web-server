import express from "express";

const app = express();

app.get('', (req: express.Request, res: any) =>{
    res.send("Home")
})

app.get('/help', (req: express.Request, res: any) =>{
    res.send("Sounds like a cry for help")
})

app.get('/about', (req: express.Request, res: any) =>{
    res.send("Basic Node|Express server")
})

app.get('/weather', (req: express.Request, res: any) =>{
    res.send("It's cold")
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
