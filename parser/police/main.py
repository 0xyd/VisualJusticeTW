##
from parse_xls import get_schema, proc_sheet
from os.path import basename
import xlrd

li = []
fi = 'rawdata/85-105年暴力犯罪統計.xls'
book = xlrd.open_workbook(fi)
topic = '暴力犯罪統計'

for sht in book.sheets():
    name = sht.name
    schema = get_schema(topic, name)
    data = proc_sheet(sht, **schema)
    data.name = name
    fi = 'data/{}.{}.csv'.format(basename(fi).split('.')[0], name)
    data.to_csv(fi, sep=',', index=False)

##
li = []
fi = 'rawdata/85-105年竊盜統計.xls'
book = xlrd.open_workbook(fi)
topic = '竊盜統計'
for sht in book.sheets():
    name = sht.name
    schema = get_schema(topic, name)
    data = proc_sheet(sht, **schema)
    data.name = name
    fi = 'data/{}.{}.csv'.format(basename(fi).split('.')[0], name)
    data.to_csv(fi, sep=',', index=False)


##
# fi = 'data/85-104年與105年各縣市刑事案件發生數、破獲數及嫌疑犯人數－按案類別.xls'
# book = xlrd.open_workbook(fi)


##
