// spinner
process.stdout.write("hello from spinner1.js ... \rheyyy\n") 
let x = 100;
while (x < 8100){
setTimeout(() => {
  process.stdout.write('\r|  🥱 ');
}, x);
x += 200;
setTimeout(() => {
  process.stdout.write('\r/  🥱 ');
}, x);
x += 200;
setTimeout(() => {
  process.stdout.write('\r-  🥱 ')
}, x);
x += 200;
setTimeout(() => {
  process.stdout.write('\r\\  🥱 ')
}, x);
x += 200;

setTimeout(() => {
  process.stdout.write('\r|  🥱')
}, x);
x += 200;

}
setTimeout(() => {
  process.stdout.write(" \r 🥳 \n");
}, x);