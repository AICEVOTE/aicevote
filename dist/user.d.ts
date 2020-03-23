import type { Vote, Comment } from "./vote";
export declare type userProvider = "twitter" | "legacy";
interface Profile {
    userProvider: userProvider;
    userID: number;
    name: string;
    imageURI: string;
    isInfluencer: boolean;
    votes: Vote[];
    comments: Comment[];
}
export declare function getMyProfile(sessionToken: string): Promise<Profile>;
export declare function getProfiles(users: {
    userProvider: userProvider;
    userID: string;
}[]): Promise<Profile[]>;
export declare function getProfile(userProvider: userProvider, userID: string): Promise<Profile>;
export {};
