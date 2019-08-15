export declare function passwd(): Promise<{
    user: string;
    uid: string;
    gid: string;
    gecos: string;
    home: string;
    shell: string;
}[]>;
