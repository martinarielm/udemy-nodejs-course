import { createReadStream } from "node:fs";

const stream = createReadStream("./content/big-text.txt", {
  highWaterMark: 90000,
});

stream.on("data", (chunk) => {
  console.log(`New chunk received: ${chunk.length} bytes`);
});
