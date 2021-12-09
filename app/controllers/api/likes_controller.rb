class Api::LikesController < ApplicationController
      before_action :find_activity
      
    def create
        @activity.likes.create(user_id: current_user.id)
        # render: show
    end

      private
  def find_activity
    @activity= Activity.find(params[:activity_id])
  end


end
