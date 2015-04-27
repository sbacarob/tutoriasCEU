class AssignedTutorialsController < ApplicationController

  def index
    respond_with current_student.assigned_tutorials
  end

  def create
    respond_with current_student.assigned_tutorials.create(tutorial_params.merge(status: 'ACTIVA'))
  end

  def show
    respond_with current_student.assigned_tutorials.find(params[:id])
  end

  def update
    respond_with current_student.assigned_tutorials.update(tutorial_params)
  end

  def destroy
    respond_with current_student.assigned_tutorials.update(status: 'CANCELADA')
  end

  private
  def tutorial_params
    params.require(:assigned_tutorial).permit(:course, :location, :capacity, :start_date, :end_date, :comments, :original_professor)
  end
end
