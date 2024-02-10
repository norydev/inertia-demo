import React from "react";
import { usePage } from "@inertiajs/react";

export default function Index() {
  const { posts } = usePage().props;

  return (
    <div>
      <h1>All my wonderful wisdom</h1>
      {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))}
    </div>
  );
}
