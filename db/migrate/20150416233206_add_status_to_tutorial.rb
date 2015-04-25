class AddStatusToTutorial < ActiveRecord::Migration
  def change
    add_column :tutorials, :status, :string
  end
end
