Rails.application.routes.draw do
   root "static_pages#root"
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :index, :show, :update] 
   

      resource :session, only: [:create, :destroy]
      resources :activities do
        resources :comments, only: [:create, :index, :show, :destroy]
        resources :likes, only: [:create, :show, :index, :destroy]
      end

    
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
