class TutorialsController < ApplicationController

  def index
    respond_with Tutorial.all
  end

  def show
    respond_with Tutorial.find(params[:id])
  end

  def add_student
    respond_with Tutorial.find(params[:id]).students<<current_student
  end

  private

    def tutorial_params
      params.require(:tutorial).permit(:course, :location, :capacity, :start_date,
                                       :end_date, :comments, :original_professor)
    end

end
