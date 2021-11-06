import mongoose, { Schema, model } from "mongoose";

// dev hack
delete mongoose.connection.models["Video"];

export interface IVideo {
  _id: string;
  name: string;
  link: string;
  description: string;
  date: Date;
  open: boolean;
}

const schema = new Schema<IVideo>({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  open: { type: Boolean, required: true },
});

const VideoModel = model<IVideo>("Video", schema);

export default VideoModel;
