import React from "react";
import { useForm } from "@inertiajs/react";
import { posts } from "@/api";

export default function PostForm() {
  // retrieve `errors` here
  const { data, processing, post, setData, reset, errors } = useForm({
    title: "",
    body: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(posts.create.path(), { onSuccess: () => reset() });
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="text-input">Title</label>
        <input
          id="text-input"
          type="text"
          value={data.title}
          onChange={(e) => setData("title", e.target.value)}
        />
        {/* Display errors in the form */}
        {errors.title && (
          <div style={{ color: "red" }}>{errors.title.join(",")}</div>
        )}
      </div>
      <div>
        <label htmlFor="body-input">Body</label>
        <textarea
          id="body-input"
          value={data.body}
          onChange={(e) => setData("body", e.target.value)}
          rows="4"
        ></textarea>
        {/* Display errors in the form */}
        {errors.body && (
          <div style={{ color: "red" }}>{errors.body.join(",")}</div>
        )}
      </div>
      <button type="submit" disabled={processing}>
        Create
      </button>
    </form>
  );
}
