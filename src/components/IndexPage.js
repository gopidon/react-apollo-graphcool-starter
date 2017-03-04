/**
 * Created by gopi on 1/8/17.
 */
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router';
import {Table, Column, Cell} from 'fixed-data-table';
import {formatDate} from '../utils/date';

class IndexPage extends React.Component {

    render () {
        if (this.props.data.loading) {
            return (<div>Loading</div>)
        }

        if (this.props.data.error) {
            console.log(this.props.data.error);
            return (<div>An unexpected error occurred</div>)
        }
        //console.log(this.props.data)
        const rows = this.props.data.allPosts;
        return (
            <div className='container'>
                <Table
                    rowHeight={50}
                    rowsCount={rows.length}
                    width={1000}
                    height={1000}
                    headerHeight={50}>
                    <Column
                        header={<Cell>Title</Cell>}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                <Link
                                    to={`/post/${rows[rowIndex]['id']}`}
                                >
                                    <div>{rows[rowIndex]['title']}</div>
                                </Link>
                            </Cell>
                        )}
                        width={400}
                    />
                    <Column
                        header={<Cell>Created At</Cell>}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                <Link
                                    to={`/post/${rows[rowIndex]['id']}`}
                                >
                                    <div>{formatDate(rows[rowIndex]['createdAt'], 'MMMM Do YYYY, h:mm:ss a')}</div>
                                </Link>
                            </Cell>
                        )}
                        width={300}
                    />
                    <Column
                        header={<Cell>Updated At</Cell>}
                        cell={({rowIndex, ...props}) => (
                            <Cell {...props}>
                                <Link
                                    to={`/post/${rows[rowIndex]['id']}`}
                                >
                                    <div>{formatDate(rows[rowIndex]['updatedAt'], 'MMMM Do YYYY, h:mm:ss a')}</div>
                                </Link>
                            </Cell>
                        )}
                        width={300}
                    />
                </Table>
            </div>
        )
    }
}

IndexPage.propTypes = {
    data: React.PropTypes.shape({
        loading: React.PropTypes.bool,
        error: React.PropTypes.object,
        posts: React.PropTypes.object,
    }).isRequired,
}

const PostsQuery = gql`
  query Posts {
    allPosts(orderBy: createdAt_DESC){
      id
      title
      createdAt
      updatedAt
    }
  }
`

const IndexPageWithData = graphql(PostsQuery, {
    options: (ownProps) => {
        return {
            forceFetch: true
        }
    }
})(IndexPage)

export default IndexPageWithData




