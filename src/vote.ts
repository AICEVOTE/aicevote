import axios from "./axios";
import type { userProvider } from "./index";

interface Result {
    results: number[];
    counts: number[];
}

interface Vote {
    answer: number;
    userProvider: userProvider;
    userID: string;
}

interface Transition {
    shortTransition: { timestamp: number, percentage: number[] }[];
    longTransition: { timestamp: number, percentage: number[] }[];
}

interface Comment {
    message: string;
    userProvider: userProvider;
    userID: string;
    createdAt: number;
}

export async function getAllResults(): Promise<Result[]> {
    try {
        return (await axios.get("/vote/results")).data.map((data: Result) => ({
            results: data.results,
            counts: data.counts
        }));
    } catch (e) {
        throw e;
    }
}

export async function getResult(themeID: number): Promise<Result> {
    try {
        const data = (await axios.get("/vote/results/" + themeID)).data;
        return {
            results: data.results,
            counts: data.counts
        };
    } catch (e) {
        throw e;
    }
}

export async function getAllVotes(sessionToken: string): Promise<Vote[][]> {
    try {
        return (await axios.get("/vote/votes?sessiontoken=" + sessionToken)).data.map((data: any) =>
            data.votes.map((data: Vote) => ({
                answer: data.answer,
                userProvider: data.userProvider,
                userID: data.userID
            })).concat(data.votesFromInfluencer.map((data: Vote) => ({
                answer: data.answer,
                userProvider: data.userProvider,
                userID: data.userID
            })))
        );
    } catch (e) {
        throw e;
    }
}

export async function getVotes(themeID: number, sessionToken: string): Promise<Vote[]> {
    try {
        const data = (await axios.get("/vote/votes/" + themeID + "?sessiontoken=" + sessionToken)).data;
        return data.votes.map((data: Vote) => ({
            answer: data.answer,
            userProvider: data.userProvider,
            userID: data.userID
        })).concat(data.votesFromInfluencer.map((data: Vote) => ({
            answer: data.answer,
            userProvider: data.userProvider,
            userID: data.userID
        })))
    } catch (e) {
        throw e;
    }
}

export async function vote(themeID: number, sessionToken: string, answer: string): Promise<Vote[]> {
    try {
        const data = (await axios.put("/vote/votes/" + themeID + "?sessiontoken=" + sessionToken + "&answer=" + answer)).data;
        return data.votes.map((data: Vote) => ({
            answer: data.answer,
            userProvider: data.userProvider,
            userID: data.userID
        })).concat(data.votesFromInfluencer.map((data: Vote) => ({
            answer: data.answer,
            userProvider: data.userProvider,
            userID: data.userID
        })))
    } catch (e) {
        throw e;
    }
}

export async function getAllTransitions(): Promise<Transition[]> {
    try {
        return (await axios.get("/vote/transitions")).data.map((data: Transition) => ({
            shortTransition: data.shortTransition,
            longTransition: data.longTransition
        }));
    } catch (e) {
        throw e;
    }
}

export async function getTransition(themeID: number): Promise<Transition> {
    try {
        const data = (await axios.get("/vote/transitions/" + themeID)).data;
        return {
            shortTransition: data.shortTransition,
            longTransition: data.longTransition
        };
    } catch (e) {
        throw e;
    }
}

export async function getAllComments(): Promise<Comment[][]> {
    try {
        return (await axios.get("/vote/comments")).data.map((data: any) =>
            data.comments.map((data: Comment) => ({
                message: data.message,
                userProvider: data.userProvider,
                userID: data.userID,
                createdAt: data.createdAt
            }))
        );
    } catch (e) {
        throw e;
    }
}

export async function getComments(themeID: number): Promise<Comment[]> {
    try {
        const data = (await axios.get("/vote/comments/" + themeID)).data;
        return data.comments.map((data: Comment) => ({
            message: data.message,
            userProvider: data.userProvider,
            userID: data.userID,
            createdAt: data.createdAt
        }));
    } catch (e) {
        throw e;
    }
}

export async function comment(themeID: number, sessionToken: string, message: string): Promise<Comment[]> {
    try {
        const data = (await axios.post("/vote/comments/" + themeID + "?sessiontoken=" + sessionToken + "&message=" + message)).data;
        return data.comments.map((data: Comment) => ({
            message: data.message,
            userProvider: data.userProvider,
            userID: data.userID,
            createdAt: data.createdAt
        }));
    } catch (e) {
        throw e;
    }
}
