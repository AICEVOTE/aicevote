import axios from "./axios";

interface Theme {
    themeID: number;
    title: string;
    description: string;
    imageURI: string;
    genre: number;
    choices: string[];
    topicality: number;
};

export async function getAllThemes(): Promise<Theme[]> {
    try {
        return (await axios.get("/themes")).data;
    } catch (e) {
        throw e;
    }
}

export async function getTheme(themeID: number): Promise<Theme> {
    try {
        return (await axios.get("/themes/" + themeID)).data;
    } catch (e) {
        throw e;
    }
}

export async function postFeedback(feedback: string): Promise<void> {
    try {
        await axios.post("/feedback?message=" + feedback);
        return;
    } catch (e) {
        throw e;
    }
}

export async function postApplication(application: string): Promise<void> {
    try {
        await axios.post("/application?message=" + application);
        return;
    } catch (e) {
        throw e;
    }
}
