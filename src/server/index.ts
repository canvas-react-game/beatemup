import { app } from "./server";
import { createSequelize } from "./db/init";

const port = process.env.PORT || 3000;

const DB = createSequelize();
DB?.authenticate()
    .then(() => console.log("db connected"))
    .catch((err) => console.error("db error: ", err));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
