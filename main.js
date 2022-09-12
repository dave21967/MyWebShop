const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server started on: http://localhost:${PORT}`);
    console.log("CTRL+C stop");
});