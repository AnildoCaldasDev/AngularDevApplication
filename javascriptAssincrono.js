const fs = require('fs');

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file, (err, contents) => {
    if (err) {
      reject(err)
    } else {
      resolve(contents)
    }
  })
});

const init = async () => {
  try {
    const contentFile1 = await readFile('./file1.txt')
    const contentFile2 = await readFile('./file2.txt')
    return String(contentFile1) + '\n' + String(contentFile2);
  } catch (err) {
    console.log(err);
  }
}

init().then(contents => console.log(contents));
