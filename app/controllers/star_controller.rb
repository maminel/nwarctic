class StarController < ApplicationController
  layout 'star/star_layout'
 @inquire = Inquire.new
  def index
  end

  def about_us
  end

  def who_we_are
  end

  def partnerships
  end

  def watch_video
  end

  def inquire
    @inquire = Inquire.new
    @inquire = Inquire.new(params[:inquire])
    @inquire.request = request
    if @inquire.deliver
      flash.now[:notice] = 'Thank you for your message. We will inquire you soon!'
    else
      flash.now[:error] = 'Cannot send message.'
      render :inquire
    end
  end

  def for_me
  end

  def careers
  end

  def academics
  end

  def schools
  end

  def programs
  end

  def student_life
  end

  def safe
  end

  def activities
  end
end
