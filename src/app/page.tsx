import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="text-4xl roboto-regular text-center">
      <div className="text-end mr-5">
        <ModeToggle />
      </div>
    </main>
  );
}
