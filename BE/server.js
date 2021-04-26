const app = require("./app");


async function init() {
    app.listen(2222, () => console.log("server running on 2222"));
}

init();