const { app } = require("./dist/server.js");

const port = process.env.PORT || 9091;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
