class Api::ActivitiesController < ApplicationController
  
  def index
    # @activities = Activity.where(user_id: params[:user_id])
     if params.has_key?(:user_id) 
            @activities = Activity.where(user_id: params[:user_id])
            
        else
            @activities = Activity.all
        end
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
