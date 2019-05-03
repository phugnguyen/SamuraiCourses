class CreateTerms < ActiveRecord::Migration[5.2]
  def change
    create_table :terms do |t|
      t.string :season, null: false
      t.integer :year, null:false
      t.references :school, foreign_key: true

      t.timestamps
    end
  end
end
