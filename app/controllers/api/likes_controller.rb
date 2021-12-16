class Api::LikesController < ApplicationController
      
    def create
          @activity = Activity.find(params[:activity_id])
     
          @like = Like.new(like_params)
        
        begin
            saved_liked = @like.save
         
            if saved_liked
            render :show
            else
              render json: @like.errors.full_messages.to_sentence
            end
        rescue => exception
           p exception
            
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
      params.require(:like).permit(:activity_id, :user_id)
    end
      



end
