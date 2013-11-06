InstaTech::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]

  resources :feeds, :only => [:index, :create] do
    resources :entries, :only => [:index]
  end

  resource :session, :only => [:create, :destroy, :new]

  root :to => "StaticPages#root"
end
