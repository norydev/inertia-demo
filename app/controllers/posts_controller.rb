class PostsController < ApplicationController
  def index
    posts = Post.all.map { _1.slice(:id, :title) }

    render inertia: "posts/index", props: { posts: posts }
  end

  def show
    post = Post.find(params[:id]).slice(:title, :body)

    render inertia: "posts/show", props: { post: post }
  end
end
