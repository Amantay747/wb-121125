import { Request, Response } from "express";
import { TariffsService } from "../services/tariffs.service";
import dayjs from "dayjs";

export class TariffsController {
  static async getToday(req: Request, res: Response) {
    const day = dayjs().format("YYYY-MM-DD");
    const tariffs = await TariffsService.getTariffsByDay(day);
    res.json({ count: tariffs.length, data: tariffs });
  }

  static async update(req: Request, res: Response) {
    await TariffsService.updateFromWB();
    res.json({ updated: true });
  }
}
