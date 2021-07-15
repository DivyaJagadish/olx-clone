const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
app.get("/api", (req, res) => res.json({ message: Itemlist }));
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
