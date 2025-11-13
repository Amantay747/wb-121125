import express from "express";
import morgan from "morgan";
import { config } from "./config/env";
import { scheduleTariffsJob } from "./jobs/tariffs.job";
import { TariffsController } from "./controllers/tariffs.controller";
import router from "./routes/tariffs.routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

app.listen(config.port, () => {
  console.log(`🚀 Server started on port ${config.port}`);
  scheduleTariffsJob();
});
