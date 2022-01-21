// PurgeCSS で消しきれない Vuetify の不要な Style を fs で消し去る。

const fs = require('fs');

const data = '';

fs.writeFile('./node_modules/vuetify/src/styles/generic/_reset.scss', data, (err) => {
  if (err) throw err;
});

fs.writeFile('./node_modules/vuetify/src/styles/main.sass', data, (err) => {
  if (err) throw err;
});
