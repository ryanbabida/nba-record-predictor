import numpy as np 

def mse(w, features, target): 
	s = 0.0
	for i in range(len(features)): 
		s += (pow((np.dot(features[i], w) - target[i]), 2))
	s = s / (float(len(features) - 2))
	print(s)
	s = np.sqrt(s)
	return s

def predict(sample, w):
	return np.dot(sample, w)

def gradient_descent(a, w, x, y, m, num_iter): 
	for i in range(num_iter): 
		for j in range(len(x)):
			# Calculate Hypothesis
			h = np.dot(x[j], w)
			# Calculate Loss
			loss = h - y[j]
			# Calculate Cost
			# cost = np.sum(loss ** 2) / 2 * m
			grad = np.dot(x[j].T, loss) / m
			# Update Weight
			w = w - a * grad
	return w






