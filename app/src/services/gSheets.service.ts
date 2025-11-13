import { google } from "googleapis";
import { config } from "../config/env";
import fs from "fs";
import { Tariff } from "../models/tariff.model";

export class GSheetsService {
  static async getClient() {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(fs.readFileSync(config.google.creds, "utf-8")),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return google.sheets({ version: "v4", auth });
  }

  static async updateSheets(tariffs: Tariff[]) {
    const sheets = await this.getClient();
    const values = tariffs.map(t => [t.box_id, t.coef, t.day]);

    for (const sheetId of config.google.sheetsIds) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: `${config.google.sheetName}!A2`,
        valueInputOption: "RAW",
        requestBody: { values },
      });
    }
  }
}
