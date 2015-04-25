class StudentsAcquiredAchievements < ActiveRecord::Migration
  def change
    create_join_table :students, :achievements do |t|
      t.index :student_id
      t.index :achievement_id
    end
  end
end
