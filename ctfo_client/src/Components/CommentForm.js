import React from 'react';
import Request from "../helpers/request";

import dayjs from 'dayjs';

const CommentForm = (props) => {
  function handleSubmit(event){
    event.preventDefault();
    const comment = {
      "date": new dayjs(),
      "comment": event.target.comment.value,
      "endMood": event.target.endMood.value
    }
    handleCommentPost(comment);
  }

  function handleCommentPost(comment){
    const request = new Request();
    request.post('/api/journals', comment).then(() => {
      window.location = '/journals'
    })
  }

 return (
  <div >
  <form onSubmit={handleSubmit}>
    <textarea className="comment-form" type="text" placeholder="How do you feel now?" name="comment"/>
      <br></br>
    <input className="end-mood" type="text" placeholder="Mood now?" name="endMood"/>
      <br></br>
    <button className="submit-button" type="submit">Save</button>
  </form>
  </div>
)
}

export default CommentForm;
