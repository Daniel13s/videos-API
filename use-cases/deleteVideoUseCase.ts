export class DeleteVideoUseCase {
    constructor(
        private database: any
    ) {}
    execute(videoId: string): void {
        this.database.deleteVideo(videoId);
    }
}