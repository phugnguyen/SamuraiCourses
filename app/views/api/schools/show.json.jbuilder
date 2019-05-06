json.school do 
    json.partial! '/api/schools/school', school: @school
end

json.terms do 
    @school.terms.each do |term|
        json.set! term.id do 
            json.extract! term, :season, :year, :id, :school_id
        end
    end
end