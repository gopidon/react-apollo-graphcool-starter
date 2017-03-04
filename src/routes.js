/**
 * Created by gopi on 1/8/17.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';
import AddPost from './components/posts/AddPost.jsx';
import PostPage from './components/posts/PostPage.jsx';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage}/>
        <Route path="addPost" component={AddPost}/>
        <Route path="post/:postId" component={PostPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;
