export interface uploaderFile {
    id: number;
    name: string;
    progress: number;
}

export interface UploaderSchema {
    isVisible: boolean;
    files: uploaderFile[]
}
