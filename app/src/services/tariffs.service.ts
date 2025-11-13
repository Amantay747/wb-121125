import { Tariff, TariffModel } from "../models/tariff.model";
import { WBService } from "./wb.service";
import { GSheetsService } from "./gSheets.service";
import dayjs from "dayjs";

export class TariffsService {
  static async getTariffsByDay(day: string) {
    return TariffModel.getByDay(day);
  }

  static async updateFromWB() {
    const data = await WBService.fetchTariffs();
    const today = dayjs().format("YYYY-MM-DD");

    const tariffs: Tariff[] = data.map(item => ({
      box_id: item.boxId,
      coef: item.coef,
      day: today,
      raw: JSON.stringify(item),
    }));

    for (const t of tariffs) {
      await TariffModel.upsert(t);
    }

    await GSheetsService.updateSheets(tariffs);
  }
}
