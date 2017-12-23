# 看見思法爬蟲文件說明

## 目錄
### 開發環境設定
### 爬蟲開發：法務部進階統計網爬蟲

## 開發環境設定
本專案為了走在時代的尖端，所以我們選擇Python 3+。



## 法務部進階統計網爬蟲

## 

## 使用Selenium + Headless Chrome 作為爬蟲
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