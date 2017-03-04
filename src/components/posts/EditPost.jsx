import React, {Component, PropTypes} from 'react';
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import ReactQuill from 'react-quill';

import constants from "../../utils/constants";

class EditPost extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: props.post.title,
            content: props.post.content,
            contentHTML: props.post.contentHTML,
            defaultItems: constants.defaultItems
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} className="form-control" id="title" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <ReactQuill
                            theme='snow'
                            ref={(input) => { this.textInput = input; }}
                            defaultValue={this.state.contentHTML}
                            toolbar={this.state.defaultItems}
                            onChange={this.onContentChange.bind(this)}
                            style={{height: '900px',border: '2px solid black'}}
                        />
                    </div>
                    <a type="button" style={{marginRight: 10}} className="btn btn-default" onClick={this.handleSave.bind(this)}>Save</a>
                    <a type="button" className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</a>
                </form>
            </div>
        );
    }

    onTitleChange(e){
        this.setState({
            title: e.target.value
        })
    }

    onContentChange(value){
        this.setState({
            contentHTML: value
        })
    }

    handleSave(e){
        e.preventDefault();
        const {id} = this.props.post;
        const {title, contentHTML} = this.state;
        const content = this.textInput.getEditor().getText();
        this.props.editPost({variables: {id, title, content, contentHTML}})
            .then((test) => {
                console.log("TESTING>>>>>", test)
                this.props.router.replace('/')
            })
    }

    handleDelete(e){
        e.preventDefault();
        const {id} = this.props.post;

        this.props.deletePost({variables: {id}})
            .then((test) => {
                console.log("TESTING>>>>>", test)
                this.props.router.replace('/')
            })
    }
}

const editPost = gql`
  mutation updatePost($id: ID!, $title: String!, $content: String!, $contentHTML: String!) {
    updatePost(id: $id, title: $title, content: $content, contentHTML: $contentHTML) {
      id
      title
      content
      contentHTML
    }
  }
`

const deletePost = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }`



const EditPostWithMutations =  graphql(deletePost, {name : 'deletePost'})(
    graphql(editPost, {name: 'editPost'})(withRouter(EditPost))
)

export default EditPostWithMutations;
