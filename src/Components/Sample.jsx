import React from 'react';

function Sample(){
    return(
        <div>
            <h1>Hello World</h1>
            <Welcome />
        </div>
    );
}

const Welcome =() =>{
    return(
        <div>
            <h2>My First React Page</h2>
        </div>
    );
}

export default Sample;