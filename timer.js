const args = process.argv.slice(2);

const timer = function(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== NaN && num[i] > 0) { // edge cases
      setTimeout(() => {
        process.stdout.write("timer beeping  " + '\x07');
      }, num[i] * 1000);
    }

  }
};

timer(args);

