export interface IVideoController {
    createVideo(req:any, res:any): any;
    listVideos(req:any, res:any): any;
    updateVideo(req:any, res:any): any;
}

export class VideoController {
    constructor(
        private createVideoUseCase: any,
        private listVideosUseCase: any,
        private updateVideoUseCase: any,
        private searchVideosUseCase: any,
        private deleteVideoUseCase: any
    ) {}
    createVideo(req:any, res:any) {
        const video = req.body;
        this.createVideoUseCase.execute(video);
        return res.status(201).send({ message: "Video created successfully" });
    }
    async listVideos(req:any, res:any) {
        const videos = await this.listVideosUseCase.execute();
        return res.status(200).send(videos);
    }
    async searchVideos(req:any, res:any) {
        const search = req.params.search;
        const videos = await this.searchVideosUseCase.execute(search);
        return res.status(200).send(videos);
    }
    updateVideo(req:any, res:any) {
        const newVideo = req.body;
        const videoId = req.params.id
        this.updateVideoUseCase.execute(videoId, newVideo);
        return res.status(204).send({ message: "Video updated successfully" });
    }
    deleteVideo(req:any, res:any) {
        const videoId = req.params.id
        this.deleteVideoUseCase.execute(videoId);
        return res.status(204).send({ message: "Video deleted successfully" });
    }
}