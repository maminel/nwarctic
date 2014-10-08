Rails.application.routes.draw do
  root :to => 'splash#index'
  get 'splash',   to: 'splash#index',  as: :splash

  get 'atc',           to: 'atc#index',               as: :atc
  get 'about_us',      to: 'atc#about_us',            as: :atc_about_us
  get 'who_we_are',    to: 'atc#who_we_are',          as: :atc_who_we_are
  get 'partnerships',  to: 'atc#partnerships',        as: :atc_partnerships
  get 'support_us',    to: 'atc#support_us',          as: :atc_support_us
  get 'admissions',    to: 'atc#admissions',          as: :atc_admissions
  get 'apply',         to: 'atc#apply',               as: :atc_apply
  get 'financial_aid', to: 'atc#financial_aid',       as: :atc_financial_aid
  get 'costs',         to: 'atc#costs',               as: :atc_costs
  get 'academics',     to: 'atc#academics',           as: :atc_academics
  get 'programs',      to: 'atc#programs',            as: :atc_programs
  get 'offer',         to: 'atc#offer',               as: :atc_offer
  get 'careers',       to: 'atc#careers',             as: :atc_careers
  get 'development',   to: 'atc#development',         as: :atc_development
  get 'jobs',          to: 'atc#jobs',                as: :atc_jobs
  get 'student_life',  to: 'atc#student_life',        as: :atc_student_life
  get 'safe',          to: 'atc#safe',                as: :atc_safe
  get 'dormitory',     to: 'atc#dormitory',           as: :atc_dormitory
  get 'community',     to: 'atc#community',           as: :atc_community
  get 'activities',    to: 'atc#activities',          as: :atc_activities

  get 'star',          to: 'star#index',              as: :star
  get 'about_us',      to: 'star#about_us',           as: :star_about_us
  get 'who_we_are',    to: 'star#who_we_are',         as: :star_who_we_are
  get 'partnerships',  to: 'star#partnerships',       as: :star_partnerships
  get 'support_us',    to: 'star#support_us',         as: :star_support_us
  get 'inquire',       to: 'star#inquire',            as: :star_inquire
  get 'for_me',        to: 'star#for_me',             as: :star_for_me
  get 'inquiry_form',  to: 'star#inquiry_form',       as: :star_inquiry_form
  get 'careers',       to: 'star#career_pathways',    as: :star_careers
  get 'programs',      to: 'star#programs',           as: :star_programs
  get 'development',   to: 'star#development',        as: :star_development
  get 'academics',     to: 'star#academics',          as: :star_academics
  get 'schools',       to: 'star#schools',            as: :star_schools
  get 'offer',         to: 'star#offer',              as: :star_offer
  get 'student_life',  to: 'star#student_life',       as: :star_student_life
  get 'safe',          to: 'star#safe',               as: :star_safe
  get 'dormitory',     to: 'star#dormitory',          as: :star_dormitory
  get 'community',     to: 'star#community',          as: :star_community
  get 'activities',    to: 'star#activities',         as: :star_activities

  get 'about',         to: 'pages#about',             as: :about
  get 'contact',       to: 'pages#contact',           as: :contact
  get 'design',        to: 'pages#design'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
