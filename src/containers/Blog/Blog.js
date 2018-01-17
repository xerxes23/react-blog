import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

const activeStyle = {
    color: 'orange',
    textDecoration: 'underline'
}

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div className='Blog' >

                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            activeStyle={activeStyle} 
                            exact
                            to='/posts'>Posts</NavLink></li>
                            <li><NavLink 
                            activeStyle={activeStyle}
                            to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    { this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={()=>(<h1>Not Found</h1>)} />
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch> 
                
            </div>
        );
    }
}

export default Blog;