class Comment < ApplicationRecord
    belongs_to :activity
    foreign_key: :activity_id,
    class_name: :Activity

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User


end
