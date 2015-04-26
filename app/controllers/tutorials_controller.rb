class TutorialsController < ApplicationController

  def index
    respond_with Tutorial.all
  end

  def show
    respond_with Tutorial.find(params[:id])
  end

  private

    def tutorial_params
      params.require(:tutorial).permit(:course, :location, :capacity, :start_date,
                                       :end_date, :comments, :original_professor)
    end

end
