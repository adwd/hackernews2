import { fetchTopStories } from "hackernews-api-client";
import { Button } from "../components/ui/button";
import { ModeToggle } from "../components/ui/mode-toggle";

export default async function Page() {
  const topStories = await fetchTopStories();

  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        <Button>Click me</Button>
        <div>
          <ModeToggle />
          {topStories.map((story) => (
            <p key={story}>{story}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
