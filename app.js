const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Connected to DB');
  });

const app = express();

app.use((req, res, next) => {
  req.user = {
    _id: '651306ee5ab67c99ab14d626',
  };

  next();
});

app.use(express.json());
app.use('/', require('./routes/users'));
app.use('/', require('./routes/cards'));

app.use('*', (req, res) => {
  res.status(404).send({ message: 'страница не найдена' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
