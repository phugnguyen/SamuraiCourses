class Api::CoursesController < ApplicationController

  # pass in termID, all course codes for that term
  def index
    @courses = Course.all.where(term_id: params[:termId])
    render :index
  end


  # pass in termID, code, courseNumber
  # shows all offerings 
  def show
    @course = Course.all.where(
      term_id: params[:termId],
      code: params[:code],
      course_number: params[:courseNumber] 
      )
    render :show
  end

end
