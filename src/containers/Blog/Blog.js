import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {
        return (
            <div className='Blog' >
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            activeStyle={{
                                color: 'orange',
                                textDecoration: 'underline'
                            }} 
                            exact
                            to='/'>Home</NavLink></li>
                            <li><NavLink 
                            activeStyle={{
                                color: 'orange',
                                textDecoration: 'underline'
                            }}
                            to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route exact path='/' component={Posts} />
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts/:id' component={FullPost} />
                </Switch>
                
                
                
                
            </div>
        );
    }
}

export default Blog;