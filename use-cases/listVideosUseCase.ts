export interface IListVideosUseCase {
    execute(): any;
}

export class ListVideosUseCase {
    constructor(
        private database: any
    ) {}
    execute(): any {
        return this.database.listVideos();
    }
}