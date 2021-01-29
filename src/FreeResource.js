function FreeResource(props) {
	return(
		<div>
			<p key={props.info.match}>{props.info.match}</p>
			<p key={props.info.status}>{props.info.status}</p>
			<p key={props.info.publishDate}>{props.info.publishDate}</p>
			<p key={props.info.itemUrl}>{props.info.itemUrl}</p>
			<img src={props.info.cover.medium} alt='algo'></img>
		</div>
	)
}

export default FreeResource;