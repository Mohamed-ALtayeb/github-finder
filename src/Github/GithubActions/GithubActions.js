import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const GITHUB_TOKEN = "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";

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});
// **********************//Serach Users//******************* *//
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await axios(`https://api.github.com/search/users?${params}`);
  return await response.data.items;
};

// **************//Get Users and Repos//********************** */

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    axios.get(`https://api.github.com/users/${login}`),
    axios.get(`https://api.github.com/users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
