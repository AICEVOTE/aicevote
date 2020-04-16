import axios from "./axios";

interface Article {
    source: string;
    author: string;
    title: string;
    description: string;
    uri: string;
    uriToImage: string;
    publishedAt: number;
}

export async function getAllArticles(): Promise<{ latest: Article[], related: Article[][] }> {
    return (await axios.get("/news/articles")).data;
}

export async function getRelatedArticles(themeID: number): Promise<Article[]> {
    return (await axios.get("/news/articles/" + themeID)).data.articles;
}
