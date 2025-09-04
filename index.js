const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("this is an simple  test for deployment , now we will deploy m  large application on a cloud with the help of ci/cd pipeline and docker + gitlabs");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

