import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

class Blog extends Component {

    render () {
        return (
            <div className='Blog' >
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/newpost'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                
                <Route exact path='/' render={() => 
                    <Posts/>
                } />
                
            </div>
        );
    }
}

export default Blog;