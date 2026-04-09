const app = require("./app");
const logger = require("./logger");

const PORT = process.env.PORT || 3000;
const helo = "Hello, World!";

app.listen(PORT, () => {
  logger.info(`Order service running at http://localhost:${PORT}`);
});