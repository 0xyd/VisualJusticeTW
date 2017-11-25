# 看見思法開發文件
看見思法網站的開發文件，希望能夠無縫與開發者介接。

## 目錄


## 如何貢獻原始碼
1. Fork 看見思法專案
術前：
![](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/1.png)

術後：
！[](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/2.png)
2.  把你剛剛的專案Clone到你的本機
```bash
    git clone https://fork_repository.git
```
3. 修改你看不爽的地方
4. Commit程式碼到develop branch
```
    git push origin develop
```
5. 回到Fork出的專案頁面點擊Pull Request
![](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/3.png)

6. 點擊右側Pull Requests的按鈕
![](https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/develop/static/4.png)

7. Merge本地的develop branch到原專案的develop branch。

8. 等YD哥哥幫你Merge

## 資料清單彙整
警政署、法務部與司法院的資料統計
[資料清單](https://hackmd.io/AwDmDYHYFME5oLQDMCGAjcCAsAmNWEUVYkEBjaMpAEyTLTNjViA=?both)


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

#### Tabula
Tabula主要是為了處理政府大量釋出的Pdf資料轉換成機器可讀。

**安裝** <br>

在進入[Tabula](http://tabula.nerdpower.org/)官網後，就可以下載windows、Mac OS的安裝檔，如果是老手的話，也可以選擇Github手動安裝，而我是選擇直接download for Mac。

## 
