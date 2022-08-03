// spinner2
process.stdout.write("hello from spinner2.js ... \rBOOO\n");
let x = 100;
const spinnerArr = ['|', '/', '-', '\\', '|' ];
while (x < 3600)
  for (const spin of spinnerArr) {
    setTimeout(() => {
      process.stdout.write(`\r${spin} 🥱 `);
    }, x);
    x += 200;
  }
setTimeout(() => {
  process.stdout.write("\r  🥳\n");
}, x);