import axios from "./axios";

export async function postFeedback(feedback: string): Promise<void> {
    await axios.post(`/feedback?message=${feedback}`);
}

export async function postApplication(application: string): Promise<void> {
    await axios.post(`/application?message=${application}`);
}
