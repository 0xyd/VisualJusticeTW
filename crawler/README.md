# 看見思法爬蟲文件說明

## 目錄
### Tabula 
### 開發環境設定
### 爬蟲開發：法務部進階統計網爬蟲

## Tabula

## 開發環境設定
本專案為了走在時代的尖端，所以我們選擇Python 3+。


## 法務部進階統計網爬蟲 (使用Selenium + Headless Chrome 作為爬蟲)
主要是為了處理法務部網站cookie的複雜問題所以採取下策 ><|||

### 環境架設與工具安裝

#### Python
目前使用Python版本為3+。

#### Selenium

**Mac**<br>
安裝Selenium建議是透過Brew安裝。
安裝homebrew的方式在[這裡](https://brew.sh)
```bash
    brew install selenium
```

**Linux**<br>

**Windows**<br>

#### Headless Chrome

**下載**<br>
請在[這裡](https://sites.google.com/a/chromium.org/chromedriver/downloads)Chrome Driver下載。

**設定**<br>
解壓縮檔案之後，將driver放到預設的路徑。目前在setting.py的設定為*./driver/chromedriver*
請自行建立driver目錄於service_crawler中，或者指定setting.py中Headless driver的路徑到解壓縮檔案的位置。


## 開始開發

### 爬蟲邏輯

爬蟲邏輯放在Rules.py，裡面的Rule如RULE_PRISONER_AGE(監獄受刑人年齡分別)、RULE_PRISONER_CRIME_RECORD(監獄受刑人前科情形)就代表針對哪一個項目的資料做操作。裡面的基本架構如以下範例
```python
{
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
```


屬性main_business指的就是圖的紅色部分，主要就是想查詢的資料集：
![Main Busines](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/main_business.png)

Main Business 的值可以用右鍵點擊檢查元素，如範例所示，右鍵點擊『入監』，在href中可以找到do_postback裡的值找到：
![](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/Main_Business_Detail.png)

**WARNING** Subject 與 Filter 對應的值，網頁會隨著點擊不同的連結而有變化，因此統一都是以『機關』作為進入點，比如說要找尋監獄的資料，就直接點擊監獄；然後再找對應的資料。

Subject 、Filter 1 與 Filter 2的對應欄位如下圖所示，主要功能就是選取資料集中想要的資料：
![Subject and Filter](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/Subject%26Filter.png)

Subject 對應的屬性值可以右鍵點擊對應元件，其對應的id就是屬性質：
![](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/Subject_Detail.png)

Filter 1 與 Filter 2也是一樣，右鍵選擇元件，屬性值可在id裡面找到：
![Filter 1](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/Filter_1_Detail.png)

![Filter 2](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/Filter_2_Detail.png)

### 開始撰寫法務部進階統計



```python

```

