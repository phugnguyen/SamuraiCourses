# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Term.delete_all
School.delete_all
User.delete_all

User.create!({
    username: 'guest',
    password: 'password',
    email: 'guest@password.com'
})

a = School.create!({
    name: "UC Santa Barbara"
})
b = School.create!({
    name: "UC Los Angeles"
})
c = School.create!({
    name: "Stanford"
})
d = School.create!({
    name: "CSU San Francisco"
})

schools = [a,b,c,d]
seasons = %w(Winter Spring Summer Fall)

schools.each do |school|
    seasons.each do |season|
        Term.create!({
            season: season,
            year: "2019",
            school_id: school.id
        })
    end
end

