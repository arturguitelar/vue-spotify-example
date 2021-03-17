const apiAccess = {
  clientId: process.env.VUE_APP_SPOTIFY_CLIENT_ID,
  cientSecret: process.env.VUE_APP_SPOTIFY_CLIENT_SECRET,
  redirectUrl: process.env.VUE_APP_SPOTIFY_REDIRECT_URL
};

const apiUrls = {
  baseUrl: "https://api.spotify.com/v1/"
};

export default { apiAccess, apiUrls };
