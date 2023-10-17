export * from "./types";

export async function fetchTopStories(): Promise<number[]> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
  );
  const body = await res.json();
  return body as number[];
}

export async function fetchNewStories(): Promise<number[]> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/newstories.json",
  );
  const body = await res.json();
  return body as number[];
}

export async function fetchBestStories(): Promise<number[]> {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/beststories.json",
  );
  const body = await res.json();
  return body as number[];
}
