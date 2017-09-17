from lxml import html

import re
import sys
import getopt
import urllib
import requests

def requests_statnumber(response):

	stat_reg  = re.compile('^[\u4e00-\u9fff]+\s(?P<result_stat>[0-9,]+)\s[\u4e00-\u9fff]+$')
	html_stat = html.fromstring(response.text).cssselect('#resultStats')
	search_stats = None

	if len(html_stat):
		# return stat_reg.match(html_stat[0].text_content()).group('result_stat')
		print(html_stat[0].text_content())
		return html_stat[0].text_content()
	else:
		print('There is no result.')
		return 'There is no result.'


def main(argv):

	year = None
	month = None
	date  = None
	search = None
	google_search = 'https://www.google.com.tw/search?q='

	try:
		opts, args = getopt.getopt(argv, 'hk:y:m:d', ['keyword=', 'year', 'month', 'date'])
	except getopt.GetoptError:
		print('google-query-result-stat.py -k <keyword> -y <year> -m <month> -d <date>')
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print('google-query-result-stat.py -k <keyword> -y <year> -m <month> -d <date>')

		elif opt in ('-k', '--keyword'):
			search = { "allintitle" : arg }

		elif opt in ('-y', '--year'):
			year = arg

		elif opt in ('-m', '--month'):
			month = arg

		elif opt in ('-d', '--date'):
			date = arg

	search_response = requests.get(
		google_search + urllib.parse.urlencode(search).replace('=', ':') + \
		'&source=hp&tbs=cdr%3A1%2C' + \
		'cd_min%3A' + \
		str(month) + '%2F' + str(date) + '%2F' + str(year) + \
		'%2Ccd_max%3A' + \
		str(month) + '%2F' + str(date) + '%2F' + str(year) + '&tbm=')

	print(google_search + urllib.parse.urlencode(search).replace('=', ':') + \
		'&source=hp&tbs=cdr%3A1%2C' + \
		'cd_min%3A' + \
		str(month) + '%2F' + str(date) + '%2F' + str(year) + \
		'%2Ccd_max%3A' + \
		str(month) + '%2F' + str(date) + '%2F' + str(year) + '&tbm=')	

	print('status_code: ', search_response.status_code)

	requests_statnumber(search_response)

if __name__ == '__main__':

	main(sys.argv[1:])