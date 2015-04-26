class Student < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :assigned_tutorials, class_name: 'Tutorial', foreign_key: 'tutor_id'
  has_and_belongs_to_many :booked_tutorials, class_name: 'Tutorial', autosave: true
  has_and_belongs_to_many :acquired_achievements, class_name: 'Achievement', autosave: true

  def as_json( options = {})
    super( options.merge( only: [:id, :name, :major, :tutor_rating, :student_rating, :email], include: [:assigned_tutorials, :booked_tutorials, :acquired_achievements]))
  end
end
