from fastapi import FastAPI,Depends
import pandas as pd 
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from functions.data import Calculate
from functions.portfolio import Portfolio
from functions.optimize import Optimize

app = FastAPI()




app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Optimise(BaseModel):
    stocks: list
    target : float

@app.get('/{stock}')
def index(stock:str):
    cal = Calculate(stock)
    print(cal.fileName)
    price = cal.getPrice()
    returns = cal.getReturns()
    expectedReturn = cal.getExpectedReturn()
    dailyRisk = cal.getRisk()
    return {"returns":returns,"price":price,"expectedReturn": expectedReturn,"dailyRisk": dailyRisk}
    

@app.get('/stocks/portfolio')
def portfolio():
    portfolio = Portfolio()
    portRisk = portfolio.getPortfolioRisk()
    diverseRisk = portfolio.getDiversifyRisk()
    print(diverseRisk)
    return {"risks":portfolio.getIndvRisk(), "portRisk": portRisk,"diverseRisk":diverseRisk}



@app.post('/portfolio/optimize')
def optimize(request:Optimise):
    results = Optimize(request.stocks,request.target)
    return results.optimiseWeights()
