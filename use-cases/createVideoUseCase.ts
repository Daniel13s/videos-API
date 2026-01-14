import { Video, type IVideo } from "../entities/entityVideo.js";

export interface ICreateVideoUseCase {
    execute(video: any): void;
}

export class CreateVideoUseCase {
    constructor(
        private database: any
    ) {}
    execute(video: any) {
        const error: IVideo = new Video()
        error.noTitle(video);
        this.database.createVideo(video);
    }
}