export interface FileSchema {
    commonDir: any;
    files: File[];
    dirStack: any;
}

export interface File {
    _id: string;
   name: string;
   type: string;
   size: number;
   date: string;
}
