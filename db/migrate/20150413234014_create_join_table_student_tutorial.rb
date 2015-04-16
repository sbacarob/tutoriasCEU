class CreateJoinTableStudentTutorial < ActiveRecord::Migration
  def change
    create_join_table :students, :tutorials do |t|
      t.index :student_id
      t.index :tutorial_id
    end
  end
end
