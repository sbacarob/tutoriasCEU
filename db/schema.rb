# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150416233206) do

  create_table "students", force: true do |t|
    t.string   "login"
    t.string   "name"
    t.string   "major"
    t.string   "tutor_rating"
    t.string   "student_rating"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "students", ["login"], name: "index_students_on_login", unique: true

  create_table "students_tutorials", id: false, force: true do |t|
    t.integer "student_id",  null: false
    t.integer "tutorial_id", null: false
  end

  add_index "students_tutorials", ["student_id"], name: "index_students_tutorials_on_student_id"
  add_index "students_tutorials", ["tutorial_id"], name: "index_students_tutorials_on_tutorial_id"

  create_table "tutorials", force: true do |t|
    t.string   "course"
    t.string   "location"
    t.integer  "capacity"
    t.datetime "start_date"
    t.datetime "end_date"
    t.text     "comments"
    t.string   "original_professor"
    t.integer  "tutor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "status"
  end

  add_index "tutorials", ["course"], name: "index_tutorials_on_course"
  add_index "tutorials", ["tutor_id"], name: "index_tutorials_on_tutor_id"

end
