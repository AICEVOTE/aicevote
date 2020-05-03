import axios from "./axios";

export async function getSessionToken(sessionID: string): Promise<string> {
    return (await axios.get(
        `/auth/sessiontoken?sessionid=${sessionID}`
    )).data.sessionToken;
}
