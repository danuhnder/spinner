const spinSpinner = (input, delay) => {
    setTimeout(() => {
    process.stdout.write(input);
  }, delay);
};
let delay = 100;
const animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (let frame of animation) {
  spinSpinner(frame, delay);
  delay += 200;
};

