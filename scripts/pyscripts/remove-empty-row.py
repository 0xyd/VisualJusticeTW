import re
import csv

FILES = [
	# {
	# 	'name': '',
	# 	'path': '../../events/FJU sexual assault/受害女學生2015-6-272016-10-16Test.csv',
	# 	'output': '../../events/FJU sexual assault/受害女學生2015-6-27_2016-10-16Output.csv'
	# },
	# {
	# 	'name': '',
	# 	'path': '../../events/FJU sexual assault/王同學2015-6-27_2016-10-15.csv',
	# 	'output': '../../events/FJU sexual assault/王同學2015-6-27_2016-10-16Output.csv'
	# },
	# {
	# 	'name': '',
	# 	'path': '../../events/FJU sexual assault/性侵2015-6-272016-10-15.csv',
	# 	'output': '../../events/FJU sexual assault/性侵2015-6-27_2016-10-16Output.csv'
	# }
]

if __name__ == '__main__':

	for file in FILES:
	
		with open(file['path'], 'rt', encoding='big5') as infile, \
			open(file['output'], 'wt', encoding='utf-8') as outfile: 

			f_reader = csv.reader(infile, delimiter= ' ', quotechar='|')
			f_writer = csv.writer(outfile, delimiter= ' ', quotechar='|')

			for row in f_reader:

				if len(row) > 0:
					
					f_writer.writerow(row)

			







