import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-4xl roboto-regular text-center">
      <Button variant={"default"}>
        <Link href={"/auth/login"}>Login</Link>
      </Button>
    </main>
  );
}
