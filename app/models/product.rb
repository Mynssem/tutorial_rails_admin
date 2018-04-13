class Product < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  enum status: [:active, :inactive]
  has_many :product_quantities
end
