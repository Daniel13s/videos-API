export class SearchVideoUseCase {
    constructor(
        private database: any
    ) {}
    execute(search: string): any {
        return this.database.searchVideos(search);
    }
}