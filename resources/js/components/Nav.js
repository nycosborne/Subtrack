import React, {useState, useEffect} from 'react';
import axios from "axios";


const Nav = () => {

    const [ userId, setUserId] = useState(1);



    return (
        <div>
            Info About the user: {userId}
        </div>
    );
}

export default Nav;
