class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :login
      t.string :name
      t.string :major
      t.string :tutor_rating
      t.string :student_rating

      t.timestamps
    end

    add_index(:students, :login, unique: true)

  end
end
