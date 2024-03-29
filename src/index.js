import _ from 'lodash'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDaWGrxV-r3srjqW15sdW0AZELWr2I-i9g';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.search('arumba');
    }

    search(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const debounceSearch = _.debounce((term) => {this.search(term)}, 300);

        return (
            <div>
                <SearchBar onSearch={debounceSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    videos={this.state.videos}
                    onVideoSelection={video => this.setState({selectedVideo: video})}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));