import db from "../config/db.js";

export interface Tariff {
    id?: number;
    box_id: number;
    coef: number;
    day: string;
    raw: string;
    created_at?: string;
    update_at?: string;
}

export const TariffModel = {
    async getByDay(day: string) {
        return db<Tariff>("tariffs").where({ day }).orderBy("coef", "asc");
    },

    async upsert(tariff: Tariff) {
        return db("Tariffs")
            .insert(tariff)
            .onConflict({"box_id", "day"})
            .merge();
    },

    async getAll() {
        return db<Tariff>("tariffs").orderBy("day", "desc");
    }
}