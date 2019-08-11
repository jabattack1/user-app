import React from "react";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.renderComment = this.renderComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderComment(comment, i) {
    const { userId } = this.props.match.params;
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={() => this.props.removeComment(userId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }

  handleSubmit(event) {
    //prevent page from refreshing
    event.preventDefault();
    const { userId } = this.props.match.params;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.addComment(userId, author, comment);
    this.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.userComments.map((comment, i) =>
          this.renderComment(comment, i)
        )}
        <form
          ref={(ref) => (this.commentForm = ref)}
          className="comment-form"
          onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(ref) => (this.author = ref)}
            placeholder="author"
          />
          <input
            type="text"
            ref={(ref) => (this.comment = ref)}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
