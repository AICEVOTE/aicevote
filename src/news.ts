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
    try {
        return (await axios.get("/news/articles")).data;
    } catch (e) {
        throw e;
    }
}

export async function getRelatedArticles(themeID: number): Promise<Article[]> {
    try {
        return (await axios.get("/news/articles/" + themeID)).data.articles;
    } catch (e) {
        throw e;
    }
}
