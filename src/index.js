import _ from 'lodash';
import React, { Component } from 'react'; // Responsible for Step 1.
import ReactDOM from 'react-dom'; // Responsible for Step 2.
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDxNUZpP6cKf6MvRW9HvWDidvQLsZ1utqA';

// Step 1. Create a new component that produce HTML.
// 'const' is a ES6 syntax for constants
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => {
            //this.setState({ videos });
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div> // return some JSX
        );
    }
}

// Step 2. Put component's generated HTML in the DOM.
// App class is automatically instantiated this way by React.
ReactDOM.render(<App />, document.querySelector('.container'));