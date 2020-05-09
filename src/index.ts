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

export async function getArticles(): Promise<{
    latest: Article[];
    related: { themeID: number; articles: Article[]; }[];
}> {
    return (await axios.get("/articles")).data;
}

export async function postFeedback(feedback: string): Promise<void> {
    await axios.post(`/feedback?message=${feedback}`);
}

export async function postApplication(application: string): Promise<void> {
    await axios.post(`/application?message=${application}`);
}
