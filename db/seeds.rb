# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Activity.destroy_all
Comment.destroy_all
Like.destroy_all



mickey = User.create!(
  username: "mickey",
  password: "password123"
)
timmy = User.create!(
  username: "timmy",
  password: "password456"
)


activity1 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 30, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.30pm",
  description: "Running is life",
  distance: 3.50,
)

activity2 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 4.21,
)
activity3 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 5.50,
)
activity4 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 4.44,
)
activity5 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 2.73,
)
activity6 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 6.29,
)
activity7 = Activity.create!(
  user_id: mickey.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 3.58,

)

activity8 = Activity.create!(
  user_id: timmy.id,
  activity_type: "running", 
  equipment_type: "none", 
  duration: 40, 
  heartrate: 120,
  date: "12/10/2020",
  time: "12.20pm",
  description: "Running is life",
  distance: 3.58,

)

comment1 = Comment.create!(
person_id: mickey.id, 
activity_id: activity1.id,
body: "Everything is awesome. Everything is cool when you apart of a team"
)

comment2 = Comment.create!(
person_id: mickey.id, 
activity_id: activity1.id,
body: "Feeling gucci!"
)

# like1 = Like.create!(activity1: activity1)