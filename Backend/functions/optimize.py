import numpy as np 
import pandas as pd 
from scipy.optimize import minimize 


class Optimize:
    def __init__(self,stocks,target):
        self.data = pd.read_csv('./csv/TenStocks.csv')
        self.data.set_index('Date',inplace=True)
        self.data = self.data[stocks]
        self.target = target
        self.stocks = stocks
        print(self.target)
        self.dataReturns = self.data.pct_change(1).dropna()
        print(self.dataReturns)

    
    
    
    def optimiseWeights(self):
        def getPortReturns(weights):
            exp_port_returns =np.dot(np.transpose(weights),self.dataReturns.mean()) * 250
            return exp_port_returns
        
        numOfStocks = len(self.dataReturns.columns)
        print(numOfStocks)
        initWeights = [1/numOfStocks] * numOfStocks
        print(initWeights)
        print(getPortReturns(initWeights))
        bounds = tuple((0,1) for i in range(numOfStocks))
        print(bounds)
        cons = ({'type':'eq','fun':lambda w : np.sum(w)-1},{'type':'eq','fun': lambda x: x.dot(self.dataReturns.mean())*250 - self.target})
        results = minimize(fun=getPortReturns,x0=initWeights,bounds=bounds,constraints=cons)
        print(results)
        if results['success']:
            optimisedWeights = pd.DataFrame(results['x'])
            optimisedWeights.index = self.dataReturns.columns
            return {"weights":optimisedWeights[0],"success":True,"tickers":self.stocks}
        return {"success":False, "weights":[],"tickers":self.stocks}
