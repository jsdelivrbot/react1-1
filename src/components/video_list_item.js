import React, {Component} from 'react'

export default class VideoListItem extends Component {
    render() {
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;
        const imageTitle = video.snippet.title;
        const onVideoSelection = this.props.onVideoSelection;

        return (
            <li className='list-group-item' onClick={() => onVideoSelection(video)}>
                <div className='video-list media'>
                    <div className='media-left'>
                        <img className='media-object' src={imageUrl}/>
                    </div>
                    <div className='media-body'>
                        <div className='media-heading'>
                            {imageTitle }
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}