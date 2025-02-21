// @license Apache-2.0
// @copyright Payal Yadav

import { cookies } from "./client_player.api.js";

window.onSpotifyWebPlaybackSDKReady = () => {
    // Create Spotify Player Instance

    const volume = localStorage.getItem('volum') ?? 100;

    const player = new Spotify.Player({
        name: 'Spotify Clone',
        getOAuthToken: callback => { callback(cookies.get('access_token')); },
        volume: volume / 100
    });

     // Ready
    
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // connect

    player.connect();

}  

