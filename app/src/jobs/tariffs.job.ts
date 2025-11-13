import cron from "node-cron";
import { config } from "../config/env";
import { TariffsService } from "../services/tariffs.service";

export const scheduleTariffsJob = () => {
  cron.schedule(config.cron, async () => {
    console.log("Running WB tariffs sync...");
    await TariffsService.updateFromWB();
  });
};
