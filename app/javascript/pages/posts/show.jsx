import React from "react";
import { usePage } from "@inertiajs/react";

export default function Index() {
  const { post } = usePage().props;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
