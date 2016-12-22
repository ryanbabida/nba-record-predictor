import numpy as np 
from sklearn.preprocessing import normalize
from gradient_descent import *


data = np.genfromtxt('data/data.csv', dtype=float, delimiter=',', names=True)

features = np.matrix([data['MIN'], data['FGM'], data['FGA'], data['FG'], data['3PM'], data['3PA'], 
			data['3P'], data['FTM'], data['FTA'], data['FT'], data['OREB'], data['DREB'], 
			data['REB'], data['AST'], data['TOV'], data['STL'], data['BLK'], data['BLKA'], 
			data['PF'], data['PFD'], data['PTS'], data['f0']]).T
target = np.matrix(data['W_1'])
target = target.T


w = np.matrix(features.shape[1] * [1.0]).T
w = gradient_descent(0.0001, w, features, target, features.shape[0], 3000)

