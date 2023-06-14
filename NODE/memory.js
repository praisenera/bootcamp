const os = require("os");

function freeMemory() {
  const osFreeMem = os.freemem();
  const allFreeMem = osFreeMem / (1024 * 1024 * 1024);
  console.log("Free memory: " + Math.round(allFreeMem) + " GB");
}

function totalMemory() {
  const osTotalMem = os.totalmem();
    const avbMem = osTotalMem / (1024 * 1024 * 1024);
  console.log("Total Memory: " + Math.round(osTotalMem) + " GB");
}

setInterval(freeMemory, 1000);
setInterval(totalMemory, 1000);
