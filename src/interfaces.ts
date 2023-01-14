export interface project {
    name: string | undefined;
    description: string | undefined;
    topics: string[] | [];
    url: string | undefined;
}

export interface social {
    name: string;
    icon: string;
    url?: string;
    displayName?: boolean;
}

export interface techIcon {
    name: string;
    src: string
    filterOnDarkTheme?: boolean;
}

export interface theme {
    name: string;
    icon: string
}

export interface tech {
    category : string;
    techIcons? : techIcon[];
    infos? : list;
    grow? : boolean;
}

export type list = (any | sublist)[];

export interface sublist {
    name? : string;
    infos : list;
}