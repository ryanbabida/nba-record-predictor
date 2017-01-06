from data_processing.data_cleaning import *
from data_processing.grad_descent import *
from data_processing.ols import *
import numpy as np
import sys, os

os.chdir('data_processing')
features, target, names = load_data()
b = ols(features, target)
print(b)

print(mse(b, features, target))

w = gradient_descent(0.02, features, target, features.shape[0], 250)
print(w)

print(mse(w, features, target))



# w = gradient_descent(0.02, features, target, features.shape[0], 500)
# print(w)
# print(w)
# sys.stdout.flush()
# print(mse(w, features, target))

features, target, names = load_test()
for i in range(len(w)): 
	print(w[i], b[i])

print('Testing: ')
for i in range(len(features)): 
	print(predict(features[i], b), target[i])

print('Testing: ')
for i in range(len(features)): 
	print(predict(features[i], w), target[i])

print(mse(w, features, target))