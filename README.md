# Samurai Courses
Samurai Courses, a Ninja Courses clone, is a course scheduling platform that allows students to plan their schedules without having to worry about which courses will conflict with each other.

[Live Demo](https://samurai-courses.herokuapp.com)

## Technologies
* Backend: Ruby on Rails/ActiveRecord/PostreSQL
* Frontend: React/Redux

## Features
* BCrypt encryption for passwords and session tokens
* Fast schedule generator

### Dashboard & Schedules
### Snapshots
### Select School and Add Courses

### Select Different Course Offerings

### Generate Schedules Without Conflict



This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


NOTES - STYLE BEFORE EVERYTHING 
AUTH - ERRORS 
* AUTH
  * modal!!
* Choose theme/ color theme
  * run by ryan before executing
* MVP 1
  * layout -> choosing school -> choosing term 
* MVP 2 
  * dropdown selection classes 
  * BONUS: sections - focus on main classes
* MVP 3
  * generate schedules
* MVP 4
  * generate schedule views
* BONNUS 
  * saved schedules
  
*SCHEMA
  * times table
  * course can have many times
  * scrape real data
  * courses table enrolled bonus
    * current enrolled
    * max enrolled
  * calculate on the backend 
    *send back up to schedule slice of state
  * schedules
    * SAVED boolean

* Sample State
  * preview slice of state for schedules
  
* backend routes
  * nest courses under a school
  * /api/courses
  * * required params: school term subject number 
* frontend routes
  * bonus front end routes for sharing 
