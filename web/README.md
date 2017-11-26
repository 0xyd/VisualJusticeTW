# Visualize Justice 看見思法

視覺化的台灣司法資料([vizjust.tw](http://vizjust.tw))

<p align="center">
	<a href="http://vizjust.tw">
		<img src="https://raw.githubusercontent.com/yudazilian/VisualJusticeTW/gh-pages/src/JusticeVisualizingLOGO_3_400x400.png" />
	</a>
</p>


## 壹、宗旨

鑒於台灣司法資料之艱澀，民眾不易得知台灣司法體系之概況。故有志將台灣法務部公開之相關資料，使用前端工程與設計美學，建置兼具互動性與設計感之視覺化資料，讓全體國人能夠藉由一覽台灣法律事務處理之概況。開放政府資料是本世紀資訊的潮流，作者也自我期許本專案成為司法資料開放的重要一員。

在不久的將來，也要成立非政府組織，致力於司法資料的開放與透明，以保障人權並改革司法。

## 貳、科技

看見思法是一個藉著資料視覺化，將台灣司法系統從過去到現在的運作情形，以數據的角度切入並詮釋。目前網站的所有的程式碼，都分毫不少的放在github上，歡迎所有有興趣的人去研究或者是貢獻。

我們採用許多知名的前端技術，我們採用的資料視覺化工具為[d3js](https://d3js.org)，[Reactjs](https://facebook.github.io/react/)實行UI元件的實作，[Reduxjs](http://redux.js.org)則是App state概念的實踐。除此之外，我們也用[React-router](https://github.com/reactjs/react-router)使我們的Web App在沒有後端的支持下，能用異步的方式達到Routing的效果。

## 參、相關統計資料

法務統計指標如：

* 一、警察統計：各項警察偵破之犯罪統計資料。
* 二、檢察統計：檢察官受委偵查或主動偵查之案件數，終結案件與罪行定讞案件之數量。
* 三、司法統計：統計公法上須履行給付義務之事件數、金額以及逾期不履行之強制執行業務之數量與金額。
* 四、矯正統計：因判決定讞而移送矯正機關執行刑期之人數，假釋或期滿之收容人人數，各項犯罪之統計人數。
* 五、調查統計：調查局以偵辦槍械、毒品、資訊以及經濟犯罪最為知名。(即將推出。)
  
## 肆、更多的資訊：

* g0v tw hackath19n — 提案— 看見思法：屬於人民的視覺司法資料庫 [投影片](http://www.slideshare.net/YuDeLin2/g0v-63193288)
* g0v tw hackath19n — 提案— 看見思法：屬於人民的視覺司法資料庫 [youtube影片](https://www.youtube.com/watch?v=CSpus99gmno)
* 一秒搞懂政府網站創意競賽[英雄榜](https://wdc.tca.org.tw/index.html)


## 伍、資料來源

* [司法院統計處](http://www.judicial.gov.tw/juds/)
* [中華民國法務部](http://www.rjsd.moj.gov.tw/rjsdweb/)
* [內政部警政署](https://www.npa.gov.tw/NPAGip/wSite/np?ctNode=12552&mp=1)
* [國家圖書館](http://stat.ncl.edu.tw/hypage.cgi?HYPAGE=search/jnameBrowse.hpg&brow=v&jid=97251018&jn=法務部統計手冊)

# 看見思法 - 司法改革國是會議觀測站

## 壹、宗旨

看見思法國是會議觀測站要為大眾監測國是會議的最新動態。

## 貳、開發

國是會議觀測站與原本的看見思法原始碼都放在這個專案中，導致檔案結構略為凌亂，
以下向各位說明國是會議觀測站的檔案架構以及如何運作。

### 一、檔案結構
* jrcf.html - 國是會議觀測站首頁
* jrcf-commitee.html - 國是會議委員名單
* ./libs/
..* bootstrap - 只有Grid system的bootstrap
..* d3.js 
* ./components/JRConf - 國是會議網站前端的React Elements

### 二、在本地端運作

國是會議觀測站目前是純前端的專案，只要把專案Clone到你的標的目錄即可。

可以用python來啟動測試的server。

python -m http.server 3000
    

## 參、資料來源





