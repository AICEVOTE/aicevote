import axios from "./axios";
import type { userProvider } from "./user";

interface Result {
    results: number[];
    counts: number[];
}

export interface Vote {
    themeID: number;
    answer: number;
    userProvider: userProvider;
    userID: string;
    createdAt: number;
}

interface Transition {
    shortTransition: { timestamp: number, percentage: number[] }[];
    longTransition: { timestamp: number, percentage: number[] }[];
}

export interface Comment {
    themeID: number;
    message: string;
    userProvider: userProvider;
    userID: string;
    createdAt: number;
}

export async function getAllResults(): Promise<Result[]> {
    try {
        return (await axios.get("/vote/results")).data;
    } catch (e) {
        throw e;
    }
}

export async function getResult(themeID: number): Promise<Result> {
    try {
        return (await axios.get("/vote/results/" + themeID)).data;
    } catch (e) {
        throw e;
    }
}

export async function getAllVotes(sessionToken: string): Promise<Vote[][]> {
    try {
        return (await axios.get("/vote/votes?sessiontoken=" + sessionToken)).data
            .map((data: any) => data.votes.concat(data.votesFromInfluencer));
    } catch (e) {
        throw e;
    }
}

export async function getVotes(themeID: number, sessionToken: string): Promise<Vote[]> {
    try {
        const data = (await axios.get("/vote/votes/" + themeID + "?sessiontoken=" + sessionToken)).data;
        return data.votes.concat(data.votesFromInfluencer);
    } catch (e) {
        throw e;
    }
}

export async function vote(themeID: number, sessionToken: string, answer: string): Promise<Vote[]> {
    try {
        const data = (await axios.put("/vote/votes/" + themeID + "?sessiontoken=" + sessionToken + "&answer=" + answer)).data;
        return data.votes.concat(data.votesFromInfluencer);
    } catch (e) {
        throw e;
    }
}

export async function getAllTransitions(): Promise<Transition[]> {
    try {
        return (await axios.get("/vote/transitions")).data;
    } catch (e) {
        throw e;
    }
}

export async function getTransition(themeID: number): Promise<Transition> {
    try {
        return (await axios.get("/vote/transitions/" + themeID)).data;
    } catch (e) {
        throw e;
    }
}

export async function getAllComments(): Promise<Comment[][]> {
    try {
        return (await axios.get("/vote/comments")).data
            .map((data: any) => data.comments);
    } catch (e) {
        throw e;
    }
}

export async function getComments(themeID: number): Promise<Comment[]> {
    try {
        const data = (await axios.get("/vote/comments/" + themeID)).data;
        return data.comments;
    } catch (e) {
        throw e;
    }
}

export async function comment(themeID: number, sessionToken: string, message: string): Promise<Comment[]> {
    try {
        const data = (await axios.post("/vote/comments/" + themeID + "?sessiontoken=" + sessionToken + "&message=" + message)).data;
        return data.comments;
    } catch (e) {
        throw e;
    }
}
