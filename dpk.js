const crypto = require("crypto");
const config = require('./config.json');

exports.deterministicPartitionKey = (event) => {
  let candidate;

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  }

  if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  } 
  else {
    candidate = config.TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > config.MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};