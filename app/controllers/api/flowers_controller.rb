class Api::FlowersController < ApplicationController
  def index
    @flowers = Flower.all
    render json: @flowers
  end

  def create
    flower = Flower.new(flower_params)
    if flower.save
      render json: flower, status: :created
    else
      render json: { errors: flower.errors.full_messages }, status: :unprocessable_entity
    end
  end
def update
  flower = Flower.find_by(id: params[:id])
  
  if flower
    if flower.update(flower_params)
      render json: flower, status: :ok
    else
      render json: { errors: flower.errors.full_messages }, status: :unprocessable_entity
    end
  else
    render json: { error: "Flower not found" }, status: :not_found
  end
end
  private

  def flower_params
    params.require(:flower).permit(:name, :price, :description, :image_url, :purchased )
  end
end
