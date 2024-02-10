class PostsController < ApplicationController
  def index
    posts = Post.all.map { _1.slice(:id, :title) }

    render inertia: "posts/index", props: { posts: posts }
  end
end
