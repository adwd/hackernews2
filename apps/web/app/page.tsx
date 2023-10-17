import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ui/mode-toggle";

export default function Page(): JSX.Element {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        <Button>Click me</Button>
        <div>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
