import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Subreddit = () => {
   const {id} = useParams
    const [redditData, setRedditData] = useState('')

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result.data.data.children)
                setRedditData(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [id])

    return (
        <div>
            <h1>hi</h1>
           <p>{redditData.data.subreddit_name_prefixed}</p>
        </div>
    );
};

export default Subreddit;