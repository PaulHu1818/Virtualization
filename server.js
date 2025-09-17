const express = require("express");
const app = express();


const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("✅ Hello Azure from Node.js + GitHub + VS Code!");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
