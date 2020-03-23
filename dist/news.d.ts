interface Article {
    source: string;
    author: string;
    title: string;
    description: string;
    uri: string;
    uriToImage: string;
    publishedAt: number;
}
export declare function getAllArticles(): Promise<{
    latest: Article[];
    related: Article[][];
}>;
export declare function getRelatedArticles(themeID: number): Promise<Article[]>;
export {};
