# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Activity.destroy_all

mickey = User.create!(
  username: "mickey",
  password: "password123"
)


activity1 = Activity.create!(
  user_id: mickey.id,
  activity_type: "Running", 
  equipment_type: "none", 
  duration: 30, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.30pm",
  description: "Running is life",
  distance: 3,
)

activity2 = Activity.create!(
  user_id: mickey.id,
  activity_type: "Running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 4,
)