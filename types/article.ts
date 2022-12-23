export interface Article {
    uid?: string;
    title?: string;
    content?: string;
    shortDescription?: string;
    thumbnail?: string;
    youtubeLink?: string;
    replLink?: string;
    youtubeLink2?: string;
    createdAt?: Date;
    updatedAt?: Date;
    creator_uid?: string;
    creator_name?: string;
    creator_photoURL?: string;
    image_binary?: File;
    contentUrl?: string;
    pdfUrl?: string;
    canEdit?: boolean;
    canDelete?: boolean;
}

