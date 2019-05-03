class Api::SchoolsController < ApplicationController
  def index
    @schools = School.all
    render :index
  end

  def show
    @school = School.find(params[:id])
    render :show
  end

  private
  def school_params
    params.require(:school).permit(:name)
  end

end
