interface Result {
    results: number[];
    counts: number[];
}
interface Vote {
    answer: number;
    userProvider: "twitter" | "legacy";
    userID: string;
}
interface Transition {
    shortTransition: {
        timestamp: number;
        percentage: number[];
    }[];
    longTransition: {
        timestamp: number;
        percentage: number[];
    }[];
}
interface Comment {
    message: string;
    userProvider: "twitter" | "legacy";
    userID: string;
    createdAt: number;
}
export declare function getAllResults(): Promise<Result[]>;
export declare function getResult(themeID: number): Promise<Result>;
export declare function getAllVotes(sessionToken: string): Promise<Vote[][]>;
export declare function getVotes(themeID: number, sessionToken: string): Promise<Vote[]>;
export declare function vote(themeID: number, sessionToken: string, answer: string): Promise<Vote[]>;
export declare function getAllTransitions(): Promise<Transition[]>;
export declare function getTransition(themeID: number): Promise<Transition>;
export declare function getAllComments(): Promise<Comment[][]>;
export declare function getComments(themeID: number): Promise<Comment[]>;
export declare function comment(themeID: number, sessionToken: string, message: string): Promise<Comment[]>;
export {};
