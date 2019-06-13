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
seasons = %w(Fall Summer Spring Winter)
terms = []

schools.each do |school|
    seasons.each do |season|
        terms << Term.create!({
            season: season,
            year: "2019",
            school_id: school.id
        })
    end
end

codes = %w(KOR CMPSC MATH PHIL)
departments = %w(Korean Computer_Science Mathematics Philosophy)
days = %w(MWF TR)
duration = [50, 115]

start_times = (8..18).to_a.map{ |el| el*100 }

terms.each do |term|
    codes.each_with_index do |code, idx|
        randNum = rand(1..10)
        4.times do 
            s = start_times.sample
            Course.create!({
                department: departments[idx],
                code: code,
                course_number: randNum,
                term_id: term.id,
                start_time: s,
                end_time: s + duration.sample,
                days: days.sample
            })
        end
    end
end



