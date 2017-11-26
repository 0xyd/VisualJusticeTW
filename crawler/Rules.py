'''
Rules.py is used to define the crawling rule for selenium spider.
'''

# 1. 監獄受刑人年齡分別
RULE_PRISONER_AGE = {
    'main_business': 'ctl00$cphMain$ctl42',
    'subject' : 'ctl00_cphMain_rltFieldGroup_0',
    'filter_1': {
        'crime_type': [
            # i==1: 普通刑法的統計; i==47: 特別刑法的統計
            'ctl00_cphMain_dltDimensionGroup_ctl00_tvwDimensionn' + str(i) + 'CheckBox' for i in range(1, 121)],
    },
    'filter_2': {
        'ages_range' : [
            # i==1: 14-18歲; i==10: 80歲以上
            'ctl00_cphMain_dltDimensionGroup_ctl01_tvwDimensionn' + str(i) + 'CheckBox' for i in range(1, 11)],
        'gender_type': [
            'ctl00_cphMain_dltDimensionGroup_ctl02_tvwDimensionn' + str (i) + 'CheckBox' for i in range(1,3)]
    }
}

# 2. 監獄受刑人前科情形
RULE_PRISONER_CRIME_RECORD = {
    'main_business': 'ctl00$cphMain$ctl42',
    'subject': 'ctl00_cphMain_rltFieldGroup_1',
    'filter_1': {
        'crime_type': [
            # i==1: 普通刑法的統計; i==47: 特別刑法的統計
            'ctl00_cphMain_dltDimensionGroup_ctl00_tvwDimensionn' + str(i) + 'CheckBox' for i in range(1, 121)],
    },
    'filter_2': {
        'crime_record': [
            # i == 2: 有前科, 包含再犯、累犯
            'ctl00_cphMain_dltDimensionGroup_ctl01_tvwDimensionn' + str(i) + 'CheckBox' for i in range(1, 5)
        ],
        'gender_type': [
            'ctl00_cphMain_dltDimensionGroup_ctl02_tvwDimensionn' + str (i) + 'CheckBox' for i in range(1,3)]
    }
}

# 3. 
