@schools.each do |school|
    json.set! school.id do 
        json.partial! 'school', school: school
    end
end