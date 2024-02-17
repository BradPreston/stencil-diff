import express from 'express';
import { exec } from 'child_process';

const app = express();
const port = 3000;

app.use(express.json())

app.post("/", function (req, res) {
  const { stencil_theme, git_theme } = req.body;
  exec(`sh ./stencil-diff.sh ${stencil_theme} ${git_theme}`, (err, stdout, stderr) => {
    if (stdout) return res.send(stdout);
    if (stderr) return res.send(stderr);
    if (err) return res.send(`exec error: ${err}`);
    return res.send("No difference between themes");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});