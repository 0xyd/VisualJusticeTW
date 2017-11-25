import sys
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException 

# 20171010 Y.D.: This is used for debugging time_range_select function.
index = 1

class Spider():

    def __init__(self):
        self.spider = webdriver.PhantomJS()
        self.spider.set_window_position(1280, 800)
        self.spider.get('http://www.rjsd.moj.gov.tw/RJSDWEB/inquiry/InquireAdvance.aspx')
        sleep(3)

    def _do_postback(self, command):
        # command = "javascript:__doPostBack('{}', '')".format(command)
        command = "__doPostBack('{}', '')".format(command)
        print('check command: {}'.format(command))
        self.spider.execute_script(command)
        sleep(3)

    def select_business(self, main_business):
        self._do_postback(main_business)
        sleep(3)

    def select_options(self, options):
        for option in options:
            self.spider.find_element_by_id(option).click()

    def select_time_unit(self, opt_name='year'):
        select_bar = self.spider.find_element_by_id('ctl00_cphMain_ddlQPeriod')
        options = select_bar.find_elements_by_css_selector('#ctl00_cphMain_ddlQPeriod option')
        if opt_name == 'year_mon':
            options[2].click()
        elif opt_name == 'mon':
            options[0].click()
        else:
            options[1].click()
        sleep(3)

    # 20171010 Y.D.
    def select_time_range(self, start_year, end_year, start_month=1, end_month=12, opt_name='mon'):
        global index
        if opt_name == 'mon':
            base_year = 99
        else:
            base_year = 94

        begin_year_selector = self.spider.find_element_by_id('ctl00_cphMain_ddlQYearBegin')
        begin_years = begin_year_selector.find_elements_by_css_selector('option')
        begin_yr_index = start_year - base_year

        # Click year options
        try:
            begin_years[begin_yr_index].click()
            sleep(1)
            self.take_snapshot('begin_year_click_' + str(index) + '.png')
        except IndexError:
            if begin_yr_index < 0:
                print('Begin year should be set 民國 94 or later.')
            else:
                print('The begin latest year is 民國 %d' % (93+len(begin_years)))

        try:
            months = self.spider.find_elements_by_css_selector('#ctl00_cphMain_ddlQDateBegin > option')
            # begin_month_selector = self.spider.find_element_by_id('ctl00_cphMain_ddlQDateBegin')
            # months = self.spider.find_elements_by_css_selector('option')
            months[start_month-1].click()
            sleep(1)
            self.take_snapshot('start_month_click_' + str(index) + '.png')
        except NoSuchElementException as e:
            print('The Month elements are not available in begin field.')

        end_year_selector = self.spider.find_element_by_id('ctl00_cphMain_ddlQYearEnd')
        end_years = end_year_selector.find_elements_by_css_selector('option')
        end_yr_index = end_year - base_year
        try:
            end_years[end_yr_index].click()
            self.take_snapshot('end_year_click_' + str(index) + '.png')
            sleep(1)
        except IndexError:
            if end_yr_index < 0:
                print('End year should be set 民國 94 or later.')
            else:
                print('The end latest year is 民國 %d' % (93+len(end_years)))
            
        try:
            months = self.spider.find_elements_by_css_selector('#ctl00_cphMain_ddlQDateEnd > option')
            months[end_month-1].click()
            sleep(1)
            self.take_snapshot('end_month_click_' + str(index) + '.png')
        except NoSuchElementException as e:
            print('The Month elements are not available in end field.')
        
        index += 1

    def access_html(self):
        return self.spider.page_source

    def start_query(self):
        self._do_postback('ctl00$cphMain$btnQuery')
        sleep(3)

    def take_snapshot(self, name):
        self.spider.get_screenshot_as_file(name + '.png')


def main():
    spider = Spider()
    spider.select_business('ctl00$cphMain$ctl42')
    spider.select_option(
        ['ctl00_cphMain_rltFieldGroup_0', 
        'ctl00_cphMain_dltDimensionGroup_ctl00_tvwDimensionn2CheckBox',
        'ctl00_cphMain_dltDimensionGroup_ctl01_tvwDimensionn1CheckBox',
        'ctl00_cphMain_dltDimensionGroup_ctl02_tvwDimensionn1CheckBox']
    )
    spider.select_time_unit()
    spider.start_query()
    # spider.take_snapshot()


    # spider = webdriver.PhantomJS()
    # spider.get('http://www.rjsd.moj.gov.tw/RJSDWEB/inquiry/InquireAdvance.aspx')
    # sleep(3)
    # select_business(spider, 'ctl00$cphMain$ctl42')
    # sleep(3) 
    # spider.get_screenshot_as_file('test.png')
    # select_option(spider, 
    #     ['ctl00_cphMain_rltFieldGroup_0', 
    #     'ctl00_cphMain_dltDimensionGroup_ctl00_tvwDimensionn2CheckBox',
    #     'ctl00_cphMain_dltDimensionGroup_ctl01_tvwDimensionn1CheckBox',
    #     'ctl00_cphMain_dltDimensionGroup_ctl02_tvwDimensionn1CheckBox'])
    # select_time_unit(spider)
    # do_postback(spider, 'ctl00$cphMain$btnQuery')
    # sleep(3)
    
if __name__ == '__main__':
    main()
