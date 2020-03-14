import axios from "./axios";

export async function getSessionToken(sessionID: string): Promise<string> {
    try {
        return (await axios.get(
            "/auth/sessiontoken?sessionid=" + sessionID
        )).data.sessionToken;
    } catch (e) {
        throw e;
    }
}
