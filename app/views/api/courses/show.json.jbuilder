@course.each do |offering|
    json.set! offering.id do 

        json.extract! offering, :id, :department, :code, :course_number, :term_id, :start_time, :end_time, :days
    end
end