from MojSpider import Spider
from Rules import RULE_PRISONER_AGE, RULE_PRISONER_CRIME_RECORD


# Crawling the prinsoners' crime record stat 監獄在監受刑人人數(含性別)－依年齡別分（人）
def get_prinsoner_age_data(folder_name, report_type):
    for crime in RULE_PRISONER_CRIME_RECORD['filter_1']['crime_type'][99:]:
        spider = Spider()
        spider.select_business(RULE_PRISONER_CRIME_RECORD['main_business'])
        options = [ RULE_PRISONER_CRIME_RECORD['subject'] ]
        options.append(crime)
        ages_selection = RULE_PRISONER_CRIME_RECORD['filter_2']['crime_record']
        gender_type    = RULE_PRISONER_CRIME_RECORD['filter_2']['gender_type']
        options.extend(ages_selection)
        options.extend(gender_type)
        spider.select_options(options)
        spider.select_time_unit(report_type)
        spider.select_time_range(99, 106, 1, 9, report_type)
        spider.start_query()
        spider.take_snapshot(crime)
        file_name = '%s_mon.html' % crime
        if report_type == 'mon':
            f = open(folder_name + '/month/' + file_name, 'w')
            f.write(spider.access_html())
        elif report_type == 'year':
            f = open(folder_name + '/year/' + file_name, 'w')
            f.write(spider.access_html())
    


def main():
    # Crawling the prisoners' age stat
    # for crime in RULE_PRISONER_AGE['filter_1']['crime_type']:
    #     spider = Spider()
    #     spider.select_business(RULE_PRISONER_AGE['main_business'])
    #     options = [ RULE_PRISONER_AGE['subject'] ]
    #     options.append(crime)
    #     ages_selection = RULE_PRISONER_AGE['filter_2']['ages_range']
    #     gender_type    = RULE_PRISONER_AGE['filter_2']['gender_type']
    #     options.extend(ages_selection)
    #     options.extend(gender_type)
    #     spider.select_options(options)
    #     spider.select_time_unit()
    #     # spider.select_time_range()
    #     spider.start_query()
    #     spider.take_snapshot(crime)
    #     f = open('%s.html' % crime, 'w')
    #     f.write(spider.access_html())

    # Crawling the prinsoners' crime record stat 監獄在監受刑人人數(含性別)－依前科情形分（人)
    folder = '監獄在監受刑人人數(含性別)－依前科情形分（人）'
    get_prinsoner_age_data(folder, 'mon')
    # get_prinsoner_age_data(folder, 'year')

    # for crime in RULE_PRISONER_CRIME_RECORD['filter_1']['crime_type']:
    #     spider = Spider()
    #     spider.select_business(RULE_PRISONER_CRIME_RECORD['main_business'])
    #     options = [ RULE_PRISONER_CRIME_RECORD['subject'] ]
    #     options.append(crime)
    #     ages_selection = RULE_PRISONER_CRIME_RECORD['filter_2']['crime_record']
    #     gender_type    = RULE_PRISONER_CRIME_RECORD['filter_2']['gender_type']
    #     options.extend(ages_selection)
    #     options.extend(gender_type)
    #     spider.select_options(options)
    #     spider.select_time_unit('mon')
    #     spider.select_time_range(99, 106, 1, 9, 'mon')
    #     spider.start_query()
    #     spider.take_snapshot(crime)
    #     file_name = '%s_mon.html' % crime
    #     f = open(folder + '/' + file_name, 'w')
    #     f.write(spider.access_html())
    

if __name__ == '__main__':
    main()