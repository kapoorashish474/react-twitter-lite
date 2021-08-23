import React from 'react'

const Tweet = ({name, tweet, id, setTweets, tweets}) => 
 {
    const deleteTweet = () => {
        setTweets(tweets.filter((tweet) => tweet.id !== id))
    }
    return (
        <div >
            <h2>{name}</h2>
            <h3>{id}</h3>
            <h3>{tweet}</h3>
            <button onClick={() => deleteTweet()}>Delete</button>  
            <button>Like</button>          
        </div>
    )
}

export default Tweet