# == Schema Information
#
# Table name: terms
#
#  id         :bigint(8)        not null, primary key
#  season     :string           not null
#  year       :integer          not null
#  school_id  :bigint(8)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Term < ApplicationRecord
  validates :season, :year, :school_id, presence: true
  belongs_to :school
  has_many :courses
end
