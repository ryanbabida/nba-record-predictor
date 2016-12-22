import numpy as np 

x = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 5, 4, 3, 6, 8, 6, 9, 5, 4, 6, 7, 8])
y = np.array([1, 2, 2, 4, 5, 6, 7, 6, 8, 9,  1, 5, 6, 7, 8, 5, 6, 8, 5, 6, 2, 6, 7])

w = np.array([0.0, 0.0])


def error(w, x, y): 
  pred = w[0] + w[1] * x
  return pred - y

def grad_descent(a, w, x, y, err): 
	w[0] = w[0] - a * err
	w[1] = w[1] - a * err * x
	print(w)
	return w

def score(w, x, y): 
	err = 0
	for i in range(len(x)): 
		pred = w[0] + w[1] * x[i]
		err += abs(pred - y[i])
	return err / len(x)

def predict(w, x_sample): 
	return w[0] + w[1] * x_sample


for i in range(len(x)): 
	err = error(w, x[i], y[i])
	w = grad_descent(0.01, w, x[i], y[i], err)
	# based on this error, I update the weights

print(score(w, x, y))
