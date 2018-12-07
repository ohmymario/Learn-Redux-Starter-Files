import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {

    // ID for Post
    const { postId } = this.props.params

    // Post Index 
    const i = this.props.posts
    .findIndex((post) => (post.code === postId))
    
    // Post Information
    const post = this.props.posts[i];

    // Post Comments
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments postComments={postComments}/>
      </div>
    )
  }
})

export default Single;