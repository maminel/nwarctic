class Contact < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname, captcha: true
  attribute :street_1
  attribute :street_2
  attribute :city
  attribute :state
  attribute :zip
  attribute :telephone
  attribute :email
  attribute :hs_name
  attribute :hs_location
  attribute :enrolled
  attribute :interest
  attribute :entry_month
  attribute :entry_year
  attribute :grad_year

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "My Contact Form",
      :to => "ahamdi.it@gmail.com",
      :from => %("#{name}" <#{email}>)
    }
  end
end
