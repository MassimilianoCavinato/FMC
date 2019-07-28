class StocazzoController < ActionController::API
  def stocazzo
    response = "stocazzo ricevuto"
    render text: response
  end
end
