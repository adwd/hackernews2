export type Type = "job" | "story" | "comment" | "poll" | "pollopt";

export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
}

export interface Comment {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: number;
  type: "comment";
}

export interface Ask {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: "story";
}

export interface Job {
  by: string;
  id: number;
  score: number;
  text: string;
  time: number;
  title: string;
  type: "job";
  url: string;
}

export interface Poll {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  parts: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: "poll";
}

export interface Pollopt {
  by: string;
  id: number;
  poll: number;
  score: number;
  text: string;
  time: number;
  type: "pollopt";
}

export interface User {
  about: string;
  created: number;
  delay: number;
  id: string;
  karma: number;
  submitted: number[];
}
