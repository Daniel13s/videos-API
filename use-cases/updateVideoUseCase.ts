export class UpdateVideoUseCase {
    constructor(
        private database: any
    ) {}
    execute(videoId: string, video: any): void {
        this.database.updateVideo(videoId, video);
    }
}