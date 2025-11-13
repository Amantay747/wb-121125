import axios from "axios";
import redis from "../config/redis";
import { config } from "../config/env";

export interface WBTariffItem {
  boxId: number;
  coef: number;
}

export class WBService {
  static async fetchTariffs(): Promise<WBTariffItem[]> {
    const cacheKey = "wb:tariffs";

    const cached = await redis.get(cacheKey);
    if (cached) return JSON.parse(cached);

    const response = await axios.get(config.wbApiUrl, {
      headers: { Authorization: `Bearer ${config.wbToken}` },
    });

    const data = response.data?.data || [];
    await redis.set(cacheKey, JSON.stringify(data), "EX", 3600);
    return data;
  }
}
