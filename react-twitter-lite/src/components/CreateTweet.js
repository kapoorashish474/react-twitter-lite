import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) =>  {
    
    //functions 
    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, {id : uuidv4(), message:textInput}]);
        setTextInput('');
    }

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea 
            cols="50" rows="5"
             value = { textInput }  
             onChange={userInputHandler}></textarea>
            <button>Submit</button>
        </form>
    )
}

export default CreateTweet