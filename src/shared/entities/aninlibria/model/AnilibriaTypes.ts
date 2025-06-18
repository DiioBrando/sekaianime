// https://gitlab.com/anilibria/anilibria-types/-/tree/master
import {Pagination} from "@/shared/entities/aninlibria/model/AnilibriaPagination";

export type TitlesPagination = {
    list: Titles;
    pagination: Pagination;
};

export type Titles = Title[];

export type Title = {
    id: number;
    code: string;
    names: Names;
    franchises: Franchises;
    announce: string;
    status: Status;
    posters: Posters;
    updated: number;
    last_change: number;
    type: Type;
    genres: string[];
    team: Team;
    season: Season;
    description: string;
    in_favorites: number;
    blocked: Blocked;
    player: Player;
    rutub: Rutub;
    torrents: Torrents;
}

export type Names = {
    ru: string;
    en: string;
    alternative: string;
}

export type Franchises = {
    franchise: Franchise;
    releases: Releases;
}

export type Franchise = {
    id: string;
    name: string;
}

export type Releases = {
    id: number;
    code: string;
    ordinal: number;
    names: Names;
}

export type Status = {
    string: string;
    code: number;
}

export type Posters = {
    small: Poster;
    medium: Poster;
    original: Poster;
}

export type Poster = {
    url: string;
    raw_base64_file: string;
}

export type Type = {
    full_name: string;
    code: number;
    string: string;
    episodes: number;
    length: number;
}

export type Team = {
    voice: string[];
    translator: string[];
    editing: string[];
    decor: string[];
    timing: string[];
}

export type Season = {
    string: string;
    code: number;
    year: number;
    week_day: number;
}

export type Blocked = {
    copyrights: boolean;
    geoip: boolean;
    geoip_list: string[];
}

export type Player = {
    alternative_player: string;
    host: string;
    is_rutube: boolean;
    episodes: Episodes;
    list: ListEpisodes;
}

export type Episodes = {
    first: number;
    last: number;
    episode_range: string;
}

export type ListEpisodes = {
    [index: string]: Episode[];
}

export type Episode = {
    episode: number;
    name: string;
    uuid: string;
    created_timestamp: number;
    preview: string;
    skips: Skips;
    hls: HlsQuality;
}

export type Skips = {
    opening: number[];
    ending: number[];
}

export type HlsQuality = {
    fhd: string;
    hd: string;
    sd: string;
}

export type Rutub = {
    created_timestamp: number;
    episode: number;
    rutube_id: string;
}

export type Torrents = {
    episodes: Episodes
    list: TorrentList[];
}

export type TorrentList = {
    torrent_id: number;
    episodes: Episodes;
    quality: QualityTorrent;
    leechers: number;
    seeders: number;
    downloads: number;
    total_size: number;
    size_string: string;
    url: string;
    magnet: string;
    uploaded_timestamp: number;
    hash: string;
    metadata: Metadata;
    raw_base64_file: string;
}

export type QualityTorrent = {
    quality: string;
    type: string;
    resolution: string;
    encoder: string;
    lq_audio: boolean;
}

export type Metadata = {
    hash: string;
    name: string;
    announce: string[];
    created_timestamp: number;
    files_list: FilesList[];
};

export type FilesList = {
    file: string;
    size: number;
    offset: number;
}