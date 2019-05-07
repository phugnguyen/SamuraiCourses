@courses.each do |course|
    json.set! course.id do 
        json.partial! 'course', course: course
    end
end