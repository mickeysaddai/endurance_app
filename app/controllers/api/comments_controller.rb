class Api::CommentsController < ApplicationController
    def create
        @activity = Activity.find(params[:activity_id])
        # @comment = @activity.comments.create(comment_params)
        @comment = Comment.new(comment_params)
        begin
            savedComment = @comment.save
            debugger
            if savedComment
                
                render :show
            else
                render json: @comment.errors.full_messages, status: 401
            end
            
        rescue => exception
            
            
        end

    end

    def destroy
        @activity = Activity.find(params[:activity_id])
        @comment = Comment.find(params[:id])
        @comment.destroy
   
    end

    def comment_params
        # debugger
        # params.require(:comment).permit(:activity_id, :person_id, :body)
      comment = { person_id: params["person_id"], 
                    activity_id: params["activity_id"],
                    body: params["body"]
                }
    end

    

end
