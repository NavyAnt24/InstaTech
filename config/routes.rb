InstaTech::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]

  resources :feeds, :only => [:index, :create] do
    resources :comments, :only => [:index, :create]
    resources :entries, :only => [:index]
    resource :like, :only => [:create, :destroy]
  end

  resources :entries, :only => [] do
    resources :comments, :only => [:index, :create]
    resource :like, :only => [:create, :destroy]
  end

  resource :session, :only => [:create, :destroy, :new]

  root :to => "StaticPages#root"
end