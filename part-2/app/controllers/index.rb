get '/' do
  redirect '/horses'
end

get '/horses' do
  @horses = Horse.all
  erb :'horses/index'
end


get '/horses/new' do
  @horse = Horse.new
  if request.xhr?
    erb :'horses/_new', layout: false
  else
    erb :'horses/new'
  end
end

post '/horses/new' do
  @horse = Horse.create(params[:horse])
  if request.xhr?
    erb :'/horses/_index', layout: false
  else
    erb :'/horses/index'
  end
end
