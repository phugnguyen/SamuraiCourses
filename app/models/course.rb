# == Schema Information
#
# Table name: courses
#
#  id            :bigint(8)        not null, primary key
#  department    :string
#  code          :string
#  course_number :string
#  term_id       :bigint(8)
#  start_time    :string
#  end_time      :string
#  days          :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Course < ApplicationRecord
  validates :department, :code, :course_number, :term_id, :start_time, :end_time, :days, presence: true
  belongs_to :term
  has_one :school,
    through: :term,
    source: :school
end
