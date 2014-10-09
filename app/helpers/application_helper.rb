module ApplicationHelper
  include Mobvious::Rails::Helper

  def head
    render 'layouts/splash/head'
  end

  def scripts
    render 'layouts/splash/scripts'
  end

  def browsehappy
    render 'layouts/splash/browsehappy'
  end

  def device_test
    # Drop in controller#ation:
    # @device = request.env['mobvious.device_type']
    # Drop in corresponding view:
    # = device_test

    no_device = "What!? That's nil bro."
    if @device.nil?
      no_device
    else
      "#{@device}"
    end
  end
end
