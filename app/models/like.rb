class Like < ApplicationRecord
  validates :user_id, uniqueness: {scope: :activity_id}
  belongs_to :activity
  belongs_to :user
end
