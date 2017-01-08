const args = process.argv.slice(2);
const delay = args[0];
const preamble = `[sleep #${process.pid}] `;

if (typeof delay === 'undefined') {
  console.error(`${preamble}delay (in ms) not specified`);
}

if (delay != parseInt(delay, 10)) {
  console.error(`${preamble}invalid delay: "${delay}"`);
}

setTimeout(() => process.exit(0), delay);
