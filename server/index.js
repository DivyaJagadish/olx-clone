const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const Itemlist = [{"name":"HarryPotter", "Price": 100},{"name": "madhaviKutty","Price":"500"}]

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
