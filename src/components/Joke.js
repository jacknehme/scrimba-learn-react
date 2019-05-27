import React from 'react';


function Joke(props) {
    const {question, punchLine} = props;

    return (
        <div>
            <p style={{display: !question && "none"}}>Question: {question}</p>
            <p>{question && 'Answer:'} {punchLine}</p>
            <hr />
        </div>

    );
}

export default Joke;