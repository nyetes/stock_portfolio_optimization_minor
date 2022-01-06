import pandas as pd 
import numpy as np

class Calculate:
    def __init__(self,fileName):
        print('hello fuker')
        self.fileName = fileName + '.csv'
        self.data = pd.read_csv(f'./csv/{self.fileName}')
        self.data['Date'] = pd.to_datetime(self.data['Date'])
        self.data['price_t-1'] =  self.data['Close'].shift(1)
        self.data['returns'] = self.data['returns'] = (self.data['Close'] -  self.data['price_t-1'])/self.data['price_t-1']
        self.data['returns'] = self.data['returns'].fillna(0)

    
    def getPrice(self):
        # data = pd.read_csv(f'./csv/{self.fileName}')
        # self.data = self.data[['Date','Adj Close']]
        # return data.to_dict(orient="list")
        price = dict(zip(self.data['Date'], self.data['Close']))
        return price
    
    def getReturns(self):
        # data = pd.read_csv(f'./csv/{self.fileName}')
        # self.data =   self.data[['Date','Adj Close']]
        # self.data['price_t-1'] =  self.data['Close'].shift(1)
        # self.data['returns'] = (self.data['Close'] -  self.data['price_t-1'])/self.data['price_t-1']
        # data = data.round({'returns': 4})
        self.data['returns'] = self.data['returns'].fillna(0)
        returns = dict(zip(self.data['Date'],self.data['returns']))
        return returns 

    def getExpectedReturn(self):
        # self.data['returns'] = (self.data['Close'] -  self.data['price_t-1'])/self.data['price_t-1']
        expectedReturn = self.data['returns'].mean()
        return expectedReturn
    
    def getRisk(self):
        variance = np.var(self.data['returns'],ddof =1)
        std_deviation = np.sqrt(variance)
        return std_deviation


