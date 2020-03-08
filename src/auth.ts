import axios from "./axios";

export async function getSessionToken(): Promise<string> {
    try {
        return (await axios.get("/auth/sessiontoken", {
            withCredentials: true
        })).data.sessionToken;
    } catch (e) {
        throw e;
    }
}
