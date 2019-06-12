const fs = require('fs-extra');
const path = require('path')

const editorConfigPath = path.resolve(__dirname, '.editorconfig');
const tmpPath = path.resolve(__dirname, '.tmp');

// Sync
try {
  const buffer = fs.readFileSync(editorConfigPath);
  fs.writeFileSync(tmpPath, buffer);
  console.log('copy done');
} catch (err) {
  console.log(err)
}

// Async (Callback Hell / Pyramid of Doom)
fs.readFile(editorConfigPath, (err, buffer) => {
  if (err) {
    return console.log(err)
  }

  fs.writeFile(tmpPath, buffer, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('copy done');

  });

});

// Async Promise
fs.readFile(editorConfigPath)
  .then((buffer) => fs.writeFile(editorConfigPath, buffer))
  .then(() => console.log('copy done'))
  .catch((err) => console.log(err));


// https://github.com/bioub/Formation_JavaScript_STMicro_2019_01/tree/master/Async
// https://github.com/bioub/Formation_Node.js_HomeServe_2018_06/blob/master/Async/

// ES2017 async await
(async function () {
  try {
    const buffer = await fs.readFile(editorConfigPath);
    await fs.writeFile(tmpPath, buffer);
    console.log('copy done');
  } catch (err) {
    console.log(err)
  }
})();
