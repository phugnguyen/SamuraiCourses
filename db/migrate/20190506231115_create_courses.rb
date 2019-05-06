class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.string :department
      t.string :code
      t.string :course_number
      t.references :term, foreign_key: true
      t.string :start_time
      t.string :end_time
      t.string :days

      t.timestamps
    end
  end
end
