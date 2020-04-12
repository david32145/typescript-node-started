import app from "./src"

app.listen(3000, (err) => {
    if(!!err) {
        console.log("An error ocurred")
        console.error(err)
    } else {
        console.log("Server is running in http://localhost:3000")
    }
})