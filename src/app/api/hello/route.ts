import { db } from "~/db/db";
import { citizens } from "~/db/schema";

export async function GET(request: Request) {
  await db.insert(citizens).values({ fullName: "theo", countryCode: 1 });
  return new Response("Hello, Next.js!");
}
