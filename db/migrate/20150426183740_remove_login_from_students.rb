class RemoveLoginFromStudents < ActiveRecord::Migration
  def change
    remove_column :students, :login, :string
  end
end
