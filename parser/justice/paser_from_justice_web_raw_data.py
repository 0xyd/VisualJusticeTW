# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import requests


source_link = 'http://www.judicial.gov.tw/juds/year104/'
summary_element = "網頁主要部份：第一直欄為分隔線；第二直欄為本章節的內文；第三直欄為分隔線"
p_class_element = "ca03"
r = requests.get(source_link+"contents_table_ch.htm")
contents =  r.content
soup = BeautifulSoup(contents, "lxml")
web_table = soup.find(summary=summary_element).find_all('p',{ "class" : p_class_element})
for element in web_table:
    link = element.find('a').get('href')
    r = requests.get(source_link+link,stream=True)
    with open(element.get_text().strip()+'.pdf', 'wb') as f:
        for chunk in r.iter_content(chunk_size=1024): 
            if chunk: # filter out keep-alive new chunks
                f.write(chunk)
                #f.flush() commented by recommendation from J.F.Sebastian
 