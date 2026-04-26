export interface Issue {
    id: number;
    title: string;
    state: string;
    created_at: string;
    updated_at: string;
    html_url: string;
    user: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    [key: string]: unknown;
}
