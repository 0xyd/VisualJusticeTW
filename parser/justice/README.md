# 法務部網站 爬梳

## 前置作業
1. 安裝python 套件
   * pip install requests
   * pip install beautifulsoup4
2. 熟悉一點 html

## 範例程式碼
開啟 paser_from_justice_web_raw_data.py
下方有三個變數
* source_link 要去的網站位置
* summary_element 找到涵括所有連結的最大元素的關鍵字
* p_class_element 每個連結的元素的關鍵字

依據不同年份的法務部資料網站對這三項變數做調整
確認無誤執行python 
`` python paser_from_justice_web_raw_data.py``

__注意__  您即將將此網站所有連結資料下載下來，請確認檔案存放位置
