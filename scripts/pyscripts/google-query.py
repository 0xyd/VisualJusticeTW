from lxml import etree, html
from lxml.cssselect import CSSSelector
from datetime import date, timedelta

import io
import re
import time
import random
import urllib
import requests

GOOGLE_URL = 'https://www.google.com'

def get_search_stat(response):

	stat_reg  = re.compile('^[\u4e00-\u9fff]+\s(?P<result_stat>[0-9,]+)\s[\u4e00-\u9fff]+$')
	html_stat = html.fromstring(response.text).cssselect('#resultStats')
	search_stats = None

	if len(html_stat):
		# return stat_reg.match(html_stat[0].text_content()).group('result_stat')
		return html_stat[0].text_content()
	else:
		return 'There is no result.'

	# Get the search results object
	# search_stats = \
	# 	html.fromstring(response.text) \
	# 		.cssselect('#resultStats')[0] \
	# 			.text_content()

	# Return the search results value
	# return stat_reg.match(search_stats).group('result_stat')


def get_search_results(response):

	html_search_results = html.fromstring(response.text).cssselect('h3.r')

	search_results = []

	if len(html_search_results):
		# Collect the search results iteratively.
		# for sr in html_search_results.cssselect('h3.r'):
		for sr in html_search_results:
			s = dict()
			s['title'] = sr.text_content()
			for e in sr:
				s['url'] = GOOGLE_URL + e.attrib['href']
			search_results.append(s)

	return search_results

def get_nextpage_entry(response):

	# Get the next page's entry.
	next_obj = html.fromstring(response.text) \
		.cssselect('#foot table td:last-child > a')

	if len(next_obj):
		return next_obj[0].attrib['href']
	else:
		return None


def start_search(keywords, start_time, end_time):

	current_time = start_time
	search_results = []

	stop_time = [] # An array of pause time for crawler to pause.

	google_search = 'https://www.google.com.tw/search?q='
	search = { "allintitle" : keywords }
	
	# Collect the seach results from the beginning to the end.
	while current_time != end_time:

		search_response = requests.get(
			google_search + urllib.parse.urlencode(search).replace('=', ':') + \
			'&source=hp&tbs=cdr%3A1%2C' + \
			'cd_min%3A' + \
			str(current_time.month) + '%2F' + str(current_time.day) + '%2F' + str(current_time.year) + \
			'%2Ccd_max%3A' + \
			str(current_time.month) + '%2F' + str(current_time.day) + '%2F' + str(current_time.year) + '&tbm=')

		# Print out the search results
		print(google_search + urllib.parse.urlencode(search).replace('=', ':') + \
			'&source=hp&tbs=cdr%3A1%2C' + \
			'cd_min%3A' + \
			str(current_time.month) + '%2F' + str(current_time.day) + '%2F' + str(current_time.year) + \
			'%2Ccd_max%3A' + \
			str(current_time.month) + '%2F' + str(current_time.day) + '%2F' + str(current_time.year) + '&tbm=')

		# Print out the status code for testing of the first search entry
		print(search_response.status_code)

		# Print out the search result of the day.
		print('-----' + str(current_time.year) + \
				'-' + str(current_time.month) + \
				'-' + str(current_time.day) + \
				'-----')

		# Get the number of total search results
		print(get_search_stat(search_response))

		# Categorizing the search result with date.
		result = { 
			'time': \
				str(current_time.year) + '/'  + \
				str(current_time.month) + '/' + \
				str(current_time.day) ,
			'results': []
		}

		stop_time = make_random_stop_time(fibonacci(10))

		# Collect the links of search results
		while search_response.status_code == 200:

			result['results'] += get_search_results(search_response)

			# search_results += result
			print(result['results'])

			# To check if the next page available.
			if get_nextpage_entry(search_response):

				# Clear the cookies
				requests.session().cookies.clear()

				print('----- Sleeping -----')
				time.sleep(stop_time.pop())
				print('----- Crawler awaken -----')

				# Update the to next search entry point
				search_response = requests.get(GOOGLE_URL+get_nextpage_entry(search_response))
			else:
				print('The search results are all collected completely')
				break

			print(search_response.status_code)

		current_time += timedelta(days=1)

		search_results.append(result)
	
	# print out the search results for testing
	print(search_results)

# Generate a fibonacci serial result for random stop.
def fibonacci(n):

	serial = [1, 1] # The serial for storing fibonacci result

	for i in range(2, n):
		serial.append(serial[i-2] + serial[i-1])

	return serial

# Randomizing the number array
def make_random_stop_time(numbers):

	for index, number in enumerate(numbers):
		if number > 10:
			numbers[index] = random.uniform(0, number*0.1)
		else:
			numbers[index] = random.uniform(0, number*0.1)

	return numbers


if __name__ == '__main__':

	print('=====Start Search setting=====')
	input_keywords = input('Please enter the keywords: ')

	print('=====Enter the start date=====')
	input_year  = int(input('Please enter the year: '))
	input_month = int(input('Please enter the month: '))
	input_date  = int(input('Please enter the date : '))

	start_date = date(year=input_year, month=input_month, day=input_date)

	print('=====Enter the end date=====')
	input_year_2  = int(input('Please end the year: '))
	input_month_2 = int(input('Please end the month: '))
	input_date_2  = int(input('Please end the date : '))

	end_date = date(year=input_year_2, month=input_month_2, day=input_date_2)

	start_search(input_keywords, start_date, end_date)

	# print(make_random_stop_time(fibonacci(10)));

	
