import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const port = 4000;

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
  const directory = dirname(fileURLToPath(import.meta.url));
  res.sendFile(join(directory, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
