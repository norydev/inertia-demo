class PostsController < ApplicationController
  def index
    posts = Post.all.map { _1.slice(:id, :title) }

    render inertia: "posts/index", props: { posts: posts }
  end

  def show
    post = Post.find(params[:id]).slice(:title, :body)

    render inertia: "posts/show", props: { post: post }
  end

  def create
    authenticate_user! # example syntax using devise, redirects if fails

    post = Post.new(params.require(:post).permit(:title, :body))

    authorize post # example syntax using pundit, redirects if fails

    if post.save
      redirect_to posts_path
    else
      redirect_back(
        fallback_location: posts_path,
        inertia: { errors: post.errors.messages }
      )
    end
  end
end
