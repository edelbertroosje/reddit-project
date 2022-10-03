import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import './Home.css';

const Home = () => {
    const [redditData, setRedditData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15');
                console.log(result.data.data.children)
                setRedditData(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }

        fetchData()
    }, [])
    return (
        <div className="article">
                {redditData.map((reddit) => {
                    return (
                        <article className="reddit" key={reddit.data.id}>
                            <h1>{reddit.data.title}</h1>
                            <Link to={`/subreddit/${reddit.data.subreddit}`}>{reddit.data.subreddit_name_prefixed}</Link>
                            <p > Comments: {reddit.data.num_comments} - Ups: {reddit.data.ups}</p>
                        </article>
                    )
                })}

        </div>
    );
};

export default Home;