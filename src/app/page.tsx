import { Inter } from "next/font/google";
import { getUsers } from "~/db/db";

const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-dynamic";

export default async function Home() {
  const values = await getUsers();
  console.log(values);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {values.map((value) => {
        return (
          <div
            className="flex flex-col items-center justify-center"
            key={value.id}
          >
            {value.fullName}
          </div>
        );
      })}
    </main>
  );
}
