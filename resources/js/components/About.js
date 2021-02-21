import React, {useState, useEffect} from 'react';
import axios from "axios";


const About = () => {

    const [ userId, setUserId] = useState(null);

    axios.defaults.withCredentials = true;
    axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/about').then(response => {
            console.log(response);
            setUserId(response.data);
        });
    });


    return (
        <div>
           Info About the user: {userId}
        </div>
    );
}

export default About;
