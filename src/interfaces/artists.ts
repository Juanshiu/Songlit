export default interface Artist {
    id: number;
    name: string;
    slug: string;
    about: About[];
    photo: Photo;
    imgback: Imgback;
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