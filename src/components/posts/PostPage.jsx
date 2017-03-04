import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { filter } from 'graphql-anywhere'

import EditPost from './EditPost.jsx';

class PostPage extends React.Component {


  render () {
    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    if (this.props.data.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    const post = this.props.data.Post

    return (
      <div>
        <EditPost
          post={post}
          handleCancel={this.goBack}
          afterChange={this.goBack} />
      </div>
    )
  }

  goBack()  {
    this.props.router.replace('/')
  }
}

const PostQuery = gql`query PostQuery($id: ID!) {
    Post(id: $id) {
      id
      title
      content
      contentHTML
    }
  }
`

const PostPageWithData = graphql(PostQuery, {
    options: (ownProps) => ({
      variables: {
        id: ownProps.params.postId
      }
    })
  }
)(withRouter(PostPage))

export default PostPageWithData
