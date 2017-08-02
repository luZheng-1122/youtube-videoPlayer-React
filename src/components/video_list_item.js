import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//{video} ES6
	//error: return <li>{props.video}</li>

	//从上级组件接受到一个数据video,一个事件处理函数onVideoSelect
	const imageUrl = video.snippet.thumbnails.default.url;

	console.log(video);

	return (
		<li onClick={() => onVideoSelect(video) } className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;