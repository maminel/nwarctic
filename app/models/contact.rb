class Contact < MailForm::Base
  attribute :name,      :validate => true
  attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message
  attribute :nickname,  :captcha  => true
  attribute :adress
   attribute  :street_po
    attribute :city
    attribute :state
    attribute :zip
    attribute :telephone
   attribute  :email
    attribute :name_hs
    attribute :location_hs
    attribute :enrolled
    attribute :interest
    attribute :Eentrymonth 
    attribute :Eentryyear
    
   attribute :graduateyear
   

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