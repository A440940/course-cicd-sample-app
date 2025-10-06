const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to My AWS CI/CD Demo!</h1><p>Deployed via CodeDeploy 🚀</p>"
  );
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
