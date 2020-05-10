import axios from "./axios";

export interface Theme {
    themeID: number;
    userProvider: string,
    userID: string,
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

export async function queryThemes(regex: string): Promise<Theme[]> {
    return (await axios.get(`/theme/themes?q=${regex}`)).data;
}

export async function putTheme(themeID: number, sessionToken: string,
    isEnabled: boolean, title: string, description: string, imageURI: string,
    genre: number, choices: string, DRClass: number): Promise<void> {
    await axios.put(`/theme/themes/${themeID}?`
        + `sessionToken=${sessionToken}&isenabled=${isEnabled}`
        + `&title=${title}&description=${description}&imageuri=${imageURI}`
        + `&genre=${genre}&choices=${choices}&DRClass=${DRClass}`);
}
