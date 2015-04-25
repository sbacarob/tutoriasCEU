class Student < ActiveRecord::Base
  has_many :assigned_tutorials, class_name: 'Tutorial', foreign_key: 'tutor_id'
  has_and_belongs_to_many :booked_tutorials, class_name: 'Tutorial', autosave: true
  has_and_belongs_to_many :acquired_achievements, class_name: 'Achievement', autosave: true
end
