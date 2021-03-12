const apiAccess = {
  clientId: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
  cientSecret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET,
  redirectUrl: process.env.VUE_APP_SPOTIFY_REDIRECT_URL
};

const apiUrls = {
  baseUrl: "https://api.spotify.com/v1/"
};

const accessToken = () => {
  return "BQAT9bC5y4GnipiF_lffOxxk3bTxKHl4RyRDqtcHPPOUBChENgRsT9RGeb0VVv2hlVVKU1ECQ3Wtmgix8Q7Mx1my8jetazAhED3YLM8W5UyfPdOMr-L2-M1pH0csP1-29BkduUYWUfHgPg0";
};

export default { apiAccess, apiUrls, accessToken };
