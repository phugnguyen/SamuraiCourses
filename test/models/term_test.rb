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

require 'test_helper'

class TermTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
