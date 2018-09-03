import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {


    render(){

    return(
        <div>
            HOME
            <nav className= 'main-menu'> 
                <Link to='/allstars'><button className='btn'>Allstars Roster</button></Link>
                <Link to='/mens'><button className='btn'>Men's Roster</button></Link>
                <Link to='/womens'><button className='btn'>Women's Roster</button></Link>
                 </nav>
        </div>
        )
    }
}

