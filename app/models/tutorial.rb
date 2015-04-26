class Tutorial < ActiveRecord::Base
  belongs_to :tutor, class_name: 'Student'
  has_and_belongs_to_many :students, autosave: true

  def as_json(options = {})
    super (options.merge(include: [:students, :tutor], except: :tutor_id))
  end

end
