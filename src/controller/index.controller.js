// @license Apache-2.0
// @copyright Payal Yadav

import { getProfile } from "../api/user.api.js";
import { getRecentlyPlayer } from "../api/player.api.js";
import { getTrack } from "../api/track.api.js";
import { getSeveralArtists } from "../api/artists.api.js";
import { getNewRelease } from "../api/album.api.js";
import { getPlaylist } from "../api/playlist.api.js";
import apiConfig from "../config/api.config.js";

const index = async (req, res) => {
  // current user profile
  const currentProfile = await getProfile(req);

  // recently player
  const recentlyPlayer = await getRecentlyPlayer(req);
  const recentlyPlayerTrack = await recentlyPlayer.items.map(
    ({ track }) => track
  );

  // tracks albums
  const trackId = recentlyPlayerTrack.map(({ id }) => id);
  const ids = trackId.slice(0, 5).join(",");
  const track = await getTrack(req, ids, apiConfig.lowLimit);
  const trackPlayer = track.tracks;

  // tracks artists
  const artistsId = trackPlayer.map((track) =>
    track.artists.map((artist) => artist.id)
  );
  const uniqueArtistsId = [...new Set(artistsId.flat(1))].join(",");
  const trackArtists = await getSeveralArtists(req, uniqueArtistsId);

  // several albums
  const newRelease = await getNewRelease(req, apiConfig.lowLimit);

  // playlist
  const playlist = await getPlaylist(req, apiConfig.lowLimit);

  // hone page
  res.render("./pages/index", {
    currentProfile,
    trackPlayer,
    trackArtists,
    newRelease,
    playlist,
  });
};

export default index;
