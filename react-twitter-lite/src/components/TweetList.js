import React from 'react'
import Tweet from './Tweet'

const TweetList = ({name, tweets, setTweets}) => {
    return (
        <div>
          {tweets.map((tweet) => (<Tweet name= {name} tweet={tweet.message} id={tweet.id} tweets={tweets} setTweets={setTweets} ></Tweet>))}
        </div>
    )
}

export default  TweetList
