export default interface Album {
    id: number;
    title: string;
    artists: Artist;
    release: string;
    slug: string;
    songs: Songs[];
    albumfoto: Albumfoto;
    about: string;
}

interface Songs {
    title: string;
    slug: string;
}

interface Albumfoto {
    url: string;
}

interface Artist {
    name: string;
    slug: string;
}

interface About {
    type: string;
    children: { type: string; text: string; }[];
}