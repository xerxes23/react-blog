import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

const activeStyle = {
    color: 'orange',
    textDecoration: 'underline'
}

class Blog extends Component {

    render () {
        return (
            <div className='Blog' >

                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            activeStyle={activeStyle} 
                            exact
                            to='/'>Home</NavLink></li>
                            <li><NavLink 
                            activeStyle={activeStyle}
                            to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    <Route path='/new-post' component={NewPost} />
                    <Route path='/posts' component={Posts} />
                    <Route render={()=>(<h1>Not Found</h1>)} />
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch> 
                
            </div>
        );
    }
}

export default Blog;