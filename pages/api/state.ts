import type { NextApiRequest, NextApiResponse } from 'next'
// import connectDB from 'middleware/mongodb';
import {IVideo} from "models/video";

type State = {
  videos: IVideo[]
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<State | IVideo>
) => {
    const getVideos = async (playlistId: string) => {
      const params = new URLSearchParams({
        part: "snippet",
        maxResults: "24",
        key: process.env.API_KEY || "",
        playlistId,
      })
      const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?` + params);
      return await res.json()
    }
    const videos = await getVideos(process.env.CHANNEL || "").then(data => {
      return data.items.map((video:any) => {
        return {
          name: video.snippet.title,
          link: video.snippet.resourceId.videoId,
          description: video.snippet.description,
          date: video.snippet.publishedAt,
          open: true
        }
      });
    })
    res.status(200).json({videos})
}

export default handler;