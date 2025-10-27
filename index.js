const app = require("./app");

const db = require("./config/db");

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
     res.send("Hello word");
});

app.listen(port, () =>{
     console.log(`Server is running on port http://localhost:${port}`);
});