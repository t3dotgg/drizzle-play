// db.ts
import {
  int,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from "drizzle-orm/mysql-core";

// declaring enum in database
export const countries = mysqlTable(
  "countries",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
  },
  (countries) => ({
    nameIndex: uniqueIndex("name_idx").on(countries.name),
  })
);

export const citizens = mysqlTable(
  "citizens",
  {
    id: serial("id").primaryKey(),
    fullName: varchar("full_name", { length: 256 }),
    countryCode: int("country_code"),
  },
  (citizen) => ({
    countryIndex: uniqueIndex("country_idx").on(citizen.countryCode),
  })
);
