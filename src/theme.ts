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
    return (await axios.get("/theme/themes")).data;
}

export async function getTheme(themeID: number): Promise<Theme> {
    return (await axios.get(`/theme/themes/${themeID}`)).data;
}
