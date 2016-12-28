from data_cleaning import *
from grad_descent import *
from ols import *

print('Training:')
features, target = load_data()

b = ols(features, target)

# print(b)

# for i in range(len(features)): 
# 	print(predict(features[i], b), target[i])

w = gradient_descent(0.02, features, target, features.shape[0], 500)
print(w)
print(mse(w, features, target))

features, target = load_test()
for i in range(len(w)): 
	print(w[i], b[i])
for i in range(len(features)): 
	print(predict(features[i], w), target[i])

print(mse(w, features, target))