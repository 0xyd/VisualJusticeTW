import json
from collections import OrderedDict as ODict

if __name__ == '__main__':
	

	new_jsons = {
		'title': '',
		'events': []
	}

	keys = {
		"start_date": [
        	"year",
        	"month",
        	"day",
        	"hour",
        	"minute",
        	"second",
        	"millisecond",
        	"format",
        	"display_text"
    	],
    	"end_date": [                 
    	    "year",
    	    "month",
    	    "day",
    	    "hour",
    	    "minute",
    	    "second",
    	    "millisecond",
    	    "format",
    	    "display_text",
    	],
    	"location": [       
    	    "icon",
    	    "lat",
    	    "lon",
    	    "line",
    	    "name",
    	    "zoom",
    	],
    	"media": [
    	    "caption",
    	    "credit",
    	    "url",
    	    "thumbnail",
    	],
    	"text": [
    	    "headline",
    	    "text"
    	],
    	"unique_id": [

    	]         
	}

	original_json = json.load(open('../../special_prosecute.json', 'r', encoding='utf-8'))

	print(len(original_json))

	# Pop out the first json object which is the title slide.
	title_slide = original_json.pop(0)

	# Set up the title slide
	new_jsons['title'] = {
		'media': {
			'url': title_slide['Media'],
			'caption': title_slide['Media Caption'],
			'credit' : title_slide['Media Credit'],
			'thumbnail' : title_slide['Media Thumbnail']
		},
		"text": {
			'headline': title_slide['Headline'],
			'text': title_slide['Text']
		}
	}

	for oj in original_json:

		new_json = {}

		for k in keys:

			if k == 'start_date':

				new_json[k] = {
					"year": oj['Year'],
        			"month": oj['Month'],
        			"day": oj['Day'],
        			"hour": "",
        			"minute": "",
        			"second": "",
       				"millisecond": "",
        			"format": "",
        			"display_text": ""
				}

			elif k == 'end_date':

				new_json[k] = {
					"year": oj['End Year'],
        			"month": oj['End Month'],
        			"day": oj['End Day'],
        			"hour": "",
        			"minute": "",
        			"second": "",
       				"millisecond": "",
        			"format": "",
        			"display_text": ""
				}

			elif k == 'text':

				new_json[k] = {
					'headline': oj['Headline'],
					'text': oj['Text']
				}

			elif k == 'media':

				new_json[k] = {
					'url': oj['Media'],
					'caption': oj['Media Caption'],
					'credit' : oj['Media Credit'],
					'thumbnail' : oj['Media Thumbnail']
				}

		# Append the event
		new_jsons['events'].append(new_json)

	# Output the available json
	json.dump(
		new_jsons,
		open('../../timeline_special_prosecute.json', 'w', encoding='utf-8'),
		ensure_ascii=False,
		indent=4
		)


