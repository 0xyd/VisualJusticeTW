import sys
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class Spider():

    def __init__(self):
        self.spider = webdriver.PhantomJS()
        self.spider.get('http://www.rjsd.moj.gov.tw/RJSDWEB/inquiry/InquireAdvance.aspx')

        pass

    def do_postback(self, command):
        # command = "javascript:__doPostBack('{}', '')".format(command)
        command = "__doPostBack('{}', '')".format(command)
        print('check command: {}'.format(command))
        self.spider.execute_script(command)

    def select_business(self, main_business):
        do_postback(self.spider, main_business)

    def select_option(self, options):
        for option in options:
            self.spider.find_element_by_id(option).click()

    def select_time(self, opt_name='year'):
        select_bar = self.spider.find_element_by_id('ctl00_cphMain_ddlQPeriod')
        options = select_bar.find_elements_by_css_selector('#ctl00_cphMain_ddlQPeriod option')
        if opt_name == 'year':
            options[1].click()
        elif opt_name == 'mon':
            options[0].click()
        else:
            options[2].click()

    def select_time_interval(spider):
        pass

def main():
    spider = webdriver.PhantomJS()
    spider.get('http://www.rjsd.moj.gov.tw/RJSDWEB/inquiry/InquireAdvance.aspx')
    sleep(3)
    select_business(spider, 'ctl00$cphMain$ctl42')
    sleep(3) 
    spider.get_screenshot_as_file('test.png')
    select_option(spider, 
        ['ctl00_cphMain_rltFieldGroup_0', 
        'ctl00_cphMain_dltDimensionGroup_ctl00_tvwDimensionn2CheckBox',
        'ctl00_cphMain_dltDimensionGroup_ctl01_tvwDimensionn1CheckBox',
        'ctl00_cphMain_dltDimensionGroup_ctl02_tvwDimensionn1CheckBox'])
    select_time(spider)
    do_postback(spider, 'ctl00$cphMain$btnQuery')
    sleep(3)
    
    
    

    # res = spider.find_element_by_id('ctl00_cphMain_panVaule')
    # do_postback(spider, 'ctl00$cphMain$ctl42')
    spider.close()


if __name__ == '__main__':
    main()
