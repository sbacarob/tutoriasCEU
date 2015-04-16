class Tutorial < ActiveRecord::Base
  belongs_to :tutor, class_name: 'Student'
  has_and_belongs_to_many :students, autosave: true
end
