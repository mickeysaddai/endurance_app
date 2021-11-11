class Activity < ApplicationRecord
    validates :user_id, :duration, :date, presence: true

    belongs_to :user, 
    foreign_key: :user_id, 
    class_name: :User
end
