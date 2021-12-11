class Comment < ApplicationRecord
    validates :body, :activity_id, :person_id, presence: true
    belongs_to :activity,
    foreign_key: :activity_id,
    class_name: :Activity

    belongs_to :user,
    foreign_key: :person_id,
    class_name: :User


end
