class CreateTutorials < ActiveRecord::Migration
  def change
    create_table :tutorials do |t|
      t.string :course
      t.string :location
      t.integer :capacity
      t.datetime :start_date
      t.datetime :end_date
      t.text :comments
      t.string :original_professor
      t.references :tutor, index: true

      t.timestamps
    end

    add_index(:tutorials, :course)

  end
end
