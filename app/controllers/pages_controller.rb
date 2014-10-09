class PagesController < ApplicationController
  layout 'pages/pages_layout'

  def about
  end

  def contact
  end

  def design
    @device = request.env['mobvious.device_type']
  end
end
