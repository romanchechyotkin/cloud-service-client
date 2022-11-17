export interface FileSchema {
    commonDir: any;
    files: File[];
    dirStack: any;
}

export interface File {
   _id: string;
   name: string;
   type: string;
   fileSize: number;
   date: string;
   // path: string;
   // user: string;
   // childs: [];
   // parent: string
}
