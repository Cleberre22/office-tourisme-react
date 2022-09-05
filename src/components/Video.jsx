import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
    return (
        <div>
            <ReactPlayer 
                url='https://www.youtube.com/watch?v=Vl9oyalIwck'
                controls
                playing
                muted
                width={"1200px"}
                height={"600px"}
                classname="video"
                />
        </div>
    );
};

export default Video;