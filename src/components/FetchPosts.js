import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchPosts() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(({ data }) => {
				setLoading(false);
				setError("");
				setPosts(data);
			})
			.catch((e) => {
				setLoading(false);
				setPosts([]);
				setError(`${e}`);
				console.log(`${e}`);
			});
	}, []);

	if (error) return <p>{error}</p>;
	if (loading) return <p>Loading...</p>;

	if (!loading && !error) {
		return posts.length > 0 ? (
			<div>
				{posts.map((post) => (
					<p key={post.id}>{`#${post.id} - ${post.body}`}</p>
				))}
			</div>
		) : (
			<p>No posts</p>
		);
	}
}

export default FetchPosts;
