class Api::ActivitiesController < ApplicationController
  
  def index
    p :user
    @activities = Activity.includes(params[:user_id]).all
  end

  def show
    @activity = Activity.find(params[:id])
  end

  def create
    # debugger
    @activity = Activity.new(activity_params)
    if @activity.save
      render :show
    else
      render json: @activity.errors.full_messages, status: 401
    end
  end

  def update
    @activity = Activity.find(params[:id])

    if @activity.update(activity_params)
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  def destroy
    @activity = Activity.find(params[:id])

    if @activity.destroy
      render :show
    else
      render json: @activity.errors.full_messages, status: 422
    end
  end

  private

  def activity_params 
    params.require(:activity).permit(:id, :user_id, :activity_type, :distance, :date, :time, :description, :heartrate, :duration, :equipment_type)
  end

end
