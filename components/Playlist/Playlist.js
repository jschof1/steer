import React, { useState } from 'react';
import { playlists } from '../../data';
import ReactPlayer from 'react-player';
import PlaylistTrackListElement from './PlaylistTrackListElement';


function Playlist ( {tagId} ) {

    const playlist = playlists.find((playlist) => playlist.tagId === tagId )
    
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

    
    const [currentTrack, setCurrentTrack] = useState(playlist.tracks[currentTrackIndex])


    const handleNextTrack = () => {
        setCurrentTrack(playlist.tracks[1])
    }
    console.log(currentTrack)

    return (
        <div className="Playlist">
            <h2> {`${currentTrack.artist} - ${currentTrack.trackTitle}`}</h2>
            <ReactPlayer
                url={currentTrack.youtubeUrl}
                playing={true}
                onEnded={handleNextTrack}
            />
        </div>
    )
}

export default Playlist;