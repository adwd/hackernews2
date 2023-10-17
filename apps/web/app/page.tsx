import { fetchStory, fetchTopStories } from "hackernews-api-client";
import { Suspense, use } from "react";
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
          {topStories.map((storyId) => (
            <Suspense fallback="loading" key={storyId}>
              <StoryItem id={storyId} />
            </Suspense>
          ))}
        </div>
      </div>
    </main>
  );
}

function StoryItem({ id }: { id: number }) {
  const story = use(fetchStory(id));

  return (
    <div>
      <h3>{story.title}</h3>
      <p>{story.by}</p>
    </div>
  );
}
