import { randomUUID } from "node:crypto";
import { sql } from "./db.js";

export class DatabasePostgres {
  async createVideo(video: any) {
    const id = randomUUID();
    await sql`INSERT INTO videos (id, title, description, duration) VALUES (${id}, ${video.title}, ${video.description}, ${video.duration})`.then(() => {
        console.log("Video created with ID:", id);
    })
  }
  async listVideos() {
    return await sql`SELECT * FROM videos`
  }
  async searchVideos(search: string) {
    return await sql`SELECT * FROM videos WHERE title ILIKE ${'%' + search + '%'} OR description ILIKE ${'%' + search + '%'}`
  }
  async updateVideo(videoId: string, video: any) {
    return sql`UPDATE videos SET title = ${video.title}, description = ${video.description}, duration = ${video.duration} WHERE id = ${videoId}`.then(() => {
        console.log("Video updated with ID:", videoId);
    })
  }
  async deleteVideo(videoId: string) {
    return sql`DELETE FROM videos WHERE id = ${videoId}`.then((video) => {
        console.log("Video deleted with ID:", videoId);
    })
  }
}
