// @license Apache-2.0
// @copyright Payal Yadav

export const cookies = new Map(
    document.cookie.split(';').map(cookie => {
      const [key, value] = cookie.trim().split('=');  
      return [key, value]; 
    })
  );

const base_url = 'https://api.spotify.com/v1/';
const headers = {
    'Authorization':`Bearer ${cookies.get('access_token')}`,
    'Content-Type': 'application/json'
}
