module ApplicationHelper
  def head
    render 'layouts/splash/head'
  end

  def scripts
    render 'layouts/splash/scripts'
  end

  def browsehappy
    render 'layouts/splash/browsehappy'
  end
end
