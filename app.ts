import express from "express";
import config from "config";
import log from "./logger";
import connect from "./db/connect";
import routes from "./routes";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.get("/", (req, res) => {
  res.send("Our Good Endpoint");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listening at http://${host}:${port}`);

  connect();
  routes(app);
});
/* 
-- There Are Two Reasons For Using Logging Service Like Pino:
- We Can Format The Message Of The Listen.
- The console log locks the I/O and becuase Node.js is Single Threaded you don't want to block I/O 
  becuase it will slow the application.

*/
