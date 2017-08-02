// import react as a javascript module
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//import the component file that WE write by ourselves, specify the directory
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC_9PRYYJfA2T6lAvvRyuStROUbavyLbiY';



//step1: create a new components. 
//this component should produce some HTML

//const is ES6 syntax, const app will not be changed, (old use var)
//JSX: html in javascript, webpack will transfrom JSX into HTML
// = () => replace function (ES6)
// const App = () => {
// 	return (
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }

//class-based component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			//pass for videoDetail
			selectedVideo: null
		};
		this.videoSearch('surfboards');
		
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, 
			(videos) => {
				console.log(videos);
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				});
				// ES6: this.setState({videos});
			});
	}

	//passing data from parent component to child component
	//pass props(videos) to videolist
	//顶层组件向下层组件传递事件处理函数和数据
	//需要向下传递的事件处理函数 在顶级组件中定义
	//下层组件触发该事件，顶层组件中的该事件处理函数会被执行，改变相应的state，达成re-render
	render() {

		const videoS = _.debounce((term) => { this.videoSearch(term)}, 300);

		return (
		<div>
			<SearchBar onSearchTermChange={videoS}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList 
			onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
			videos={this.state.videos}/>
		</div>
	);
	}
}

//step2: take this component's generated HTML and 
//put it on the page (in the DOM) to a target element

ReactDOM.render(<App />, document.querySelector('.container'));