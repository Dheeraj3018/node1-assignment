const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");
const date = new Date();
console.log(date);

app.get("/timestamp", (req, res) => {
  fs.writeFile(
    `./${date.getDate()}- ${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}.txt`,
    `date:${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}  timestamp : ${new Date()} `,

    (err) => {
      if (err) throw err;
      console.log(err);
    }
  );
  res.json("file-created");
});

app.listen(PORT);
