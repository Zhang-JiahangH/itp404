import { useEffect } from "react";
import { Form, useLoaderData } from "react-router-dom";

export default function EditComment() {
  useEffect(() => {
    document.title = "Comment Edit Page";
  }, []);
  const comment = useLoaderData();

  return (
    <>
      <h1>Edit</h1>
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            rows="3"
            name="content"
            defaultValue={comment.content}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="score" className="form-label">
            Score
          </label>
          <input
            className="form-control"
            type="number"
            id="score"
            name="score"
            min="0"
            max="5"
            defaultValue={comment.score}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </>
  );
}
