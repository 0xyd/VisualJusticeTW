# 看見思法開發文件
看見思法網站的開發文件，希望能夠無縫與開發者介接。

## 目錄




## 資料清單彙整
警政署、法務部與司法院的資料統計
[資料清單](https://hackmd.io/AwDmDYHYFME5oLQDMCGAjcCAsAmNWEUVYkEBjaMpAEyTLTNjViA=?both)


## 使用Selenium + PhantomJS 作為爬蟲
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

#### PhantomJS
PhantomJS是一個Headless的瀏覽器引擎，所以執行時不會跳出瀏覽器顯示頁面。PhantomJS可以繞過網站對爬蟲的阻擋，當然缺點就是比較消耗資源...而且PhantomJS已經沒在維護了。

**Mac**<br>

```bash
    brew install phantomjs
```
**Linux**<br>

**Windows**<br>

#### Tabula
Tabula主要是為了處理政府大量釋出的Pdf資料轉換成機器可讀。

**安裝** <br>

在進入[Tabula](http://tabula.nerdpower.org/)官網後，就可以下載windows、Mac OS的安裝檔，如果是老手的話，也可以選擇Github手動安裝，而我是選擇直接download for Mac。

