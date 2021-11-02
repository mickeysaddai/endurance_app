class Activity < ApplicationRecord
    validates :user_id, :duration, :date, presence: true

    belongs_to :user
end
