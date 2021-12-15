class Api::LikesController < ApplicationController
      # before_action :find_activity
    # def index
    #   @likes = Like.all
    #   render :index
    # end
      
    def create
        # @activity.likes.create(user_id: current_user.id)
        @like = current_user.likes.new(like_params)

        if @like.save
        render :show
        else
          render json: @like.errors.full_messages.to_sentence
        end
    end


    def destroy
      @like = current_user.likes.find(params[:id])
      @activity = @like.activity
      @like.destroy
      render :show
    end

      private

    def like_params
      params.require(:like).permit(:activity_id)
    end
      
  # def find_activity
  #   @activity= Activity.find(params[:activity_id])
  # end


end
