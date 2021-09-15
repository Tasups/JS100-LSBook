
 let accessToken;
 const clientID = "c5dd9ad0238846889e6268fe8e7a1d55";
 //THE REDIRECTURI MAY NOT BE CORRECT AS i AM USING AWS. IN THE DIRECTIONS, IT SAYS TO USE "http://localhost:3000/"
 //IF THIS IS CHANGED LATER, PLEASE MAKE SURE TO CHANGE ON SPOTIFY APP react-pb&j on my Spotify account
 const redirectUri =  /*"http://localhost:8080/"; //"http://localhost:3000/";*/ "https://bdc4cb350fc243b6a2d6ecb4b4d3afc5.vfs.cloud9.us-east-2.amazonaws.com/";
                     
 
 
 const Spotify = {
   
   getAccessToken() {
     if (accessToken) {
       return accessToken;
     }
     
     const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
     
     if (accessTokenMatch && expiresInMatch) {
       accessToken = accessTokenMatch[1];
       const expiresIn = Number(expiresInMatch[1]);
       
       window.setTimeout(() => accessToken = '', expiresIn * 1000);
       window.history.pushState('Access Token', null, '/');
       return accessToken;
     } else {
       const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
       window.location = accessUrl;
     }
   },
   
   search(term) {
     const accessToken = Spotify.getAccessToken();
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
       headers: {
         Authorization: `Bearer ${accessToken}`
       }
     }).then(response => {
       return response.json();
     }).then(jsonResponse => {
       if (!jsonResponse.tracks) {
         return [];
       }
       return jsonResponse.tracks.items.map(track => ({
         id: track.id,
         name: track.name,
         artists: track.artists[0].name,
         album: track.album.name,
         uri: track.uri
       }));
     });
   },
   
   savePlaylist (name, trackUris) {
     if (!name || !trackUris.length) {
       return;
     }
     
     const accessToken = Spotify.getAccessToken();
     const headers = { Authorization: `Bearer ${accessToken}` };
     let userId;
     fetch("https://api.spotify.com/v1/me", { headers: headers }
     ).then(response => response.json()
     ).then(jsonResponse => {
      userId = jsonResponse.id;
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, 
      {
       headers: headers,
       method: 'POST',
       body: JSON.stringify({ name: name })
      }).then(response => response.json()
      ).then(jsonResponse => {
       const playlistId = jsonResponse.id;
       return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, 
       {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackUris })
       });
      });
     });
   }
 };
 
 export default Spotify;