import axios from "./axios";

export async function getSessionToken(sessionID: string): Promise<{
    userProvider: string,
    userID: string,
    sessionID: string,
    sessionIDExpire: number,
    sessionToken: string,
    sessionTokenExpire: number
}> {
    return (await axios.get(
        `/auth/sessiontoken?sessionid=${sessionID}`
    )).data.sessionToken;
}
