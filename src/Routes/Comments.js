import { useEffect } from "react";
import { useLoaderData, Form } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Comments() {
  useEffect(() => {
    document.title = "Comments Page";
  }, []);
  const comments = useLoaderData();
  console.log(comments);

  return (
    <ol>
      {comments.map((comment) => {
        return (
          <li key={comment.commentId}>
            <ul>
              <li>
                Beach: {comment.beach}
                <Link to={`/profile/comments/${comment.commentId}/edit`}>
                  Edit
                </Link>
              </li>
              <li>Score: {comment.score}</li>
              <li>Content: {comment.content}</li>
              <li>Created At: {comment.createDate}</li>
            </ul>
            <Form
              method="post"
              action={`/profile/comments/${comment.commentId}/destroy`}
            >
              <button type="submit" className="btn btn-sm btn-danger">
                Delete
              </button>
            </Form>
          </li>
        );
      })}
    </ol>
  );
}
