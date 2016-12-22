import glob

def load_data():
	teams = [   'Atlanta Hawks\n',
				'Boston Celtics\n',
				'Brooklyn Nets\n',
				'Charlotte Bobcats\n',
				'Charlotte Hornets\n',
				'Chicago Bulls\n',
				'Cleveland Cavaliers\n',
				'Dallas Mavericks\n',
				'Denver Nuggets\n',
				'Detroit Pistons\n',
				'Golden State Warriors\n',
				'Houston Rockets\n',
				'Indiana Pacers\n',
				'LA Clippers\n',
				'Los Angeles Clippers\n',
				'Los Angeles Lakers\n',
				'Memphis Grizzlies\n',
				'Miami Heat\n',
				'Milwaukee Bucks\n',
				'Minnesota Timberwolves\n',
				'New Jersey Nets\n',
				'New Orleans Hornets\n',
				'New Orleans Pelicans\n',
				'New York Knicks\n',
				'Oklahoma City Thunder\n',
				'Orlando Magic\n',
				'Philadelphia 76ers\n',
				'Phoenix Suns\n',
				'Portland Trail Blazers\n',
				'Sacramento Kings\n',
				'San Antonio Spurs\n',
				'Seattle SuperSonics\n',
				'Toronto Raptors\n',
				'Utah Jazz\n',
				'Vancouver Grizzlies\n',
				'Washington Bullets\n',
				'Washington Wizards\n',
	]
	# Create data file
	data = open('data/data.csv', 'w+')
	data.write("GP,W,L,W%,MIN,FGM,FGA,FG%,3PM,3PA,3P%,FTM,FTA,FT%,OREB,DREB,REB,AST,TOV,STL,BLK,BLKA,PF,PFD,PTS,+/-\n")
	data = open('data/data.csv', 'a+')

	# Push all the statistics from seasons 1997-1998 into one file for analysis
	for filename in glob.glob('data/' + '*-*.csv'):
		print(filename)
		inf = open(filename, 'r')
		for line in inf.readlines():
			if line not in teams and 'Team' not in line and line != '': 
				data.write(line)
		data.write('\n')

	data = np.genfromtxt('data/data.csv', dtype=float, delimiter=',', names=True)

	features = np.matrix([data['MIN'], data['FGM'], data['FGA'], data['FG'], data['3PM'], data['3PA'], 
				data['3P'], data['FTM'], data['FTA'], data['FT'], data['OREB'], data['DREB'], 
				data['REB'], data['AST'], data['TOV'], data['STL'], data['BLK'], data['BLKA'], 
				data['PF'], data['PFD'], data['PTS'], data['f0']]).T
	target = np.matrix(data['W_1'])
	target = target.T

	return features, target
