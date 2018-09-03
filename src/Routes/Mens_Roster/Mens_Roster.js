import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Mens_Roster extends Component{

    render(){

        return(
            <div>
                Mens Roster
                <Link to='/'><button className='btn'>Home</button></Link>
            </div>
            )
        }

    
}