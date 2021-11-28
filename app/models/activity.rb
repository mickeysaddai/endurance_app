class Activity < ApplicationRecord
    validates :user_id, :duration, :date, presence: true

    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User

    has_many :comments,
    dependent: :destroy,
    foreign_key: :activity_id,
    class_name: :Comment
end
