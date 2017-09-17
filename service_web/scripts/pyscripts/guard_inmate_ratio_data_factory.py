import json

if __name__ == '__main__':

	new_json = None

	with open('../../correction/104-security-ratio.json', encoding='utf8') as data:

		json_data = json.loads(data.read())
		
		for i, d in enumerate(json_data):

			json_data[i]['超收率'] = d['收容人數'] / d['矯正機關法定容額'] - 1
			json_data[i]['戒護人力比'] = d['收容人數'] / d['總戒護人力']
			
		new_json = json_data

	with open('../../correction/_1.json', 'w', encoding='utf-8') as out_json:
		
		json.dump(new_json, out_json, ensure_ascii=False) 

	# Calculate the national average.
	total_sum = 0
	for i, d in enumerate(json_data):
		total_sum += json_data[i]['戒護人力比']
	print(total_sum / len(json_data))

	# Calculate the prisons' average
	prison_sum = 0
	prison_number = 0
	for i, d in enumerate(json_data):
		if json_data[i]['矯正機關類型'] == '監獄':
			print(json_data[i]['矯正機關名稱'])
			prison_sum += json_data[i]['戒護人力比']
			prison_number += 1
	print('prison: ', prison_sum / prison_number)
	print('=====================================')
	# Calculate the detention center
	detention_sum = 0
	detention_number = 0
	for i, d in enumerate(json_data):
		if json_data[i]['矯正機關類型'] == '看守所':
			print(json_data[i]['矯正機關名稱'])
			detention_sum += json_data[i]['戒護人力比']
			detention_number += 1
	print('detention: ', detention_sum / detention_number)
	print('=====================================')

	# Calculate the rehab
	rehab_sum = 0
	rehab_number = 0
	for i, d in enumerate(json_data):
		if json_data[i]['矯正機關類型'] == '戒治所':
			print(json_data[i]['矯正機關名稱'])
			rehab_sum += json_data[i]['戒護人力比']
			rehab_number += 1
	print('rehab: ' ,rehab_sum / rehab_number)
	print('=====================================')

	# Calculate the teenage
	teen_sum = 0
	teen_number = 0
	for i, d in enumerate(json_data):
		if json_data[i]['矯正機關類型'] == '少年觀護所' or \
		json_data[i]['矯正機關類型'] =='矯正學校' or \
		json_data[i]['矯正機關類型'] =='少年輔育院':
			print(json_data[i]['矯正機關名稱'])
			teen_sum += json_data[i]['戒護人力比']
			teen_number += 1
	print('teen: ' ,teen_sum / teen_number)




