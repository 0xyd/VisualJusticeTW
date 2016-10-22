import re
import csv

'''
Merge two types of files: 
	The first is event data, the other is result stat data.
'''

if __name__ == '__main__':

	with open('../../events/FJU sexual assault/fju-keywords-result-google.csv', 'rt') as stat_file, \
		open('../../events/FJU sexual assault/events.csv', 'rt') as event_file, \
		open('../../events/FJU sexual assault/merged-result.csv', 'wt') as merged_file:

		event_reader = csv.reader(event_file, delimiter= ' ', quotechar='|')
		stat_reader = csv.reader(stat_file, delimiter= ' ', quotechar='|')
		merged_writer = csv.writer(merged_file, delimiter= ' ', quotechar='|')

		# Create the list of the events
		events = [ e.split(',') for e in event_file ]

		# Create the list of the stats
		stats  = [ s.split(',') for s in stat_file ]
		stats_header = stats.pop(0)

		# Write the header for the merged result
		merged_writer.writerow(
			[
			events[0][0], events[0][1], \
			stats_header[1], stats_header[2], \
			stats_header[3], stats_header[4] \
			])

		# 
		event_row_index = 1
		for stat in stats:

			merged_row = None

			for i in range(event_row_index, len(events)):

				if stat[0] == events[i][0]:
					merged_row = [ 
						events[i][0], events[i][1], stat[1], stat[2], stat[3], stat[4] 
					]
					event_row_index += 1

				else:
					merged_row = [ 
						events[i][0], ' ', stat[1], stat[2], stat[3], stat[4] 
					]

				merged_writer.writerow(merged_row)








					

			





