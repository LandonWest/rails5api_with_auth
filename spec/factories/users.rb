FactoryGirl.define do
  factory :user do
    email { Faker::Lorem.email }
    password 'password123'
    password_confirmation 'password123'
  end
end
