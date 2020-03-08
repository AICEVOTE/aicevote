import { getSessionToken } from "./auth";
import { getAllThemes, getTheme, getMyProfile, getProfiles, getProfile, postFeedback, postApplication } from "./index";
import { getAllArticles, getRelatedArticles } from "./news";
import {
    getAllResults, getResult, getAllVotes, getVotes, vote,
    getAllTransitions, getTransition, getAllComments, getComments, comment
} from "./vote";

export default {
    getAllThemes, getTheme, getMyProfile, getProfiles, getProfile, postFeedback, postApplication,
    getSessionToken,
    getAllArticles, getRelatedArticles,
    getAllResults, getResult, getAllVotes, getVotes, vote,
    getAllTransitions, getTransition, getAllComments, getComments, comment
}
