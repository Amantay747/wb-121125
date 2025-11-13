import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 8080,
  wbApiUrl: process.env.WB_API_URL!,
  wbToken: process.env.WB_TOKEN!,
  db: {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
  },
  redis: {
    host: process.env.REDIS_HOST!,
    port: Number(process.env.REDIS_PORT) || 6379,
  },
  google: {
    creds: process.env.GOOGLE_SERVICE_ACCOUNT_JSON!,
    sheetsIds: process.env.SHEETS_IDS?.split(",") || [],
    sheetName: process.env.SHEETS_SHEET_NAME!,
  },
  cron: process.env.CRON_SCHEDULE || "0 * * * *",
};
