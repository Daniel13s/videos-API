export interface IVideo {
    noTitle(video: any): void;
}

export class Video {
    noTitle(video: any) {
        if(!video.title) {
            throw new Error("Title is required");
        }
    }
}