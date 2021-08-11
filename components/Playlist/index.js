import React from 'react';
import { playlists } from '../../data';
import PlaylistTrackListElement from './PlaylistTrackListElement';


function Playlist ( {tagId} ) {

const playlist = playlists.find((playlist) => playlist.tagId === tagId )


    return (
        <div className="Playlist">
            {playlist && playlist.tracks.map((track) => <PlaylistTrackListElement key={track.id} track={track} />)} 
        </div>
    )
}

export default Playlist;