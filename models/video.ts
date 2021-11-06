import { Schema, model } from "mongoose";

interface Video {
  name: string;
  link: string;
  description: string;
  date: Date;
}

const schema = new Schema<Video>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

export const VideoModel = model<Video>("Video", schema);
