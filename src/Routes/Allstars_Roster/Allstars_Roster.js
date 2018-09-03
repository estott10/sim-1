import React, { Component } from 'react';

import {Link} from 'react-router-dom';

export default class Allstars_Roster extends Component{

    render(){

        return(
            <div>
                Allstars Roster
                <Link to='/'><button className='btn'>Home</button></Link>
            </div>
            )
        }

    
}