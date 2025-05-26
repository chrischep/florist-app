Rails.application.routes.draw do
  namespace :api do
    resources :flowers, only: [:index, :create, :update, :destroy]
  end
end
