from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf
from fastapi import Body
from pydantic import BaseModel

app = FastAPI()

# CORS middleware to allow React frontend to access FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (good for local dev)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stocks/quotes")
def get_stock_quotes(symbols: str):
    stocks_data = []
    symbol_list = symbols.split(",")

    for symbol in symbol_list:
        try:
            stock = yf.Ticker(symbol + ".NS")
            info = stock.info
            stocks_data.append({
                "symbol": symbol,
                "name": info.get("shortName", symbol),
                "price": info.get("regularMarketPrice"),
                "changePercent": info.get("regularMarketChangePercent"),
            })
        except Exception as e:
            print(f"Error fetching {symbol}: {e}")

    return stocks_data

@app.get("/stocks/quotes")
def get_stock_quotes(symbols: str):
    stocks_data = []
    symbol_list = symbols.split(",")

    for symbol in symbol_list:
        try:
            stock = yf.Ticker(symbol + ".NS")
            fast_info = stock.fast_info

            stocks_data.append({
                "symbol": symbol,
                "name": symbol,
                "price": fast_info.get("last_price", None),
                "changePercent": fast_info.get("regular_market_change_percent", None)
            })
        except Exception as e:
            print(f"Error fetching {symbol}: {e}")

    return stocks_data



class PriceRequest(BaseModel):
    prices: list

@app.post("/predict")
def predict_trend(data: PriceRequest):
    prices = data.prices

    if len(prices) < 2:
        return {"suggestion": "Hold"}

    # Calculate trend
    trend = prices[-1] - prices[0]
    percentage_change = (trend / prices[0]) * 100

    if percentage_change > 2:
        suggestion = "Buy"
    elif percentage_change < -2:
        suggestion = "Sell"
    else:
        suggestion = "Hold"

    return {"suggestion": suggestion}

