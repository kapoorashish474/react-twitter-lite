import './App.css';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import React, {useState} from 'react'

function App() {
  const [name, setName] = useState('Ashish')
  const [textInput, setTextInput] = useState('')
  const [tweets, setTweets] = useState([])

  return (
    <div className="App">
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
      <TweetList name = {name} tweets={tweets} setTweets={setTweets}/>
    </div>
  );
}

export default App;
