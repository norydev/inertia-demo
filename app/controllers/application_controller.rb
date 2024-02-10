class ApplicationController < ActionController::Base
  def authenticate_user!(*args)
    true # simluation, you get the idea
  end

  def authorize(*args)
    true # simluation, you get the idea
  end
end
