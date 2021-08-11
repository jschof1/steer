const { v4: uuid } = require('uuid');


// https://www.youtube.com/watch?v=j--2xUbv7OU&list=PLYapdvbx1R5in5LnycpeYzGDSrQ90bWMM&index=1
// LINK EXMAPLE 
      // https://www.youtube.com/
// VIDEO INFO 
      // watch?v=j--2xUbv7OU&list=
// PLAYLIST INFO 
      // PLYapdvbx1R5in5LnycpeYzGDSrQ90bWMM
// NUMBER IN PLAYLIST 
      // &index=1

export const playlists = [
   {
     tagId: '1',
     playlistId: '1a',
     tracks: [
       {
         trackTitle: 'Sunshower',
         artist: 'Da Kine',
         genre: 'House',
         youtubeUrl: 'https://www.youtube.com/watch?v=ge-7BcSa7S4', 
         youtubeEmbedUrl: 'https://www.youtube.com/embed/ge-7BcSa7S4', 
         discogsInfo: "https://www.discogs.com/Da-Kine-Mellow-Tip/master/337322"
       },
       {
        trackTitle: 'Indipendance',
        artist: 'Deyayu',
        genre: 'House',
        youtubeUrl: 'https://youtu.be//watch?v=JNsJ43Ttsu8', 
        youtubeEmbedUrl: "https://www.youtube.com/embed/JNsJ43Ttsu8",
        discogsInfo: "https://www.discogs.com/Deyayu-Jooice-002/release/14258199"
       },
     ],
   },
   {
    tagId: '2',
    playlistId: '2a',
    tracks: [
      {
        trackTitle: 'Indipendance',
        artist: 'Deyayu',
        genre: 'House',
        youtubeUrl: 'https://www.youtube.com/watch?v=JNsJ43Ttsu8', 
        youtubeEmbedUrl: "https://www.youtube.com/embed/JNsJ43Ttsu8",
        discogsInfo: "https://www.discogs.com/Deyayu-Jooice-002/release/14258199"
      }
    ],
  }
  ]

  export const tags = [
      {
        id: '1',
        name: "2021 Underground Dance Music",
      },
      {
        id: '2131',
        name: "2000s R&B",
      },
      {
        id: '4323',
        name: "Underrated Reggae Dub",
      },
      {
        id: '3453',
        name: "A bit of everything",
      }
    ]


    // {
    //   "Most Listened": "PLYapdvbx1R5hleU0xm28O1h-pe0iX0ORI",
    //   "Name": "Most Listened",
    //   "PlaylistID": "PLYapdvbx1R5hleU0xm28O1h-pe0iX0ORI",
    //   "PlaylistType": "MOST_LISTENED",
    //   "TrackCount": "1",
    //   "CurrentTrack" : {
    //       id: uuid(),
    //       trackURL: '',
    //       trackTitle: '',
    //       artist: '',
    //       name: '',
    //       genre: '',
    //       streamUrl: '', 
    //       streamType: '' 
    //   },
    // }