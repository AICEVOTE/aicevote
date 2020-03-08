import axios from "./axios";

interface Theme {
    themeID: number,
    title: string,
    description: string,
    imageURI: string,
    genre: number,
    choices: string[],
    topicality: number
};

interface Profile {
    userProvider: "twitter" | "legacy",
    userID: number,
    name: string,
    imageURI: string,
    isInfluencer: boolean
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

export async function getMyProfile(sessionToken: string): Promise<Profile> {
    try {
        return (await axios.get("/profiles/?sessiontoken=" + sessionToken)).data;
    } catch (e) {
        throw e;
    }
}

export async function getProfiles(users: { userProvider: string, userID: string }[]): Promise<Profile[]> {
    try {
        return (await axios.post("/profiles", users)).data;
    } catch (e) {
        throw e;
    }
}

export async function getProfile(userProvider: string, userID: string): Promise<Profile> {
    try {
        return (await axios.get("/profiles/" + userProvider + "/" + userID)).data;
    } catch (e) {
        throw e;
    }
}

export async function postFeedback(feedback: string): Promise<void> {
    try {
        await axios.get("/feedback?message=" + feedback);
        return;
    } catch (e) {
        throw e;
    }
}

export async function postApplication(application: string): Promise<void> {
    try {
        await axios.get("/application?message=" + application);
        return;
    } catch (e) {
        throw e;
    }
}
