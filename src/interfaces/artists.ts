export default interface Artist {
    id: number;
    name: string;
    slug: string;
    about: About[];
    photo: Photo;
    imgback: Imgback;
    albums: Album[];
}

interface About {
    type: string;
    children: { type: string; text: string; }[];
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
    release: string;
    cover: string;
}