import pandas as pd 
import numpy as np 


class Portfolio:
    def __init__(self):
        self.data = pd.read_csv('./csv/TenStocks.csv')
        self.data['Date'] = pd.to_datetime(self.data['Date'])
        self.data.set_index('Date', inplace=True)

    def getIndvRisk(self):
        returns_data = self.data.pct_change(1)
        num_stocks = 10
        weights = [1/num_stocks]*num_stocks
        indv_risks = np.std(returns_data) * np.sqrt(250)
        return indv_risks
    
    def getPortfolioRisk(self):
        returns_data = self.data.pct_change(1)
        vcv_matrix = returns_data.cov()
        num_stocks = 10
        weights = [1/num_stocks]*num_stocks
        variance = np.dot(np.transpose(weights),np.dot(vcv_matrix,weights))
        risk = np.sqrt(variance)
        return risk
    
    def getDiversifyRisk(self):
        returns_data = self.data.pct_change(1)
        tickers = list(returns_data.columns)
        portfolios = []
        for i in range(1, len(tickers)+1):
            portfolios.append(tickers[0:i])
        portfolio_risks = []
        for port in portfolios:
            df = returns_data[port]
            num_of_stocks = len(df.columns)
            weights = [1/num_of_stocks] * num_of_stocks
            vcv_p = df.cov()
            var_p = np.dot(np.transpose(weights),np.dot(vcv_p,weights))
            sd_p = np.sqrt(var_p)
            sd_p_annual = sd_p * np.sqrt(250)
            portfolio_risks.append(sd_p_annual)
        return portfolio_risks




