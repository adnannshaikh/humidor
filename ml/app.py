from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

API_KEY = "BGUDBI75R8CXCNSC"

# ➡️ Fetch individual stock price
@app.get("/api/stocks/quote")
def get_stock_quote(symbol: str):
    url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={symbol}&apikey={API_KEY}"
    response = requests.get(url)
    data = response.json()

    if "Global Quote" not in data:
        return {"error": "Failed to fetch stock"}

    quote = data["Global Quote"]
    return {
        "symbol": quote["01. symbol"],
        "price": float(quote["05. price"]),
        "change_percent": quote["10. change percent"]
    }

# ➡️ AI Prediction
class PriceRequest(BaseModel):
    prices: list

@app.post("/predict")
def predict_trend(data: PriceRequest):
    prices = data.prices
    if len(prices) < 2:
        return {"suggestion": "Hold"}

    trend = prices[-1] - prices[0]
    percentage_change = (trend / prices[0]) * 100

    if percentage_change > 2:
        suggestion = "Buy"
    elif percentage_change < -2:
        suggestion = "Sell"
    else:
        suggestion = "Hold"

    return {"suggestion": suggestion}


@app.get("/api/stocks/history")
def get_stock_history(symbol: str = Query(...), timeframe: str = Query("1y")):
    function_map = {
        "1d": ("TIME_SERIES_INTRADAY", "5min"),
        "1mo": ("TIME_SERIES_DAILY", None),
        "6mo": ("TIME_SERIES_DAILY", None),
        "1y": ("TIME_SERIES_DAILY", None),
    }

    if timeframe not in function_map:
        return {"error": "Invalid timeframe"}

    function, interval = function_map[timeframe]
    url = f"https://www.alphavantage.co/query?function={function}&symbol={symbol}&apikey={API_KEY}"
    if interval:
        url += f"&interval={interval}&outputsize=compact"
    else:
        url += f"&outputsize=full"

    response = requests.get(url)
    data = response.json()

    time_series_key = (
        "Time Series (5min)" if "Time Series (5min)" in data else
        "Time Series (Daily)" if "Time Series (Daily)" in data else None
    )

    if not time_series_key:
        return {"error": "Failed to fetch stock history"}

    series = data[time_series_key]

    sorted_data = sorted(series.items())

    if timeframe == "1d":
        sorted_data = sorted_data[-70:]  # last ~6 hours of trading
    elif timeframe == "1mo":
        sorted_data = sorted_data[-22:]  # last 1 month (approx 22 trading days)
    elif timeframe == "6mo":
        sorted_data = sorted_data[-130:]  # last 6 months
    elif timeframe == "1y":
        sorted_data = sorted_data[-260:]  # last 1 year

    dates = [datetime.strptime(d[0], "%Y-%m-%d %H:%M:%S" if timeframe == "1d" else "%Y-%m-%d").strftime("%d-%b") for d in sorted_data]
    prices = [float(v["4. close"]) for _, v in sorted_data]

    return {"dates": dates, "prices": prices}

# ➡️ Fetch Nifty and BankNifty indexes
# @app.get("/api/indexes")
# def get_indexes():
#     try:
#         indexes = []

#         nifty_url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=^NSEI&apikey={API_KEY}"
#         nifty_res = requests.get(nifty_url).json()
#         if "Global Quote" in nifty_res:
#             quote = nifty_res["Global Quote"]
#             indexes.append({
#                 "symbol": "^NSEI",
#                 "price": float(quote["05. price"]),
#                 "changePercent": float(quote["10. change percent"].replace("%", ""))
#             })

#         banknifty_url = f"https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=^NSEBANK&apikey={API_KEY}"
#         banknifty_res = requests.get(banknifty_url).json()
#         if "Global Quote" in banknifty_res:
#             quote = banknifty_res["Global Quote"]
#             indexes.append({
#                 "symbol": "^NSEBANK",
#                 "price": float(quote["05. price"]),
#                 "changePercent": float(quote["10. change percent"].replace("%", ""))
#             })

#         return indexes
#     except Exception as e:
#         print("Error fetching indexes:", e)
#         return []
