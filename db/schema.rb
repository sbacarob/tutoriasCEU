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

ActiveRecord::Schema.define(version: 20150426184242) do

  create_table "achievements", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "type"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "achievements_students", id: false, force: true do |t|
    t.integer "student_id",     null: false
    t.integer "achievement_id", null: false
  end

  add_index "achievements_students", ["achievement_id"], name: "index_achievements_students_on_achievement_id"
  add_index "achievements_students", ["student_id"], name: "index_achievements_students_on_student_id"

  create_table "students", force: true do |t|
    t.string   "name"
    t.string   "major"
    t.string   "tutor_rating"
    t.string   "student_rating"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "students", ["email"], name: "index_students_on_email", unique: true
  add_index "students", ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true

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
