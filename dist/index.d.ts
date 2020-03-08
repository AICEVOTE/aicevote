interface Theme {
    themeID: number;
    title: string;
    description: string;
    imageURI: string;
    genre: number;
    choices: string[];
    topicality: number;
}
interface Profile {
    userProvider: "twitter" | "legacy";
    userID: number;
    name: string;
    imageURI: string;
    isInfluencer: boolean;
}
export declare function getAllThemes(): Promise<Theme[]>;
export declare function getTheme(themeID: number): Promise<Theme>;
export declare function getMyProfile(sessionToken: string): Promise<Profile>;
export declare function getProfiles(users: {
    userProvider: string;
    userID: string;
}[]): Promise<Profile[]>;
export declare function getProfile(userProvider: string, userID: string): Promise<Profile>;
export declare function postFeedback(feedback: string): Promise<void>;
export declare function postApplication(application: string): Promise<void>;
export {};
