interface Theme {
    themeID: number;
    title: string;
    description: string;
    imageURI: string;
    genre: number;
    choices: string[];
    topicality: number;
}
export declare function getAllThemes(): Promise<Theme[]>;
export declare function getTheme(themeID: number): Promise<Theme>;
export declare function postFeedback(feedback: string): Promise<void>;
export declare function postApplication(application: string): Promise<void>;
export {};
