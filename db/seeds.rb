# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Post.create!(title: "You won't believe what comes next", body: "Neither do we")
Post.create!(title: "How to do all the things in 10 easy steps", body: "I can't remember number 1")
Post.create!(title: "It took me 10 years to understand this", body: "Some banality about life")
Post.create!(title: "What all marketers do", body: "Not really but they pretend")
