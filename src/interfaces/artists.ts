export default interface Artist {
    id: number;
    name: string;
    slug: string;
    about: string;
    photo: Photo;
    imgback: Imgback;
    albums: Album[];
}

interface Photo {
    url: string;
}

interface Imgback {
    url: string;
}

interface Album {
    id: number;
    title: string;
    slug: string;
    albumfoto: {
        url: string
    };
    release: string;
    cover: string;
}