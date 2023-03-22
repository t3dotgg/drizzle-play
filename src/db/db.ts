import { drizzle } from "drizzle-orm/planetscale-serverless";

import { connect } from "@planetscale/database";
import { citizens, countries } from "./schema";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

const connection = connect(config);
export const db = drizzle(connection, { logger: true });

export const getUsers = async () => {
  return await db.select().from(citizens);
};
