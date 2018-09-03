import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Womens_Roster extends Component{

    render(){

        return(
            <div>
                Women's Roster
             <Link to='/'><button className='btn'>Home</button></Link>

            </div>
            )
        }
    
}