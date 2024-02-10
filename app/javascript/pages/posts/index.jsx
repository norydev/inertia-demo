import React from "react";
import { usePage, Link } from "@inertiajs/react";
import { posts as postsApi } from "@/api";

import Form from "./_form";

export default function Index() {
  const { posts } = usePage().props;

  return (
    <div>
      <h1>All my wonderful wisdom</h1>
      {posts.map((post) => (
        <h2 key={post.id}>
          <Link href={postsApi.show.path(post)}>{post.title}</Link>
        </h2>
      ))}

      <hr />

      {/* Let's add the form down here*/}
      <Form />
    </div>
  );
}
