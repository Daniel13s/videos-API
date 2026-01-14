import { fastify } from "fastify";
import { CreateVideoUseCase } from "./use-cases/createVideoUseCase.js";
import { ListVideosUseCase } from "./use-cases/listVideosUseCase.js";
import { VideoController } from "./controller/videoController.js";
import { UpdateVideoUseCase } from "./use-cases/updateVideoUseCase.js";
import { SearchVideoUseCase } from "./use-cases/searchVideoUseCase.js";
import { DeleteVideoUseCase } from "./use-cases/deleteVideoUseCase.js";
import { DatabasePostgres } from "./database/databasePostgres.js";

const app = fastify();
const databasePostgres = new DatabasePostgres()
const PORT: number = Number(process.env.PORT) || 3000

const createVideoUseCase = new CreateVideoUseCase(databasePostgres);
const listVideosUseCase = new ListVideosUseCase(databasePostgres);
const updateVideoUseCase = new UpdateVideoUseCase(databasePostgres);
const searchVideoUseCase = new SearchVideoUseCase(databasePostgres);
const deleteVideoUseCase = new DeleteVideoUseCase(databasePostgres);

const videoController = new VideoController(
    createVideoUseCase,
    listVideosUseCase,
    updateVideoUseCase,
    searchVideoUseCase,
    deleteVideoUseCase
)

app.post("/videos", (req, res) => videoController.createVideo(req, res));
app.get("/videos", (req, res) => videoController.listVideos(req, res));
app.get("/videos/:search", (req, res) => videoController.searchVideos(req, res));
app.put("/videos/:id", (req, res) => videoController.updateVideo(req, res));
app.delete("/videos/:id", (req, res) => videoController.deleteVideo(req, res));

app.listen({ port: PORT }).then(() => {
  console.log(`Server running on ${PORT}`);
});
