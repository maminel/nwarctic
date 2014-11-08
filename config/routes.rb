Rails.application.routes.draw do
  root           to: 'splash#index'
  get 'splash',  to: 'splash#index',  as: :splash
  get 'about',   to: 'pages#about',   as: :about
  get 'contact', to: 'pages#contact', as: :contact
  get 'design',  to: 'pages#design'

  get 'atc',                      to: 'atc#index',               as: :atc
  get 'atc/about_us',             to: 'atc#about_us',            as: :atc_about_us
  get 'atc/who_we_are',           to: 'atc#who_we_are',          as: :atc_who_we_are
  get 'atc/our_instructors',      to: 'atc#instructors',        as: :atc_instructors
  get 'atc/partnerships',         to: 'atc#partnerships',        as: :atc_partnerships
  get 'atc/admissions',           to: 'atc#admissions',          as: :atc_admissions
  get 'atc/apply',                to: 'atc#apply',               as: :atc_apply
  get 'atc/financial_aid',        to: 'atc#financial_aid',       as: :atc_financial_aid
  get 'atc/costs',                to: 'atc#costs',               as: :atc_costs
  get 'atc/programs',             to: 'atc#programs',            as: :atc_programs
  get 'atc/offer',                to: 'atc#offer',               as: :atc_offer
  get 'atc/adult_education',      to: 'atc#adult_ed',            as: :atc_adult_ed
  get 'atc/construction_trades',  to: 'atc#construction',        as: :atc_construction
  get 'atc/culinary_arts',        to: 'atc#culinary',            as: :atc_culinary
  get 'atc/education_careers',    to: 'atc#education',           as: :atc_education
  get 'atc/healthcare',           to: 'atc#healthcare',          as: :atc_healthcare
  get 'atc/office_occupations',   to: 'atc#office',              as: :atc_office
  get 'atc/process_technology',   to: 'atc#technology',          as: :atc_technology
  get 'atc/careers',              to: 'atc#careers',             as: :atc_careers
  get 'atc/our_pathways',         to: 'atc#pathways',            as: :atc_pathways
  get 'atc/soft_skills',          to: 'atc#skills',              as: :atc_skills
  get 'atc/our_guarantee',        to: 'atc#guarantee',           as: :atc_guarantee
  get 'atc/professional_environment', to: 'atc#environment',     as: :atc_environment
  get 'atc/development',          to: 'atc#development',         as: :atc_development
  get 'atc/jobs',                 to: 'atc#jobs',                as: :atc_jobs
  get 'atc/student_life',         to: 'atc#student_life',        as: :atc_student_life
  get 'atc/life',                 to: 'atc#life',                as: :atc_life
  get 'atc/safe',                 to: 'atc#safe',                as: :atc_safe

  get 'star',              to: 'star#index',              as: :star
  get 'star/about_us',     to: 'star#about_us',           as: :star_about_us
  get 'star/who_we_are',   to: 'star#who_we_are',         as: :star_who_we_are
  get 'star/partnerships', to: 'star#partnerships',       as: :star_partnerships
  get 'star/watch_video',  to: 'star#watch_video',        as: :star_watch_video
  get 'star/inquire',      to: 'star#inquire',            as: :star_inquire
  get 'star/for_me',       to: 'star#for_me',             as: :star_for_me
  get 'star/careers',      to: 'star#careers',            as: :star_careers
  get 'star/academics',    to: 'star#academics',          as: :star_academics
  get 'star/schools',      to: 'star#schools',            as: :star_schools
  get 'star/programs',     to: 'star#programs',           as: :star_programs
  get 'star/student_life', to: 'star#student_life',       as: :star_student_life
  get 'star/safe',         to: 'star#safe',               as: :star_safe
  get 'star/residential',  to: 'star#residential',         as: :star_residential
end
