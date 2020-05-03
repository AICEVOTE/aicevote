import axios from "./axios";
import type { Vote, Comment } from "./vote";

export type userProvider = "twitter" | "legacy"

interface Profile {
    userProvider: userProvider;
    userID: number;
    name: string;
    imageURI: string;
    isInfluencer: boolean;
    votes: Vote[];
    comments: Comment[];
};

export async function getMyProfile(sessionToken: string): Promise<Profile> {
    return (await axios.get(`/user/profiles/?sessiontoken=${sessionToken}`)).data;
}

export async function getProfiles(users: { userProvider: userProvider, userID: string }[]): Promise<Profile[]> {
    return (await axios.post("/user/profiles", users)).data;
}
