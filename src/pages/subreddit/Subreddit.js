import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Subreddit = () => {
   const {id} = useParams
    const [redditData, setRedditData] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result.data.data)
                setRedditData(result.data.data)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>hoi</h1>
            {Object.keys(redditData).length >0 && (
                <p>{redditData.title}</p>
            )}
        </div>
    );
};

export default Subreddit;