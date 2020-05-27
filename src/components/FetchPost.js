import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchPost(props) {
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
			.then(({ data }) => {
				console.log(data);
				setPost(data);
				setLoading(false);
				setError("");
			})
			.catch((e) => {
				console.log(`${e}`);
				setError(`${e}`);
				setLoading(false);
				setPost({});
			});
	}, []);

	if (error) return <p>{error}</p>;
	if (loading) return <p>Loading...</p>;

	return <div>{`#${post.id} - ${post.body}`}</div>;
}

export default FetchPost;
