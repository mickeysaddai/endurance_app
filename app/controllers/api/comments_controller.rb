class Api::CommentsController < ApplicationController
    def create
        @activity = Activity.find(params[:activity_id])
        @comment = @activity.comments.create(params[:comment].permit(:activity_id, :person_id, :body))
        render :show
    end

    def index
        @activity = Activity.find(params[:activity_id])
        @comments = Comment.all
        render :index
    end


    def destroy
        @activity = Activity.find(params[:activity_id])
        
    end
    

    

end
