# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    
    # Class method for finding a user IFF we have correct username and password
    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil 
    end

    def password=(password)
        # Set temporary instance variable for password so we can validate length
        @password = password
        # Password_digest so we do not store plain-text passwords
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token 
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end

end
