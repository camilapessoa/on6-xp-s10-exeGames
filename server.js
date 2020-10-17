const app = require('./src/app');
const PORT = 33

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`)
  }
  console.log( `O Nosso app esta rodando na porta http://localhost: ${PORT}` )
});
