export default interface Song {
    id: number;
    title: string;
    artists: Artist[];
    date: string;
    about: string;
    genres: Genres[];
    lyrics3: Lyrics3[];
    slug: string;
    cover: Cover;
}

interface Artist {
    name: string;
    slug: string;
}

interface Cover {
    url: string;
}

interface Genres {
    [x: string]: any;
    genero: string;
}

interface Lyrics3 {
    type: string;
    children: { type: string; text: string; }[];
}

