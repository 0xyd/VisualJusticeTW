'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}} /* ***** Import Libraries ***** */var Re=Redux,RR=ReactRouter,RRd=ReactRedux; /* ***** The Immutables ***** */var Map=Immutable.Map,List=Immutable.List; /* ***** Global Variables ***** */ // Should be very 
// window.isLocal = 
// 	document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;
window.isLocal=document.URL.match(/127.0.0.1/)?true:false; // window.isLocal = false;
// To access the remove csv sources.
window.query='&tqx=out:csv';window.googleSheet='https://spreadsheets.google.com/tq?'; /* States for different topic */ /*
	Properties:
		dataset: the name of the dataset
		extl: 
			the data is not included in the original dataset which
			should be called externally.
		intl: 
			the data chosen from the dataset for further explanation or operations.
			header: Reserved for future.
*/var DataFilterStateTree={state:Map() // State of Police Data Selector 
.set('police',List([{dataset:'竊盜案件',availableChartTypes:['直方圖'], // '趨勢圖'
content:{data:[{name:'合計發生件數',topics:[[{name:'案件總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'合計發生件數',headers:['合計發生件數']}},{name:'案件種類',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['重大竊盜發生件數','普通竊盜發生件數','汽車竊盜發生件數','機車竊盜發生件數']}},{name:'案件種類百分比',axes:{x:'民國',y:'案件百分比'},extl:{headers:null},intl:{header:'',headers:['重大竊盜發生件數','普通竊盜發生件數','汽車竊盜發生件數','機車竊盜發生件數']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}},{name:'破獲率',axes:{x:'民國',y:'百分比'}}]]},{name:'汽機車竊盜案件',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['汽車竊盜發生件數','機車竊盜發生件數'],mHeaders:['汽車竊盜發生件數','機車竊盜發生件數']}},{name:'汽機車案件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['汽車竊盜發生件數','機車竊盜發生件數']}},{name:'汽機車案件數百分比',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['汽車竊盜發生件數','機車竊盜發生件數']}},{name:'汽車竊盜發生件數',axes:{x:'民國',y:'案件數'},extl:{headers:null,url:null},intl:{header:'', // headers: ['汽車竊盜發生件數'],
mHeaders:['汽車竊盜發生件數']}},{name:'汽車竊盜案嫌疑犯人數',axes:{x:'民國',y:'人數'},extl:{headers:null,url:null},intl:{header:'',headers:['汽車竊盜嫌疑犯人數']}},{name:'汽車竊盜破獲與否件數',axes:{x:'民國',y:'案件數'},extl:{headers:null,url:null},intl:{header:'',headers:['汽車竊盜破獲件數','汽車竊盜尚未破獲件數']}},{name:'汽車竊盜案破獲率',axes:{x:'民國',y:'破獲率'},extl:{headers:null,url:null},intl:{header:'',headers:['汽車竊盜破獲件數','汽車竊盜尚未破獲件數']}},{name:'機車竊盜案件數',axes:{x:'民國',y:'案件數'},extl:{headers:null,url:null},intl:{header:'',headers:['機車竊盜發生件數']}},{name:'機車竊盜嫌疑犯人數',axes:{x:'民國',y:'人數'},extl:{headers:null,url:null},intl:{header:'',headers:['機車竊盜嫌疑犯人數']}},{name:'機車竊盜破獲與否件數',axes:{x:'民國',y:'案件數'},extl:{headers:null,url:null},intl:{header:'',headers:['機車竊盜破獲件數','機車竊盜尚未破獲件數']}},{name:'機車竊盜案破獲率',axes:{x:'民國',y:'破獲率'},extl:{headers:null},intl:{header:'',headers:['機車竊盜破獲率']}}],[]]},{name:'非汽機車竊盜發生件數',topics:[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',mHeaders:['重大竊盜發生件數','普通竊盜發生件數']}},{name:'重大竊盜案件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['重大竊盜發生件數']}},{name:'重大竊盜嫌疑犯人數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{header:'',headers:['重大竊盜嫌疑犯人數']}},{name:'重大竊盜破獲與否件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['重大竊盜破獲件數','重大竊盜尚未破獲件數']}},{name:'重大竊盜案破獲率',axes:{x:'民國',y:'破獲率'},extl:{headers:null},intl:{header:'',headers:['重大竊盜破獲率']}},{name:'普通竊盜案件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['普通竊盜發生件數']}},{name:'普通竊盜嫌疑犯人數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{header:'',headers:['普通竊盜嫌疑犯人數']}},{name:'普通竊盜破獲與否件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:'',headers:['普通竊盜破獲件數','普通竊盜尚未破獲件數']}},{name:'普通竊盜案破獲率',axes:{x:'民國',y:'破獲率'},extl:{headers:null},intl:{header:'',headers:['普通竊盜破獲率']}}]}]}},{dataset:'暴力犯罪案件',availableChartTypes:['直方圖'], // '趨勢圖'
content:{data:[{name:'故意殺人發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}, // Next version
// [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
{name:'擄人勒贖發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}, // [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
{name:'強盜發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'搶奪發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}, // [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
{name:'重傷害發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}, // [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
{name:'恐嚇取財發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}, // [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
{name:'強制性交發生件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{header:''}}]]}]}}])) // State of Prosecution Data Selector 
. // [
// 	{
// 		name: '趨勢',
// 		axes: {
// 			x: '民國',
// 			y: '人數'
// 		}
// 	}
// ]
// Collapsed 毒品案件
// {
// 	dataset: '毒品案件',
// 	availableChartTypes: [
// 		'直方圖',
// 		'趨勢圖'
// 	],
// 	content: {
// 		data: [
// 			{
// 				name: '嫌疑犯人數',
// 				topics: [
// 					[
// 						{
// 							name: '總數',
// 							axes: {
// 								x: '民國',
// 								y: '人數'
// 							},
// 							extl: {
// 								headers: null
// 							},
// 							intl: {
// 								header: '',
// 							}
// 						}
// 					],
// 					[
// 						{
// 							name: '趨勢',
// 							axes: {
// 								x: '民國',
// 								y: '人數'
// 							}
// 						}
// 					]
// 				]
// 			},
// 			{
// 				name: '查獲第一級毒品數',
// 				topics: [
// 					[
// 						{
// 							name: '總數',
// 							axes: {
// 								x: '民國',
// 								y: '毒品數'
// 							},
// 							extl: {
// 								headers: null
// 							},
// 							intl: {
// 								header: '',
// 							}
// 						}, 
// 						{
// 							name: '相較他級毒品'
// 						}
// 					],
// 					[
// 						{
// 							name: '趨勢',
// 							axes: {
// 								x: '民國',
// 								y: '人數'
// 							},
// 							extl: {
// 								headers: null
// 							},
// 							intl: {
// 								header: '',
// 							}
// 						}
// 					]
// 				]
// 			},
// 			{
// 				name: '查獲第二級毒品數',
// 				topics: [
// 					[
// 						{
// 							name: '總數',
// 							axes: {
// 								x: '民國',
// 								y: '毒品數'
// 							},
// 							extl: {
// 								headers: null
// 							},
// 							intl: {
// 								header: '',
// 							}
// 						},
// 						// {
// 						// 	name: '相較他級毒品'
// 						// }
// 					],
// 					// [
// 					// 	{
// 					// 		name: '趨勢',
// 					// 		axes: {
// 					// 			x: '民國',
// 					// 			y: '人數'
// 					// 		}
// 					// 	}
// 					// ]
// 				]
// 			},
// 			{
// 				name: '查獲第三級毒品數',
// 				topics: [
// 					[
// 						{
// 							name: '總數',
// 							axes: {
// 								x: '民國',
// 								y: '毒品數'
// 							}
// 						},
// 						// {
// 						// 	name: '相較他級毒品'
// 						// }
// 					],
// 					[
// 						{
// 							name: '趨勢',
// 							axes: {
// 								x: '民國',
// 								y: '人數'
// 							}
// 						}
// 					]
// 				]
// 			},
// 			{
// 				name: '查獲第四級毒品數',
// 				topics: [
// 					[
// 						{
// 							name: '總數',
// 							axes: {
// 								x: '民國',
// 								y: '毒品數'
// 							},
// 							extl: {
// 								headers: null
// 							},
// 							intl: {
// 								header: '',
// 							}
// 						}, 
// 						// {
// 						// 		name: '相較他級毒品'
// 						// }
// 					],
// 					[
// 						{
// 							name: '趨勢',
// 							axes: {
// 								x: '民國',
// 								y: '人數'
// 							}
// 						}
// 					]
// 				]
// 			}
// 		]
// 	}
// }
set('prosecution',List([{dataset:'殺人罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{ // mHeaders: Headers for mergining into 1 new column.
mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}},{dataset:'兒童及少年性交易防制條例',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}},{dataset:'竊盜罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}},{dataset:'擄人勒贖罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}},{dataset:'恐嚇罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}},{dataset:'槍砲彈藥刀械管制條例',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數', // exceptHeaders: [
// 	'保安處分人數', '緩刑人數', '累犯人數', '民國'
// ],
topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 公共危險罪
{dataset:'公共危險罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 貪污罪
{dataset:'貪污罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 瀆職罪
{dataset:'瀆職罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 詐欺罪
{dataset:'詐欺罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 重傷罪
{dataset:'重傷罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 強制性交罪
{dataset:'強制性交罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 偽造文書印文罪
{dataset:'偽造文書印文罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}, // 賭博罪
{dataset:'賭博罪',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'被告人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:null},intl:{mHeaders:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名統計',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}},{name:'各刑名百分比',axes:{x:'民國',y:'百分比'},extl:{url:null,headers:null},intl:{headers:['死刑','無期徒刑','有期徒刑','拘役','罰金','免刑','無罪','不受理','其他']}}],[]]}]}}])) // State of judicial data selector
.set('judicial',List([{dataset:'地方法院刑事案件收結情形',availableChartTypes:['直方圖'], // '趨勢圖'
content:{data:[{name:'案件數', // exceptHeaders: [
// 	'民國', '終結', '未結', '終結案件中平均一件所需日數', 
// 	'平均每法官每月辦結件數', '上訴案件維持率', '抗告案件維持率'
// ],
topics:[[{name:'受理件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:null,mHeaders:['舊受','新受']}},{name:'新收與舊受',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['舊受','新受']}},{name:'新收與舊受百分比',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['舊受','新受']}},{name:'終結與未結',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}},{name:'終結與未結百分比',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[]]},{name:'終結案件中平均一件所需日數',topics:[[{name:'總數',axes:{x:'民國',y:'天數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'平均每法官每月辦結件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'上訴案件維持率',topics:[[{name:'總數',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'抗告案件維持率',topics:[[{name:'總數',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]}]}},{dataset:'高等法院刑事案件收結情形',availableChartTypes:['直方圖'], // '趨勢圖'
content:{data:[{name:'案件數',topics:[[{name:'受理件數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:null,mHeaders:['舊受','新受']}},{name:'新收與舊受',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['舊受','新受']}},{name:'新收與舊受百分比',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['舊受','新受']}},{name:'終結與未結',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}},{name:'終結與未結百分比',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[]]},{name:'終結案件中平均一件所需日數',topics:[[{name:'總數',axes:{x:'民國',y:'天數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'平均每法官每月辦結件數',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'上訴案件維持率',topics:[[{name:'總數',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'抗告案件維持率',topics:[[{name:'總數',axes:{x:'民國',y:'百分比'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]}]}},{dataset:'最高法院刑事案件收結情形',availableChartTypes:['直方圖'], // '趨勢圖'
content:{data:[{name:'舊受',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'新受',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['終結','未結']}}]]},{name:'終結',topics:[[{name:'總數',axes:{x:'民國',y:'案件數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'未結',topics:[[{name:'總數',axes:{x:'民國',y:'數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'終結案件中平均一件所需日數',topics:[[{name:'總數',axes:{x:'民國',y:'天數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'}}]]},{name:'平均每法官每月辦結件數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['終結','未結']}}],[{name:'趨勢',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:['終結','未結']}}]]}]}}])) // State of correction data selector
.set('correction',List([{dataset:'監獄人數概況',availableChartTypes:['直方圖','趨勢圖'],content:{data:[{name:'本年執行人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},intl:{headers:['本年執行人數']},extl:{url:null}},{name:'組成',axes:{x:'民國',y:'人數'},intl:{headers:['上年底留監人數','本年入監人數']},extl:{url:null}},{name:'組成百分比',axes:{x:'民國',y:'百分比'},intl:{headers:['上年底留監人數','本年入監人數']},extl:{url:null}}],[{name:'減刑',axes:{x:'民國',y:'人數'}}]]},{name:'本年入監人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:[]},intl:{headers:[]}}], // For the next version
// {
// 	name: '入監原因分類',
// 	axes: {
// 		x: '民國',
// 		y: '人數'
// 	}
// }
[{name:'減刑',axes:{x:'民國',y:'人數'}}]]},{name:'新入監人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{url:null,headers:[]},intl:{headers:[]}},{name:'犯次分類',axes:{x:'民國',y:'人數'},extl:{url:function(){if(isLocal)return './correction/新入監犯罪次數與種類.csv';else return './correction/c3.csv';}(),headers:['初犯','再犯','累犯']},intl:{headers:[]}},{name:'犯次分類比例',axes:{x:'民國',y:'百分比'},extl:{headers:['初犯','再犯','累犯']},intl:{headers:null}}],[{name:'減刑',axes:{x:'民國',y:'人數'}}]]},{name:'本年出獄人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:null}}], // Next new task
// {
// 	name: '出獄原因分類',
// 	axes: {
// 		x: '民國',
// 		y: '人數'
// 	},
// 	extl: {
// 		headers: null,
// 	},
// 	intl: {
// 		headers: null,
// 	}
// }
[{name:'減刑',axes:{x:'民國',y:'人數'}}]]},{name:'本年年底留監人數',topics:[[{name:'總數',axes:{x:'民國',y:'人數'},extl:{headers:null},intl:{headers:null}}],[{name:'減刑',axes:{x:'民國',y:'人數'}}]]}]}},{dataset:'新入監資料概覽',availableChartTypes:['圓環比例圖'],content:{data:[{name:'民國75年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國76年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國77年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國78年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國79年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國80年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國81年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國82年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國83年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國84年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國85年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國86年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國87年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國88年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國89年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國90年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國91年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國92年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國93年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國94年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國95年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國96年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國97年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國98年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國99年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國100年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國101年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國102年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]},{name:'民國103年',data:['總覽','新入監前家庭狀況','新入監前犯罪次數與種類','新入監前教育程度','新入監年齡統計'],topics:[[{name:'總數'}]]}]}}])), // key: the name of the theme.
selectState:function selectState(key){return this.state.get(key);}, // Find the index of the specific dataset
findDatasetIndex:function findDatasetIndex(key,datasetName){var state=this.selectState(key); // Transform the List to js array
var list=state.toArray();return list.findIndex(function(d){return d.dataset===datasetName;});}, // Find the index of the data in the chosen dataset.
findDataIndex:function findDataIndex(key,datasetName,dataName){var state=this.selectState(key);var index=this.findDatasetIndex(key,datasetName),dataList=state.get(index).content.data;return dataList.findIndex(function(data){return data.name===dataName;});}, // Find the data.
findData:function findData(key,datasetName,dataName){var state=this.selectState(key);var index=this.findDatasetIndex(key,datasetName),dataList=state.get(index).content.data;return dataList.find(function(data){return data.name===dataName;});}, // Find the index of the chart type in the chosen dataset.
findChartTypeIndex:function findChartTypeIndex(key,datasetName,chartName){var state=this.selectState(key);var index=this.findDatasetIndex(key,datasetName),chartList=state.get(index).availableChartTypes;return chartList.findIndex(function(chart){return chart===chartName;});}, // List the dataset
listDataset:function listDataset(key){var state=this.selectState(key);var datasets=[];for(var i=0;i<state.size;++i){datasets.push(state.get(i).dataset);}return datasets;}, // List the available data
listData:function listData(key,datasetIdx){var state=this.selectState(key);var datas=state.get(datasetIdx).content.data.map(function(d){return d.name;});return datas;},listCharttype:function listCharttype(key,datasetIdx){var state=this.selectState(key);var charttypes=state.get(datasetIdx).availableChartTypes;return charttypes;},listTopic:function listTopic(key,datasetIdx,dataIdx,chartIndex){var state=this.selectState(key);var topics=state.get(datasetIdx).content.data[dataIdx].topics[chartIndex].map(function(topicInfo){return topicInfo.name;});return topics;}, // Find topic
findTopic:function findTopic(key,datasetName,dataName,chartTypeName,topicName){var state=this.selectState(key);var _datasetIndex=this.findDatasetIndex(key,datasetName);var _dataIndex=this.findDataIndex(key,datasetName,dataName);var _chartTypeIndex=this.findChartTypeIndex(key,datasetName,chartTypeName);return state.get(_datasetIndex).content.data[_dataIndex].topics[_chartTypeIndex].find(function(topic){return topic.name===topicName;});}}; /* Story Telleller */var StoryTeller=function(){function StoryTeller(){_classCallCheck(this,StoryTeller); /* * Story Chains define how the animations work each time user switch a topic. * */ /*
			Story Chains make animation on step at a time and never do flying or jumping.
			When user read the first topic and he choose the final one directly,
			the App starts to interate each step until reaching the destination in a proper time,
			not just swift to the result.

			dataset <String>: The current dataset
			datasets <Array> : 
				The datasets which share the same story chain. 
				If a function does not find the dataset, 
				it checks the datasets' existance and access the value.
			data    <String>: The current data
			vizType <String>: The current chartTpye operating transition animation.
			fwdSteps <Array>: The step animation when user increases their depth of topic reading.
				goto <String>: the next topic,
				transit <Function>: the way move to the destination
				end: <Object Promise>: 
						 Store the Promise object for ascychrnous control. 
						 However, its default value is null.
			bwdSteps <Array>: The step animation when user decreases their depth of topic reading.
				*The properties are the same as fwdSteps.*

		*/this.vizStoryChains=[ // Stories for police.
{dataset:'竊盜案件',data:'合計發生件數',vizType:'直方圖',fwdSteps:[{goto:'案件種類',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'案件種類百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'案件總數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'案件種類',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null}]},{dataset:'竊盜案件',data:'非汽機車竊盜發生件數',vizType:'直方圖',fwdSteps:[{goto:'重大竊盜發生件數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'重大竊盜嫌疑人數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'重大竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBupdateStackBars.apply(_this,params);},end:null},{goto:'重大竊盜案破獲率',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null},{goto:'普通竊盜發生件數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'普通竊盜嫌疑犯人數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'普通竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBupdateStackBars.apply(_this,params);},end:null},{goto:'普通竊盜案破獲率',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[]},{dataset:'竊盜案件',data:'汽機車竊盜案件',vizType:'直方圖',fwdSteps:[{goto:'汽機車案件數',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'汽機車案件數百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null},{goto:'汽車竊盜發生件數',transit:function transit(_this,params){return _this.DBtransPCTStackBarToBar.apply(_this,params);},end:null},{goto:'汽車竊盜嫌疑犯人數',transit:function transit(_this,params){params.push('汽車竊盜嫌疑犯人數');return _this.DBUpdateBar.apply(_this,params);},end:null},{goto:'汽車竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'汽車竊盜案破獲率',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null},{goto:'機車竊盜發生件數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'機車竊盜嫌疑犯人數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'機車竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'機車竊盜案破獲率',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'總數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'汽機車案件數',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null},{goto:'汽機車案件數百分比',transit:function transit(_this,params){return _this.DBtransBarToPCTStackBar.apply(_this,params);},end:null},{goto:'汽車竊盜發生件數',transit:function transit(_this,params){params.push('汽車竊盜發生件數');return _this.DBUpdateBar.apply(_this,params);},end:null},{goto:'汽車竊盜嫌疑犯人數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'汽車竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null},{goto:'汽車竊盜案破獲率',transit:function transit(_this,params){return _this.DBtransBarToPCTStackBar.apply(_this,params);},end:null},{goto:'機車竊盜發生件數',transit:function transit(_this,params){params.push('機車竊盜發生件數');return _this.DBUpdateBar.apply(_this,params);},end:null},{goto:'機車竊盜嫌疑犯人數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'機車竊盜破獲與否件數',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null}]}, // For prosecution stories
{datasets:['殺人罪','兒童及少年性交易防制條例','竊盜罪','擄人勒贖罪','恐嚇罪','槍砲彈藥刀械管制條例','公共危險罪','貪污罪','瀆職罪','詐欺罪','重傷罪','強制性交罪','偽造文書印文罪','賭博罪'],data:'被告人數',vizType:'直方圖',fwdSteps:[{goto:'各刑名統計',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'各刑名百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'總數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'各刑名統計',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null}]}, // For judicial stories
{datasets:['地方法院刑事案件收結情形','高等法院刑事案件收結情形'],data:'案件數',vizType:'直方圖',fwdSteps:[{goto:'新受與舊受',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'新受與舊受百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null},{goto:'終結與未結',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null},{goto:'終結與未結百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'受理件數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'新收與舊受',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null},{goto:'新收與舊受百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null},{goto:'終結與未結',transit:function transit(_this,params){return _this.DBtransPCTToStackBar.apply(_this,params);},end:null}]}, // For correction stories
{dataset:'監獄人數概況',data:'本年執行人數',vizType:'直方圖',fwdSteps:[{goto:'組成',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'組成百分比',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'總數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'組成',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null}]},{dataset:'監獄人數概況',data:'新入監人數',vizType:'直方圖',fwdSteps:[{goto:'犯次分類',transit:function transit(_this,params){return _this.DBtransBarToStackBar.apply(_this,params);},end:null},{goto:'犯次分類比例',transit:function transit(_this,params){return _this.DBtransStackBarToPCT.apply(_this,params);},end:null}],bwdSteps:[{goto:'總數',transit:function transit(_this,params){return _this.DBtransStackBarToBar.apply(_this,params);},end:null},{goto:'犯次分類',transit:function transit(_this,params){return _this.DBtransPCTToOriginStackBar.apply(_this,params);},end:null}]}]; // Tales for explain the chart.
this.taleChains=[ // 兒少法 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'兒童及少年性交易防制條例',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{right:'2em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'兒童及少年，是國家未來的主人翁，更是社會持續發展及進步的原動力， 確保我們的孩子在無憂無慮、安全健康的環境下成長，是我們責無旁貸的使命， 為此立法院立法',React.createElement('a',{className:'tale-body-link',href:'http://law.moj.gov.tw/LawClass/LawOldVer_Vaild.aspx?PCODE=D0050023'},'兒童及少年性交易防制條例'),'就是希望給予我們的下一代多一層保障。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'4.5em',top:'9em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'早年的粉紅色代表罰金，近年的黃色代表拘役，無論何者均是輕罪，為什麼呢？',infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{left:'4.5em',top:'9em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'因為此條例並不一定是涉及性交易才會被起訴，散步兒少相關猥褻資訊或向兒少散步猥褻資訊均是違反此條例的，但罪不至徒刑，故此。',infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{left:'4em',top:'6em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'民國91、92年很明顯被判有期徒刑人數遠勝前幾年，也比後幾年多出不少，為什麼呢？',infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:false},{Container:{pos:{left:'4em',top:'6em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'目前我們也還沒找到合理的解釋，還請各位一同集思廣益囉',infoAnimation:'',isTopicFirstSec:false,isEnd:true}]}, // 殺人罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'殺人罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{right:'4em',top:'4em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:'殺人罪是古老之罪行，流傳千年之久，但社會關注度不曾減弱。',infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{right:'4em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'我們統計的殺人罪包含「殺人」、「殺人未遂」、「預備殺人」及「殺害直系尊親屬」不包含過失致死及相關罪行。',infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{right:'4em',top:'3em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:'過去三十年台灣殺人犯的數量是逐年減少的，被求處最高刑罰（死刑）的現象亦趨罕見。特別的是，無罪的人數量也逐年遞減，應可解釋為科學辦案日新月異，減少因證據不足而判無罪的現象。',infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{right:'4em',top:'3em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'以百分比來看，這張圖跟上張無異，有個案例發生於103年的藍「有罪免刑」(藍色表示)，為什麼呢？請看以下中國時報之',React.createElement('a',{className:'tale-body-link',href:'http://www.chinatimes.com/realtimenews/20140605002800-260402'},'報導')),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:true}]}, // 竊盜罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'竊盜罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{left:'6em',top:'4em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'竊盜是古老的犯罪，相較於其他國家，台灣人普遍路不拾遺，東西掉了找回來的情況也多有所聞。不容忽視的是，竊盜罪歷年來被告人數是持續增長的，也長期佔據（2005年到2009年，根據法務部統計處資料）台灣三大常見犯罪第二名。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'6em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'竊盜案一直都在你我身邊上演，下次隨手把東西放在桌上就要離開座位時，請再想一想確定要這麼做嘛?'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{left:'6em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'近10年來，因竊盜被判罰金的人數大幅減少，改用拘役取代之。不難理解，若非出於貧窮何須偷東西？要他們繳罰金又有什麼意義？'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{right:'4em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'除了罰金、無罪人數減少外，被判有期徒刑之比例也是逐年遞減，盡以拘役處分。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:false},{Container:{pos:{right:'4em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'法務部近年防治犯罪的看法是「輕罪輕判、重罪重判」因為監獄是個大染缸，小賊進去出來往往變大尾，能避免入獄就避免。'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{right:'4em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'竊盜罪為本刑五年以下之罪，當屬法務部稱之輕罪。然而竊盜犯常常犯下不只一起案件。基於一罪一罰原則，常有聽聞慣竊遭判十年、二十年之徒刑。'),infoAnimation:'',isTopicFirstSec:false,isEnd:true}]}, // 擄人勒贖罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'擄人勒贖罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{left:'7em',top:'6em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'千萬別以為90年過後治安敗壞。剛好相反，治安就是因為變好了才有這樣的圖表。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'7em',top:'6em'},size:{width:'350px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'二戰時期制定的<<',React.createElement('a',{href:'http://law.moj.gov.tw/Law/LawSearchResult.aspx?p=A&t=A1A2E1F1&k1=懲治盜匪條例',className:'tale-body-link'},'懲治盜匪條例'),'>> 在民國90年廢止，故綁匪從91年起開始適用舊法，也就是刑法擄人勒贖罪，所以有91年起犯罪人數爆量的現象（但民國90年前也是有綁匪適用舊法的，關鍵在於特別法與普通法認定標準不一，有興趣的朋友可以自行比較）'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{left:'7em',top:'6em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'雖然民國90年之前之此罪無罪人數甚高，但因犯案人數歷年都在30人以下，影響解釋變因過多，無須另作解釋。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{right:'3em',top:'6.5em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'民國98年之後，擄人勒贖犯罪人數急墜，除了此罪被判重刑風險高之外，另一盛行的「輕罪」產生了替代效果，那就是詐欺。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:false},{Container:{pos:{right:'3em',top:'6.5em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'謊詐綁走被害人之親屬，要求高額贖金，既不冒被抓之危險，也鮮少被重判，這麼「好賺」的行業，意外毀了綁匪的工作！'),infoAnimation:'',isTopicFirstSec:false,isEnd:true}]}, // 恐嚇罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'恐嚇罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{left:'6em',top:'3em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'恐嚇罪非重罪。被告出於義憤恐嚇被害人，並非出於恐嚇之意，通常可以和解或是罰金了事， 但若恐嚇案件涉及妨害自由、組織犯罪條例，甚至擄人勒贖，檢察官通常會擇一罪名起訴。 也因此，恐嚇本身罰責不重，但還是有人被處重判。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'6em',top:'3em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'恐嚇罪是個相形單純的罪，非徒刑即無罪，罰金、拘役幾乎不存在。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{left:'6em',top:'3em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'恐嚇認定標準見仁見智，法官裁量標準很寬。無罪比例也很高'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:true}]}, // 瀆職罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'瀆職罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{right:'2em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'我們蒐集瀆職罪的資料本是認為犯下此罪之公務員人數應當不少，且跟貪污罪一樣會造成人民對社會的不信任， 但實際統計後才發現跟我們想的不一樣。被起訴的人不多，有罪的人更少。 因為「瀆職」的犯罪構成要件不好拿捏，公務員要有不作為，且對人民或社會造成傷害，此罪才會成立。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'3.5em',top:'7em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'很明顯的，民國84年有瀆職罪不受理人數相當多的現象。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{left:'5em',top:'2em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'以比例而言，被判無罪的人也多。除此之外「其他」也多（免訴、撤回、管轄錯誤）可見瀆職罪之地位尷尬。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:true}]}, // 槍砲 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'槍砲彈藥刀械管制條例',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{right:'2em',top:'4em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'台灣黑槍氾濫嚴重?不嚴重? 可以確定的是，真正被槍打傷或是打死的人在台灣還是少數。 但無論如何，街頭駁火、幫派火拼，都是重大社會維安問題，也因此此條例對於持有槍械之人之刑度多在五年以上，不可謂之輕。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{right:'2em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'值得注意的是，在無法確定有無殺傷力之前，外型仿真之空氣槍、瓦斯槍及BB槍持有者也有被此條例起訴的風險，這也可以解釋為什麼無罪之人這麼多。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{right:'2em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'按照「重罪重判、輕罪輕判」（參考竊盜罪）之標準，近年犯此條例被判拘役之人數也是被壓縮，畢竟五年本刑可不是輕罪。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:true}]}, // 公共危險罪 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'公共危險罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{left:'6em',top:'4em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'根據英國《太陽報》引用壓力團體「移民觀察」（Migration Watch）的研究，台灣是全世界人口密度第二高的國家，在這麼擁擠的地方居住，公眾居住環境安全維護是不容疏忽的，只要一丁點的不慎便有可能造成嚴重的後果。公共危險罪早些年約束縱火、失火的行為，加上台灣天災多，違背建築術成規也被視為公共危險罪的一環。'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{left:'6em',top:'4em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'近年來，酒駕肇事奪走多條人命，引發社會憤慨，經過兩次修法後，不能安全駕駛已然成為公共危險罪之大宗，2005年到2009年，公共危險罪一直是台灣入監服刑人數第三大罪名。'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{left:'7em',top:'4em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'在1999年之前，單純的酒醉駕車乃是由警察以行政罰的方式為處罰， 為了有效嚇阻酒醉駕車，因此在1999年(民國88年)刑法修正時，立法者將原本僅屬於行政罰的酒駕與類似行為入罪化， 而增訂刑法第185條之3，即只要服用毒品、麻醉藥品、酒類或其他相類之物，致不能安全駕駛動力交通工具者， 即可處一年以下有期徒刑、拘役或三萬元以下罰金。所以民國89年公共危險罪才爆量'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{left:'5em',top:'2em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,'時死亡案件98年為397人， 99年、100年卻增為419人、439人，加上葉少爺事件引發社會憤怒， 立法院乃於102年5月31號修法參考德國、美國標準，將吐氣所含酒精濃度達每公升0.25毫克以上，認定為不能安全駕駛之標準，違者處2年以下有期徒刑，得併科20萬元以下罰金。 這是103年公共危險罪裁判確定人數暴量的原因。'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:true}]}, // 貪污 (Prosecution)
{ // The first section of each topic is the main indicator.
dataset:'貪污罪',data:'被告人數',vizType:'直方圖',sections:[{Container:{pos:{left:'6em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'貪污一向是國人最痛恨的犯罪手法之一，往往造成人民與對政府的不信任，也會導致巨大的經濟損失。 根據國際透明組織評比，台灣的「貪腐印象」從08年到15年維持在世界排名39到30名之間，雖不令人滿意，但尚可接受。 該組織排名主要是依據外商在跟各國政府打交道時的感受來統計，無法看出被起訴的貪瀆人數。但我們的資料可以！'),infoAnimation:'',isTopicFirstSec:true,topicName:'總數',isEnd:false},{Container:{pos:{right:'2em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'統計圖為依<<貪污治罪條例>>被起訴人總數，並不是案件數。 有可能貪污案件減少，但每一案件涉案人數增加，造成整體貪污人數增加的現象'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{right:'2em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'貪污治罪條例定罪率從99年到103年分別是84.8、75.1、74.1、72.7及70.3(資料來源:法務統計年報)。 相較於多數罪有高達九成的定罪率，貪瀆確實不易定罪。原因如下:'),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名統計',isEnd:false},{Container:{pos:{right:'2em',top:'2em'},size:{width:'400px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#3B8AE5'}},infoContext:React.createElement('span',null,'貪污治罪條例定罪率從99年到103年分別是84.8、75.1、74.1、72.7及70.3(資料來源:法務統計年報)。 相較於多數罪有高達九成的定罪率，貪瀆確實不易定罪。原因如下:'),infoAnimation:'',isTopicFirstSec:false,isEnd:false},{Container:{pos:{left:'6em',top:'8em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,React.createElement('ul',null,React.createElement('li',null,'1.計算方式以人為本，不是以案為本，所以一案假設有五人被起訴，一人被定罪，縱使本案成立，定罪率卻只有20%。'),React.createElement('li',null,'2.貪瀆屬於高度智慧之白領犯罪，多數犯行早已計畫良久、證人稀少且證據隱密，檢調事後蒐集犯罪事實有其難度。'))),infoAnimation:'',isTopicFirstSec:true,topicName:'各刑名百分比',isEnd:false},{Container:{pos:{left:'6em',top:'8em'},size:{width:'300px',padding:'0.5em 1em'}},IndButton:{pos:{},style:{backgroundColor:'#822979'}},infoContext:React.createElement('span',null,React.createElement('ul',null,React.createElement('li',null,'3.貪污治罪條例法定刑度過高，以第四條第一項為例，竊取或侵占公用或公有器材、財物者處無期徒刑或十年以上有期徒刑，也就是說縱使只是公務員從辦公室攜帶橡皮擦回家而被起訴，法官最輕也要判十年，使得許多法官判不下去，只得判無罪。'),React.createElement('li',null,'4.同上述理由，罪責過重降低被告自白意願，也讓法官採取極度嚴格之採證標準，影響定罪率。'))),infoAnimation:'',isTopicFirstSec:false,isEnd:true}]}];this.calTopicFirstTale=function(){var tales=this._txtTaleChain.sections.filter(function(section,i){return section.isTopicFirstSec===true;});return tales;}, // To get the styles for the components that the story teller needs
this._componentStyleFactory=function(styleObjs){var style={};var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=styleObjs[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var styleObj=_step.value;var params=Object.keys(styleObj);var _iteratorNormalCompletion2=true;var _didIteratorError2=false;var _iteratorError2=undefined;try{for(var _iterator2=params[Symbol.iterator](),_step2;!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=true){var param=_step2.value;style[param]=styleObj[param];}}catch(err){_didIteratorError2=true;_iteratorError2=err;}finally {try{if(!_iteratorNormalCompletion2&&_iterator2.return){_iterator2.return();}}finally {if(_didIteratorError2){throw _iteratorError2;}}}}}catch(err){_didIteratorError=true;_iteratorError=err;}finally {try{if(!_iteratorNormalCompletion&&_iterator.return){_iterator.return();}}finally {if(_didIteratorError){throw _iteratorError;}}}return style;}; // Store the current tale.
this._txtTaleChain=null; // Store the current story chain.
this._vizStory=null;} // Decide which story chain should be applied.
_createClass(StoryTeller,[{key:'decideVizStoryChain',value:function decideVizStoryChain(datasetName,dataName,vizTypeName){this._vizStory=this.vizStoryChains.find(function(chain){ // If the dataset is not defined, access the datasets.
if(!chain.dataset){ // Check if the dataset is in the datasets of the chain
var isDatasetIn=chain.datasets.findIndex(function(dataset){return dataset===datasetName;})>-1; // Once the dataset is existed in the chain, check up the data and vizType is correct.
return isDatasetIn?chain.data===dataName&&chain.vizType===vizTypeName:null;}else return chain.dataset===datasetName&&chain.data===dataName&&chain.vizType===vizTypeName;});} // Decide which tales chain shoule be applied.
},{key:'decideTaleChain',value:function decideTaleChain(datasetName,dataName,vizTypeName){this._txtTaleChain=this.taleChains.find(function(chain){return chain.dataset===datasetName&&chain.data===dataName&&chain.vizType===vizTypeName;});} // toTell interates through the animation processes.
/*
		startDepth: The current depth the user reads on
		endDepth  : The destination depth the user wants to
		opParams  : The parameters each step needs to apply
	*/},{key:'toTell',value:function toTell(startDepth,endDepth,fwdOpParams,bwdOpParams){ // For deeper exploration
if(endDepth-startDepth>0){for(var s=startDepth;s<endDepth;++s){ // The pending promise object will be assigned to the end property. 
if(s===startDepth)this._vizStory.fwdSteps[s].end=this._vizStory.fwdSteps[s].transit(fwdOpParams[s]._,fwdOpParams[s].params);else this._vizStory.fwdSteps[s].end=this._vizStory.fwdSteps[s-1].end.then(this._vizStory.fwdSteps[s].transit.bind(null,fwdOpParams[s]._,fwdOpParams[s].params));}} // For returning back from the deep.
else if(endDepth-startDepth<0){for(var s=startDepth-1;s>=endDepth;--s){if(s===startDepth-1){this._vizStory.bwdSteps[s].end=this._vizStory.bwdSteps[s].transit(bwdOpParams[s]._,bwdOpParams[s].params);}else {this._vizStory.bwdSteps[s].end=this._vizStory.bwdSteps[s+1].end.then(this._vizStory.bwdSteps[s].transit.bind(null,bwdOpParams[s]._,bwdOpParams[s].params));}}}}}]);return StoryTeller;}(); /* ***** Elements for the Index Page ***** */var IndexNavList=React.createClass({displayName:'IndexNavList', // Display a board to tell user that the page they want to go is not ready.
pageHasNotFinished:function pageHasNotFinished(){window.alert('即將推出，敬請期待。');}, // working-spot: Try to depreciate the state and use the props imported from store instead.
// getInitialState: function() {
// 	return {
// 		nav: [
// 			<RR.Link to='/aboutus' >
// 				<img src="./src/aboutus.png" />
// 			</RR.Link>,
// 			/* 
// 			<RR.Link to='/main'>
// 				<img src="./src/see.png" />
// 			</RR.Link>,
// 			<RR.Link to='/special'>
// 				<img src="./src/issue.png" />
// 			</RR.Link>,
// 			<RR.Link to='/work_together'>
// 				<img src="./src/work.png" />
// 			</RR.Link>, */ 
// 			// <img src="./src/aboutus.png"  onClick={ this.pageHasNotFinished }/>,
// 			<img src="./src/see.png"  onClick={ this.pageHasNotFinished }/>,
// 			<img src="./src/issue.png"  onClick={ this.pageHasNotFinished }/>,
// 			<img src="./src/work.png"  onClick={ this.pageHasNotFinished }/>,
// 			<div className='social-group'>
// 				<iframe id='githubStar' className='social-btn'
// 					src="https://ghbtns.com/github-btn.html?user=yudazilian&repo=VisualJusticeTW&type=star&count=true" 
// 					frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
// 			</div>
// 		]
// 	}
// },
render:function render(){ // let listItems = [],
// l = this.state.nav.length;
// for ( var i=0; i<l; i++ ) {
// 	if (i === l - 1) {
// 		listItems.push(
// 			<IndexNavListSocialItem 
// 				key={i}
// 				elements={ this.state.nav[i] }
// 			/>
// 		);
// 	}
// 	else {
// 		listItems.push(
// 			<IndexNavListItem 
// 				key={i}
// 				link={ this.state.nav[i] } />
// 			);
// 	}
// }
var i=0,_items=[];var _iteratorNormalCompletion3=true;var _didIteratorError3=false;var _iteratorError3=undefined;try{for(var _iterator3=this.props.listItems[Symbol.iterator](),_step3;!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=true){var listItem=_step3.value;_items.push(React.createElement(IndexNavListItem,{key:i++,link:listItem}));}}catch(err){_didIteratorError3=true;_iteratorError3=err;}finally {try{if(!_iteratorNormalCompletion3&&_iterator3.return){_iterator3.return();}}finally {if(_didIteratorError3){throw _iteratorError3;}}}return React.createElement('nav',{id:'NAV',className:'b12-col-md-12 b15-row-md-9'},React.createElement('ul',{className:'b12-col-md-12 b15-row-md-15'},_items));}});var IndexNavListItem=React.createClass({displayName:'IndexNavListItem',getInitialState:function getInitialState(){return {isHovered:false};},mouseEnterItem:function mouseEnterItem(){this.setState({isHovered:true});},mouseLeaveItem:function mouseLeaveItem(){this.setState({isHovered:false});},render:function render(){return React.createElement('li',{onMouseEnter:this.mouseEnterItem,onMouseLeave:this.mouseLeaveItem,className:'nav-option b12-col-md-12 b12-row-md-2'},React.createElement('span',{className:'ver-helper'}),React.createElement('div',{className:this.state.isHovered?'nav-option-hovermarker active':'nav-option-hovermarker'}),this.props.link);}}); // working-spot: Can be depreciated later on.
// var IndexNavListSocialItem = React.createClass({
// 	render: function() {
// 		return (
// 			<li className="nav-option b12-col-md-12 b12-row-md-4">
// 				<span className='ver-helper'></span>
// 				{ this.props.elements }
// 			</li>
// 		)
// 	}
// });
/* Major Themes are displaying on the index page. */var Theme=React.createClass({displayName:'Theme',render:function render(){return React.createElement('div',{id:'',className:'b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right '},React.createElement('div',{className:'b12-col-md-12 b12-row-md-8 sect-part-imgwrapper'},React.createElement('img',{className:'sect-part-img',src:this.props.themeImg})),React.createElement('div',{className:'b12-col-md-12 b12-row-md-1 sect-part-btnwrapper'},React.createElement('span',{className:'ver-helper'}),React.createElement(ThemeButton,{path:this.props.path,btnTxtSrc:this.props.btnTxt})),React.createElement('div',{className:'b12-col-md-12 b12-row-md-3 sect-part-imgwrapper'},React.createElement('span',{className:'ver-helper'}),React.createElement('div',{className:'imgtxt-wrapper'},React.createElement('img',{className:'imgtxt',src:this.props.info}))));}});var ThemeBtn=React.createClass({displayName:'ThemeBtn',render:function render(){return React.createElement('div',{className:'sect-part-btn'},React.createElement(RR.Link,{to:this.props.path},React.createElement('img',{className:'sect-part-btn-img',src:this.props.btnTxtSrc})));}}); /* ***** DataBoard components: The components render the visualized data  ***** */var DataBoard=React.createClass({displayName:'DataBoard', /* Customized Methods */ // Graph unit for drawing.
gpu:function(){return {barGraph:new barGraphClass(),lineGraph:new lineGraphClass(),ringGraph:new ringGraphClass()};}(),tip:new tipClass(), // Story teller is an explainer for deeper topic tranverse.
storyTeller:new StoryTeller(), // Find the index of datasheet.
findDataSheetIndex:function findDataSheetIndex(props){var dSheet=this.state.dataSheets.find(function(dataSheet){return dataSheet.name===props.dataset;});return dSheet;},DBfindTopic:function DBfindTopic(props){var themeKey=store.getState().get('theme');return DataFilterStateTree.findTopic(themeKey,props.dataset,props.data,props.chartType,props.topic);},DBfindData:function DBfindData(props){var themeKey=store.getState().get('theme');return DataFilterStateTree.findData(themeKey,props.dataset,props.data);}, // Visualizing data with bar chart
vizDataWithBarChart:function vizDataWithBarChart(props,dataSheet){var update=arguments.length<=2||arguments[2]===undefined?false:arguments[2];var bG=this.gpu.barGraph,t=this.tip;var _topic=this.DBfindTopic(props);var _data=this.DBfindData(props);if(update){bG.update( // dataSheet.url, 
_topic.axes.x,_topic.axes.y,props.data).then(function(){t.appendBarMouseOver(props.data);});}else {bG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).mappingData(dataSheet.url,_topic.axes.x,_topic.axes.y,props.data,false,false, // _data.exceptHeaders
_topic.intl.mHeaders).then(function(){t.initTips().appendBarMouseOver(props.data);});}}, // Visualizing data with bar chart
vizDataWithLineChart:function vizDataWithLineChart(props,dataSheet){var update=arguments.length<=2||arguments[2]===undefined?false:arguments[2];var lG=this.gpu.lineGraph,t=this.tip;var _topic=this.DBfindTopic(props);if(update){lG.update(dataSheet.url,_topic.axes.x,_topic.axes.y,props.data).then(function(){t.appendDotMouseOver(props.data);});}else {lG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).mappingData(dataSheet.url,_topic.axes.x,_topic.axes.y,props.data,false,false).then(function(){t.initTips().appendDotMouseOver(props.data);});}}, // Visualizing data with ring chart
vizDataWithRingChart:function vizDataWithRingChart(props,dataSheet){var update=arguments.length<=2||arguments[2]===undefined?false:arguments[2];var rG=this.gpu.ringGraph;if(update){var yr=parseInt(props.data.match(/\d+/));rG.selectROCYr(yr).updateRings();}else {rG.resetRings().initializeAPad().init().selectROCYr(75).drawMultiRings(dataSheet.urls);}}, // DBUpdateBar allows bar graph display different data in the same dataset.
DBUpdateBar:function DBUpdateBar(props,header){var bG=this.gpu.barGraph,t=this.tip;var _topic=this.DBfindTopic(props);return bG.update(_topic.axes.x,_topic.axes.y,props.data===header?props.data:header).then(function(){t.appendBarMouseOver(props.data);});}, // Transform from bar to stack bars.
DBtransBarToStackBar:function DBtransBarToStackBar(props){var bG=this.gpu.barGraph,t=this.tip;var _topic=this.DBfindTopic(props);return bG.transitBarToStack(_topic.axes.y,_topic.intl,_topic.extl);}, // Transform from bar to stack bars.
DBtransBarToPCTStackBar:function DBtransBarToPCTStackBar(props){var bG=this.gpu.barGraph,t=this.tip;var _topic=this.DBfindTopic(props);var _data=this.DBfindData(props);return bG.transitBarToPCTStackBar(_topic.axes.y,_topic.intl,_topic.extl,_topic.intl.mHeaders);}, // Transform from bar to stack bars.
DBtransStackBarToBar:function DBtransStackBarToBar(props){var bG=this.gpu.barGraph,t=this.tip;var _data=this.DBfindData(props);var _topic=this.DBfindTopic(props);return bG.transitStackBarToBar( // If the intl have only one header, the header is the data user wants to know.
_topic.intl.headers===undefined?props.data:_topic.intl.headers.length===1?_topic.intl.headers[0]:props.data,_topic.intl.mHeaders,_topic.axes.y).then(function(){t.appendBarMouseOver(props.data);});}, // Transform the stack bar into stack bar with percent unit
DBtransStackBarToPCT:function DBtransStackBarToPCT(props){var bG=this.gpu.barGraph;var _topic=this.DBfindTopic(props);var _data=this.DBfindData(props);return bG.transitPCTStackBar(_topic.axes.y,_topic.intl.mHeaders);}, // Transform the percentage stack bar into origin quantative stack bar
DBtransPCTToOriginStackBar:function DBtransPCTToOriginStackBar(props){var bG=this.gpu.barGraph;var _topic=this.DBfindTopic(props);var _data=this.DBfindData(props);return bG.transitPCTSBarToSBar(_topic.axes.y,_topic.intl,_topic.extl,true);}, // Transform the percentage stack to general bar stack
DBtransPCTToStackBar:function DBtransPCTToStackBar(props){var bG=this.gpu.barGraph;var _topic=this.DBfindTopic(props);var _data=this.DBfindData(props);return bG.transitPCTSBarToSBar(_topic.axes.y,_topic.intl,_topic.extl,false);}, // Transform the percentage stack bar to primitive bar
DBtransPCTStackBarToBar:function DBtransPCTStackBarToBar(props){var bG=this.gpu.barGraph;var _data=this.DBfindData(props);var _topic=this.DBfindTopic(props);return bG.transitPCTSBarToBar(_topic.axes.y,props.data,_topic.intl,_topic.extl,_topic.intl.mHeaders);},DBupdateStackBars:function DBupdateStackBars(props){var bG=this.gpu.barGraph;var _topic=this.DBfindTopic(props);return bG.updateStackBars(_topic.intl,_topic.extl);}, // Produce the params for forward steps and backward steps.
DBTopicStepsProducer:function DBTopicStepsProducer(props){var theme=store.getState().get('theme'),datasetIdx=DataFilterStateTree.findDatasetIndex(theme,props.dataset),dataIdx=DataFilterStateTree.findDataIndex(theme,props.dataset,props.data),chartIdx=DataFilterStateTree.findChartTypeIndex(theme,props.dataset,props.chartType);var topics=DataFilterStateTree.listTopic(theme,datasetIdx,dataIdx,chartIdx),fwdTopics=topics.filter(function(d,i){return i!==0;}),bwdTopics=topics.filter(function(d,i){return i!==topics.length;}); // Forward steps
var fwd=[];var _iteratorNormalCompletion4=true;var _didIteratorError4=false;var _iteratorError4=undefined;try{for(var _iterator4=fwdTopics[Symbol.iterator](),_step4;!(_iteratorNormalCompletion4=(_step4=_iterator4.next()).done);_iteratorNormalCompletion4=true){var topic=_step4.value;fwd.push({_:this,params:[{dataset:props.dataset,data:props.data,chartType:props.chartType,topic:topic}]});}}catch(err){_didIteratorError4=true;_iteratorError4=err;}finally {try{if(!_iteratorNormalCompletion4&&_iterator4.return){_iterator4.return();}}finally {if(_didIteratorError4){throw _iteratorError4;}}}var bwd=[];var _iteratorNormalCompletion5=true;var _didIteratorError5=false;var _iteratorError5=undefined;try{for(var _iterator5=bwdTopics[Symbol.iterator](),_step5;!(_iteratorNormalCompletion5=(_step5=_iterator5.next()).done);_iteratorNormalCompletion5=true){var topic=_step5.value;bwd.push({_:this,params:[{dataset:props.dataset,data:props.data,chartType:props.chartType,topic:topic}]});}}catch(err){_didIteratorError5=true;_iteratorError5=err;}finally {try{if(!_iteratorNormalCompletion5&&_iterator5.return){_iterator5.return();}}finally {if(_didIteratorError5){throw _iteratorError5;}}}return {fwd:fwd,bwd:bwd};},DBTaleFactory:function DBTaleFactory(){if( // temporary if statement
this.storyTeller._txtTaleChain){var index=store.getState().get('currentTaleIndex');var taleEle=this.storyTeller._txtTaleChain.sections[index];var containerStyle=this.storyTeller._componentStyleFactory([taleEle.Container.pos,taleEle.Container.size]);var btnStyle=this.storyTeller._componentStyleFactory([taleEle.IndButton.pos,taleEle.IndButton.style]); // TaleBlock inital style
var taleStyle={opacity:0}; // Add the opacity for the next button to do the first render animation.
btnStyle['opacity']=0;return React.createElement('div',{className:'tale-container',style:containerStyle},React.createElement(TaleBlock,{innerText:taleEle.infoContext,style:taleStyle}),taleEle.isEnd?React.createElement(EndTaleBtn,{topic:this.props.topic,topicDepth:this.props.topicDepth,taleIndex:this.props.taleIndex,taleChain:this.storyTeller._txtTaleChain,msg:'End   ',indicator:'↟',style:btnStyle}):React.createElement(NextTaleBtn,{topic:this.props.topic,topicDepth:this.props.topicDepth,taleIndex:this.props.taleIndex,taleChain:this.storyTeller._txtTaleChain,msg:'Next   ',indicator:'»',style:btnStyle}));}},DBTopicUpdate:function DBTopicUpdate(nextProps){var _this2=this; // Produce the steps for topic explanation.
var steps=this.DBTopicStepsProducer(nextProps); // Use the topic name to find the taleIndex it corresponeds to
if(this.storyTeller._txtTaleChain){(function(){var tName=nextProps.topic,taleIndex=_this2.storyTeller._txtTaleChain.sections.findIndex(function(t,i){return t.topicName===tName;});store.dispatch(setTaleIndexAC(taleIndex));})();}this.storyTeller.toTell(this.props.topicDepth,nextProps.topicDepth,steps.fwd,steps.bwd);}, /* React Native methods */getInitialState:function getInitialState(){return {dataSheets:[ // Police Data
{name:'竊盜案件',url:function(){if(isLocal)return '/police/竊盜案件.csv';else return './police/p0.csv';}()},{name:'暴力犯罪案件',url:function(){if(isLocal)return '/police/暴力犯罪案件.csv';else return './police/p2.csv';}()},{name:'毒品案件',url:function(){if(isLocal)return '/police/毒品案件.csv';else return './police/p1.csv';}()}, // Prosecution Data
{name:'殺人罪',url:function(){if(isLocal)return '/prosecution/殺人罪.csv';else return './prosecution/p0.csv';}()},{name:'竊盜罪',url:function(){if(isLocal)return '/prosecution/竊盜罪.csv';else return './prosecution/p2.csv';}()},{name:'擄人勒贖罪',url:function(){if(isLocal)return '/prosecution/擄人勒贖罪.csv';else return './prosecution/p3.csv';}()},{name:'恐嚇罪',url:function(){if(isLocal)return '/prosecution/恐嚇罪.csv';else return './prosecution/p4.csv';}()},{name:'槍砲彈藥刀械管制條例',url:function(){if(isLocal)return '/prosecution/槍砲彈藥刀械管制條例.csv';else return './prosecution/p5.csv';}()},{name:'兒童及少年性交易防制條例',url:function(){if(isLocal)return '/prosecution/兒童及少年性交易防制條例.csv';else return './prosecution/p1.csv';}()},{name:'公共危險罪',url:function(){if(isLocal)return '/prosecution/公共危險罪.csv';else return './prosecution/p6.csv';}()},{name:'貪污罪',url:function(){if(isLocal)return '/prosecution/貪污罪.csv';else return './prosecution/p7.csv';}()},{name:'瀆職罪',url:function(){if(isLocal)return '/prosecution/瀆職罪.csv';else return './prosecution/p8.csv';}()},{name:'賭博罪',url:function(){if(isLocal)return '/prosecution/賭博罪.csv';else return './prosecution/p9.csv';}()},{name:'詐欺罪',url:function(){if(isLocal)return '/prosecution/詐欺罪.csv';else return './prosecution/p11.csv';}()},{name:'重傷罪',url:function(){if(isLocal)return '/prosecution/重傷罪.csv';else return './prosecution/p10.csv';}()},{name:'強制性交罪',url:function(){if(isLocal)return '/prosecution/強制性交罪.csv';else return './prosecution/p13.csv';}()},{name:'偽造文書印文罪',url:function(){if(isLocal)return '/prosecution/偽造文書印文罪.csv';else return './prosecution/p12賭博罪.csv';}()}, // Judical Data 
{name:'地方法院刑事案件收結情形',url:function(){if(isLocal)return '/judicial/地方法院刑事案件收結情形.csv';else return './judicial/c0.csv';}()},{name:'高等法院刑事案件收結情形',url:function(){if(isLocal)return '/judicial/高等法院刑事案件收結情形.csv';else return './judicial/c1.csv';}()},{name:'最高法院刑事案件收結情形',url:function(){if(isLocal)return '/judicial/最高法院刑事案件收結情形.csv';else return './judicial/c2.csv';}()}, // Correction Data
{name:'監獄人數概況',url:function(){if(isLocal)return '/correction/監獄人數概況.csv';else return './correction/c0.csv';}()},{name:'新入監資料概覽',keys:['1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg','17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg','1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8','1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4'],urls:function(){if(isLocal)return [{name:'新入監前家庭狀況',url:'/correction/新入監前家庭狀況.csv'},{name:'新入監犯罪次數與種類',url:'/correction/新入監犯罪次數與種類.csv'},{name:'新入監前教育程度',url:'/correction/新入監前教育程度.csv'},{name:'歷年新入監年齡歷年統計',url:'/correction/歷年新入監年齡歷年統計.csv'}];else {var urls=[{name:'新入監前家庭狀況',url:'./correction/c1.csv'},{name:'新入監犯罪次數與種類.',url:'./correction/c3.csv'},{name:'新入監前教育程度',url:'./correction/c2.csv'},{name:'歷年新入監年齡歷年統計',url:'./correction/c4.csv'}];return urls;}}()}]};},componentWillMount:function componentWillMount(){this.storyTeller.decideVizStoryChain(this.props.dataset,this.props.data,this.props.chartType); // Select the tales chain
this.storyTeller.decideTaleChain(this.props.dataset,this.props.data,this.props.chartType);},shouldComponentUpdate:function shouldComponentUpdate(nextProps){if(nextProps.updateDataBoard){ // Select the chain 
this.storyTeller.decideVizStoryChain(nextProps.dataset,nextProps.data,nextProps.chartType); // Select the tales chain
this.storyTeller.decideTaleChain(nextProps.dataset,nextProps.data,nextProps.chartType);return true;}return false;}, // Initial Data Visualizing
componentDidMount:function componentDidMount(){var dataSheet=this.findDataSheetIndex(this.props);if(this.props.chartType==='直方圖'){this.vizDataWithBarChart(this.props,dataSheet);}else if(this.props.chartType==='趨勢圖'){this.vizDataWithLineChart(this.props,dataSheet);}else if(this.props.chartType==='圓環比例圖'){}}, // The DataBoard component will renew the visualized data or change a different type.
componentWillUpdate:function componentWillUpdate(nextProps,nextStates){var _this3=this;var dataSheet=this.findDataSheetIndex(nextProps);var  // Renew the board when user switch dataset, chartTypes or 
// switch to the new data when reading in the detail story.
shouldRenew=this.props.dataset!==nextProps.dataset||this.props.chartType!==nextProps.chartType||this.props.data!==nextProps.data&&this.props.topic!==nextProps.topic?true:false, // Update the chart when user switch data viewing
shouldUpdate=this.props.data!==nextProps.data&&this.props.topic===nextProps.topic?true:false, // Extend the chart when topic update.
isTopicSwitching=this.props.topic!==nextProps.topic&&this.props.dataset===nextProps.dataset&&this.props.data===nextProps.data?true:false, // Switch to the next topic when reach the end of the above one.
isTopicSwitchingByTaleUd=function(){if(_this3.storyTeller._txtTaleChain){return _this3.storyTeller._txtTaleChain.sections[nextProps.taleIndex].isTopicFirstSec;}return false;}();if(shouldRenew){d3.select('#SKETCHPAD').remove();if(nextProps.chartType==='直方圖'){if(this.props.chartType==='圓環比例圖')this.gpu.ringGraph.removeBoards();this.vizDataWithBarChart(nextProps,dataSheet);}else if(nextProps.chartType==='趨勢圖')this.vizDataWithLineChart(nextProps,dataSheet);else if(nextProps.chartType==='圓環比例圖')this.vizDataWithRingChart(nextProps,dataSheet);}else if(shouldUpdate){ // Update for chart type changing
if(nextProps.chartType==='直方圖')this.vizDataWithBarChart(nextProps,dataSheet,true);else if(nextProps.chartType==='趨勢圖')this.vizDataWithLineChart(nextProps,dataSheet,true);else if(nextProps.chartType==='圓環比例圖')this.vizDataWithRingChart(nextProps,dataSheet,true);}else if(isTopicSwitching){ // Update when topic changing.
this.DBTopicUpdate(nextProps);}else if(isTopicSwitchingByTaleUd){(function(){var steps=_this3.DBTopicStepsProducer(nextProps); // Find out the relationship between tale index and topic depth.
var incrementedTopicDepth=_this3.props.topicDepth+1,topicFirstTales=_this3.storyTeller.calTopicFirstTale(),tale=topicFirstTales.find(function(t,i){return i===incrementedTopicDepth;});_this3.storyTeller.toTell(_this3.props.topicDepth,_this3.props.topicDepth+1,steps.fwd,steps.bwd);})();}},render:function render(){ // Create element tale for info displaying.
var tale=this.DBTaleFactory();return React.createElement('div',{id:'DATABOARD_WRAPPER',className:'b20-col-md-20'},React.createElement('div',{id:'DATABOARD-vizLayer'}), /* Temp if statement */this.storyTeller._txtTaleChain?React.createElement(TagentalIndicators,{currentIndex:store.getState().get('currentTaleIndex'),indicators:this.storyTeller._txtTaleChain.sections}):null,this.storyTeller._txtTaleChain?tale:null);}});var TaleBlock=React.createClass({displayName:'TaleBlock',componentDidMount:function componentDidMount(){$v(ReactDOM.findDOMNode(this),{opacity:1},{duration:500});}, // working-spot
shouldComponentUpdate:function shouldComponentUpdate(nextProps){return true;},componentWillReceiveProps:function componentWillReceiveProps(){$v(ReactDOM.findDOMNode(this),{opacity:0},{duration:1});},componentDidUpdate:function componentDidUpdate(){$v(ReactDOM.findDOMNode(this),{opacity:1},{duration:500});},render:function render(){return React.createElement('div',{className:'tale-body',style:this.props.style},this.props.innerText);}}); // Button for controlling the tales like going to the next or back to the top.
var TaleBtn=React.createClass({displayName:'TaleBtn',componentDidMount:function componentDidMount(){$v(ReactDOM.findDOMNode(this),{opacity:1},{duration:500});},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return true;},componentWillUpdate:function componentWillUpdate(){$v(ReactDOM.findDOMNode(this),{opacity:0},{duration:1});},componentDidUpdate:function componentDidUpdate(){$v(ReactDOM.findDOMNode(this),{opacity:1},{duration:500});},render:function render(){return React.createElement('div',{className:'nextbtn',style:this.props.style,onClick:this.props.nextTale},React.createElement('span',{className:'ver-helper'}),React.createElement('span',null,this.props.msg),React.createElement('span',{className:'more-indicator'},this.props.indicator));}});var TagentalIndicators=React.createClass({displayName:'TagentalIndicators',componentDidMount:function componentDidMount(){var indicatorsHeight=this.props.indicators.length*25,indicatorsTop=(window.innerHeight-indicatorsHeight)/2;var indicatorStyle={top:indicatorsTop+'px'};$v(ReactDOM.findDOMNode(this),{top:indicatorsHeight},{duration:1000});},render:function render(){ // Tangetal Indicators should be dynamical position.
var keyIndex=0,indicators=[];var _iteratorNormalCompletion6=true;var _didIteratorError6=false;var _iteratorError6=undefined;try{for(var _iterator6=this.props.indicators[Symbol.iterator](),_step6;!(_iteratorNormalCompletion6=(_step6=_iterator6.next()).done);_iteratorNormalCompletion6=true){var ind=_step6.value;indicators.push(React.createElement(TaleIndicator,{currentIndex:this.props.currentIndex,indIndex:keyIndex,key:keyIndex++,context:ind,isSmall:ind.isTopicFirstSec?false:true}));}}catch(err){_didIteratorError6=true;_iteratorError6=err;}finally {try{if(!_iteratorNormalCompletion6&&_iterator6.return){_iterator6.return();}}finally {if(_didIteratorError6){throw _iteratorError6;}}}var initStlye={top:'100%'};return React.createElement('div',{className:'indicators',style:initStlye},indicators);}});var TagentalIndicator=React.createClass({displayName:'TagentalIndicator',render:function render(){return React.createElement('div',{className:'indicator-block',onClick:this.props.selectTale},React.createElement('div',{className:this.props.isSmall?'indicator-small':'indicator'},React.createElement(TagentalIndicatorMkr,{isActive:this.props.indIndex===this.props.currentIndex?true:false,isPassed:this.props.indIndex<this.props.currentIndex?true:false,small:this.props.isSmall})));}});var TagentalIndicatorMkr=React.createClass({displayName:'TagentalIndicatorMkr',render:function render(){return this.props.isSmall?React.createElement('div',{className:this.props.isActive?'indicator-small-marker active':this.props.isPassed?'indicator-small-marker passed':'indicator-small-marker'}):React.createElement('div',{className:this.props.isActive?'indicator-marker active':this.props.isPassed?'indicator-marker passed':'indicator-marker'});}});var Filter=React.createClass({displayName:'Filter',generateFilterFields:function generateFilterFields(){var FilterNames=this.props.filterNames;var FilterDropdownMenus=this.props.currentFilterDropdownMenus;var FilterFields=[],FilterDefaultField=[this.props.currentDataset,this.props.currentData,this.props.currentChartType,this.props.currentTopic];for(var i=0;i<FilterNames.size;i++){FilterFields.push(React.createElement(FilterField,{key:i,index:i,filterName:FilterNames.get(i),selectedOption:FilterDefaultField[i],options:FilterDropdownMenus.get(i).get('Options')}));}return FilterFields;},render:function render(){var FilterFields=this.generateFilterFields();return React.createElement('nav',{id:'FILTER_WRAPPER',className:'b12-col-md-12 b15-row-md-8 hdr-div'},React.createElement('form',{id:'FILTER',className:'b15-row-md-15'},React.createElement('div',{id:'FILTER-TITLE',className:'b15-row-md-1'},React.createElement('span',{className:'ver-helper'}),React.createElement('span',{style:{verticalAlign:'middle'}},'資料選擇')),React.createElement('div',{className:'b12-col-md-12 b15-row-md-14'},FilterFields)));}}); // FilterField Components make a way for user to select the data or the data expression they want.
var FilterField=React.createClass({displayName:'FilterField',render:function render(){return React.createElement('fieldset',{className:'b12-col-md-12 b12-row-md-3 formblock-fieldset'},React.createElement('div',{className:'b12-col-md-12 b12-row-md-12'},React.createElement('span',{className:'ver-helper'}),React.createElement('div',{className:'dropdown-group'},React.createElement('legend',{className:'dropdown-title'},React.createElement('span',null,this.props.filterName)),React.createElement('div',{className:'dropdown'},React.createElement(StatFilterDropdownToggle,{menuIndex:this.props.index,name:this.props.selectedOption}),React.createElement(StatFilterDropdownMenu,{menuIndex:this.props.index,options:this.props.options})))));}});var DropdownToggle=React.createClass({displayName:'DropdownToggle',render:function render(){return React.createElement('button',{className:'dropdown-btn',type:'button',onClick:this.props.expandDropdown},React.createElement('span',{className:this.props.name.length<=11?"dropdown-txt dropdown-txt--ft-size-12":"dropdown-txt dropdown-txt--ft-size-10"},this.props.name),React.createElement('span',{className:'dropdown-caret'}));}});var DropdownMenu=React.createClass({displayName:'DropdownMenu',render:function render(){var key=0,optionIdx=0,menuItems=[];var _iteratorNormalCompletion7=true;var _didIteratorError7=false;var _iteratorError7=undefined;try{for(var _iterator7=this.props.options[Symbol.iterator](),_step7;!(_iteratorNormalCompletion7=(_step7=_iterator7.next()).done);_iteratorNormalCompletion7=true){var option=_step7.value;menuItems.push(React.createElement(StatFilterDropdownMenuItem,{key:++key,optionIdx:optionIdx++,name:option,menuIndex:this.props.menuIndex}));}}catch(err){_didIteratorError7=true;_iteratorError7=err;}finally {try{if(!_iteratorNormalCompletion7&&_iterator7.return){_iterator7.return();}}finally {if(_didIteratorError7){throw _iteratorError7;}}}return React.createElement('ul',{className:this.props.isDisplayed?'dropdown-menu displayed':'dropdown-menu'},menuItems);}});var DropdownMenuItem=React.createClass({displayName:'DropdownMenuItem',render:function render(){return  (// Click for selecting the option
React.createElement('li',{onClick:this.props.selectOption},this.props.name));}}); /* ***** Basic components: The components that are used almost everywhere. ***** */var Logo=React.createClass({displayName:'Logo',render:function render(){return React.createElement('div',{id:'LOGO-WRAPPER',className:'b12-col-md-12 b15-row-md-5'},React.createElement(RR.Link,{to:'/'},React.createElement('div',{id:'LOGO',className:'b12-col-md-12 b12-row-md-12'})));}}); // Title components for rendering the theme image.
var Title=React.createClass({displayName:'Title',render:function render(){return React.createElement('div',{className:'b12-col-md-12 b15-row-md-1 hdr-div'},React.createElement('img',{id:'TITLE',src:this.props.imageSource}));}});var Sign=React.createClass({displayName:'Sign',render:function render(){return React.createElement('div',{id:'SIGN'},React.createElement('img',{src:'./src/sign.png'}));}});var HomeLink=React.createClass({displayName:'HomeLink',render:function render(){return React.createElement('div',{id:'HDR-FOOTER',className:'b12-col-md-12 b15-row-md-1'},React.createElement('span',{className:'ver-helper'}),React.createElement('a',{id:'HOME-LINK',href:''},'vizjust.tw'));}}); /* ***** App are the main components of all web pages  ***** */var App=React.createClass({displayName:'App',render:function render(){var _props=this.props;var nav=_props.nav;var main=_props.main;return React.createElement('div',{id:'APP'},nav,main);}});var Nav=React.createClass({displayName:'Nav',render:function render(){return React.createElement('header',{id:'HDR',className:'b20-col-md-4 b12-row-md-12 bd-right'},this.props.childrenComponents);}});var Main=React.createClass({displayName:'Main',render:function render(){return React.createElement('section',{id:'BODY',className:'b20-col-md-16 b12-row-md-12'},this.props.childrenComponents);}}); /* ***** Action Creators ***** */ /* "AC" is the postfix for action creators */function setAppNavAC(components){return {type:'SET_NAV',components:components};} // working-spot: set AppNavList
function setAppNavListAC(components){return {type:'SET_APP_NAV_IDX',components:components};}function setAppMainAC(components){return {type:'SET_MAIN',components:components};}function setThemesAC(){return {type:'SET_THEMES'};}function selectThemeAC(name){return {type:'SELECT_THEME',themeName:name};} // working-spot
function selectIntroAC(){return {type:'SELECT_INTRO'};}function expandDropdownAC(dropdownIndex){return {type:'EXPAND_DROPDOWN',dropdownIndex:dropdownIndex};}function selectDropdownOptionAC(theme,optionName,fieldsetIndex,dIndex,topicDepth){return {type:'SELECT_DROPDOWN_OPTION',theme:theme,fieldsetIndex:fieldsetIndex,dataIndex:dIndex,option:optionName, // Option maybe the name of the dataset, data, chartType or topic.
topicDepth:topicDepth};} /* Action creator for tales */function rollingTalesAC(topic,topicDepth,taleChain,taleIndex){return {type:'INCRE_TALE_IND',topic:topic,topicDepth:topicDepth,taleIndex:taleIndex,taleChain:taleChain};}function back2FirstTaleAC(taleChain){return {type:'BACK_TO_FIRST_TALE',taleChain:taleChain};}function setTaleIndexAC(index){return {type:'SET_TALE_INDEX',taleIndex:index};}function selectTaleAC(index,context){return {type:'SELECT_TALE',taleIndex:index,taleContext:context};} /* ***** Reducers ***** */var INITIAL_STATE=Map();function AppReducer(){var state=arguments.length<=0||arguments[0]===undefined?INITIAL_STATE:arguments[0];var action=arguments[1];switch(action.type){case 'SET_NAV':return setAppNavIndex(state,action.components);case 'SET_MAIN':return setAppMainIndex(state,action.components);case 'SET_THEMES':return setAppMainThemes(state); // working-spot
case 'SET_APP_NAV_IDX':return setAppNavList(state,action.components); // working-spot
case 'SELECT_INTRO':return selectIntro(state);case 'SELECT_THEME':return selectAppTheme(state,action.themeName);case 'EXPAND_DROPDOWN':return setDropdownMenuStates(state,action.dropdownIndex); // Set the tale index
case 'SET_TALE_INDEX':return setTaleIndex(state,action.taleIndex);case 'INCRE_TALE_IND':return rollingTales(state,action.topic,action.topicDepth,action.taleChain,action.taleIndex);case 'BACK_TO_FIRST_TALE':return back2FirstTale(state,action.taleChain);case 'SELECT_TALE':return selectTale(state,action.taleIndex,action.taleContext);case 'SELECT_DROPDOWN_OPTION':return selectDropdownOption(state,action.theme,action.option,action.fieldsetIndex,action.dataIndex,action.topicDepth);default:return state;}}function setAppNavIndex(state,components){var navState=Map().set('Nav',components);return state.merge(navState);} // working-spot
function setAppNavList(state,components){var navListState=Map().set('navList',components);return state.merge(navListState);}function setAppMainThemes(state){ // The 4 major themes on the Index page.
var themes=[{style:{zIndex:1000},key:0,img:"./src/police.png",path:'/police_stat',btnTxtImg:"./src/policeStatBtnName.png",infoTxtImg:"./src/police-2.png"},{style:{zIndex:900},key:1,img:"./src/prosecutor.png",path:'/prosecute_stat',btnTxtImg:"./src/proStatBtnName.png",infoTxtImg:"./src/justiceLaw86.png"},{style:{zIndex:800},key:2,img:"./src/justice.png",path:'/judicial_stat',btnTxtImg:"./src/justiceStatBtnName.png",infoTxtImg:"./src/constitution-80.png"},{style:{zIndex:700},key:3,img:"./src/correction.png",path:'/correction_stat',btnTxtImg:"./src/corrStatBtnName.png",infoTxtImg:"./src/prison-1.png"}],mainState=Immutable.Map().set('Main',function(){var themeSections=[];var _iteratorNormalCompletion8=true;var _didIteratorError8=false;var _iteratorError8=undefined;try{for(var _iterator8=themes[Symbol.iterator](),_step8;!(_iteratorNormalCompletion8=(_step8=_iterator8.next()).done);_iteratorNormalCompletion8=true){var theme=_step8.value;themeSections.push(React.createElement(Theme,{key:theme.key,info:theme.infoTxtImg,path:theme.path,style:theme.style,themeImg:theme.img,btnTxt:theme.btnTxtImg}));}}catch(err){_didIteratorError8=true;_iteratorError8=err;}finally {try{if(!_iteratorNormalCompletion8&&_iterator8.return){_iterator8.return();}}finally {if(_didIteratorError8){throw _iteratorError8;}}}return themeSections;}());return state.merge(mainState);} // working-spot
function selectIntro(state){}function selectAppTheme(state,theme){var navComponents=[React.createElement(Logo,{key:'0'}),React.createElement(StatTitle,{key:'1'}),React.createElement(StatFilter,{key:'2'}),React.createElement(HomeLink,{key:'3'})],mainComponents=[React.createElement(StatDataBoard,{key:'0'})];var navState=Map().set('Nav',navComponents);var mainState=Map().set('Main',mainComponents); // The name of each filter field.
var filterNames=setState('filterNames',List(['資料集','檢索資料','視覺化','專題']));var themeState=null;var statTitle=null;var defaultDataset=null;var defaultData=null;var defaultChartType=null;var defaultTopic=null;var defaultTaleIndex=null; // Topic depth defines how deep the user drilling into the data.
var defaultTopicDepth=null; // A control state to decide the viz data board refresh or not.
var defaultDataBoardUpdateSet=setState('updateDataBoard',true);var defaultFilterDropdownMenus=null;switch(theme){case 'POLICE_STAT':themeState=setState('theme','police');statTitle=setState('statTitleImageSrc','./src/policeStatTitle-160px.png');defaultDataset=setState('currentDataset','竊盜案件');defaultData=setState('currentData','合計發生件數');defaultChartType=setState('currentChartType','直方圖');defaultTopic=setState('currentTopic','案件總數');defaultTopicDepth=setState('currentTopicDepth',0);defaultTaleIndex=setState('currentTaleIndex',0); // Set the default dropdown menu and its option.
defaultFilterDropdownMenus=_setDefaultDropdownMenus('police');return state.merge(navState,mainState,themeState,statTitle,filterNames,defaultDataset,defaultData,defaultChartType,defaultTopic,defaultTopicDepth,defaultFilterDropdownMenus,defaultTaleIndex,defaultDataBoardUpdateSet);case 'PROSECUTION_STAT':themeState=setState('theme','prosecution');statTitle=setState('statTitleImageSrc','./src/prosecuteStatTitle-160px.png');defaultDataset=setState('currentDataset','殺人罪');defaultData=setState('currentData','被告人數');defaultChartType=setState('currentChartType','直方圖');defaultTopic=setState('currentTopic','總數');defaultTopicDepth=setState('currentTopicDepth',0);defaultTaleIndex=setState('currentTaleIndex',0);defaultFilterDropdownMenus=_setDefaultDropdownMenus('prosecution');return state.merge(navState,mainState,themeState,statTitle,filterNames,defaultDataset,defaultData,defaultChartType,defaultTopic,defaultTopicDepth,defaultFilterDropdownMenus,defaultTaleIndex,defaultDataBoardUpdateSet);case 'JUDICIAL_STAT':themeState=setState('theme','judicial');statTitle=setState('statTitleImageSrc','./src/judgeStatTitle-160px.png');defaultDataset=setState('currentDataset','地方法院刑事案件收結情形');defaultData=setState('currentData','案件數');defaultChartType=setState('currentChartType','直方圖');defaultTopic=setState('currentTopic','受理件數');defaultTopicDepth=setState('currentTopicDepth',0);defaultTaleIndex=setState('currentTaleIndex',0);defaultFilterDropdownMenus=_setDefaultDropdownMenus('judicial');return state.merge(navState,mainState,themeState,statTitle,filterNames,defaultDataset,defaultData,defaultChartType,defaultTopic,defaultTopicDepth,defaultFilterDropdownMenus,defaultTaleIndex,defaultDataBoardUpdateSet);case 'CORRECTION_STAT':themeState=setState('theme','correction');statTitle=setState('statTitleImageSrc','./src/correctStatTitle-160px.png');defaultDataset=setState('currentDataset','監獄人數概況');defaultData=setState('currentData','本年執行人數');defaultChartType=setState('currentChartType','直方圖');defaultTopic=setState('currentTopic','總數');defaultTopicDepth=setState('currentTopicDepth',0);defaultTaleIndex=setState('currentTaleIndex',0);defaultFilterDropdownMenus=_setDefaultDropdownMenus('correction');return state.merge(navState,mainState,statTitle,filterNames,themeState,defaultDataset,defaultData,defaultChartType,defaultTopic,defaultTopicDepth,defaultFilterDropdownMenus,defaultTaleIndex,defaultDataBoardUpdateSet);default:return state;} // Set the default dropdown menus with initial state.
function _setDefaultDropdownMenus(theme){var dropdownMenus=setState('filterDropdownMenus',List([Map().set('Options',List(DataFilterStateTree.listDataset(theme))).set('isDisplayed',false),Map().set('Options',List(DataFilterStateTree.listData(theme,0))).set('isDisplayed',false),Map().set('Options',List(DataFilterStateTree.listCharttype(theme,0))).set('isDisplayed',false),Map().set('Options',List(DataFilterStateTree.listTopic(theme,0,0,0))).set('isDisplayed',false)]));return dropdownMenus;}} // Expand the dropdown and the rest should all collpased.
function setDropdownMenuStates(state,index){ // update the states of the current dropdown.
var newState=state.get('filterDropdownMenus').update(function(Menus){ // Renew each of the dropdown state
for(var j=0;j<Menus.size;++j){var originMenuOptions=Menus.get(j).get('Options');if(j===index){Menus=Menus.set(index,Map().set('isDisplayed',true).set('Options',List(originMenuOptions)));}else {Menus=Menus.set(j,Map().set('isDisplayed',false).set('Options',List(originMenuOptions)));}}return Menus;});return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus',newState));} /* Option selecting reducser and its related function. */ /* Basic selecting option reducer:
		state:
			state of the current app
		theme: 
			Name of the theme, like police, prosecution, judicial and corrrection.
		optionName: 
			the option that user chosen on
		fieldsetIndex: The index of the selector. 
			0: dataset
			1: data
			2: chartType
			3: topic
			
		dataIdx:
			Index of the data
 */ // Update the dropdown menu. 
function selectDropdownOption(state,theme,optionName,fieldsetIndex,dataIdx,topicDepth){var newDataset=null;var newData=null;var newChartType=null;var newTopic=null;var newDropdownMenuStates=null;var newTaleIndex=null;var shoudDataBoardUpdate=setState('updateDataBoard',true); // Topic depth define how much info for users to read.
var newTopicDepth=null;var currentState=store.getState(); // Create an initial collpased state for all menus.
var collapsedAllDropdownMenuStates=setState('filterDropdownMenus',setAllDropdownCollapsed(currentState)); // Fetch the prepared states 
var stateTree=DataFilterStateTree.state.get(theme);var datasetIndex=DataFilterStateTree.findDatasetIndex(theme,optionName);if(theme==='police')return _FilterRenderDispatcher(state,theme,optionName,fieldsetIndex,datasetIndex);else if(theme==='prosecution')return _FilterRenderDispatcher(state,theme,optionName,fieldsetIndex,datasetIndex);else if(theme==='judicial')return _FilterRenderDispatcher(state,theme,optionName,fieldsetIndex,datasetIndex);else if(theme==='correction')return _FilterRenderDispatcher(state,theme,optionName,fieldsetIndex,datasetIndex); // The process of how filter reacts when user click any of its options.
function _FilterRenderDispatcher(state,theme,optionName,fieldsetIndex,datasetIndex){ // Select the dataset
if(fieldsetIndex===0){if(currentState.get('currentDataset')!==optionName){var newState=__datasetSwitchRendering(theme,optionName,datasetIndex);return state.merge(newState.dataset,newState.data,newState.chartType,newState.topic,newState.topicDepth,newState.taleIndex,newState.dropdownMenuStates,shoudDataBoardUpdate);}return state.merge(collapsedAllDropdownMenuStates,shoudDataBoardUpdate);} // Selecting data
else if(fieldsetIndex===1){if(currentState.get('currentData')!==optionName){var newState=__dataSwitchRendering(state,theme,optionName);return state.merge(newState.data,newState.topic,newState.topicDepth,newState.taleIndex,newState.dropdownMenuStates,shoudDataBoardUpdate);}return state.merge(collapsedAllDropdownMenuStates,shoudDataBoardUpdate);} // Selecting the charttype which will affect the topics.
else if(fieldsetIndex===2){if(currentState.get('currentChartType')!==optionName){var newState=__chartTypeSwitchRendering(state,optionName,fieldsetIndex);return state.merge(newState.chartType,newState.topic,newState.taleIndex,newState.dropdownMenuStates,shoudDataBoardUpdate);}return state.merge(collapsedAllDropdownMenuStates,shoudDataBoardUpdate);} // Selection the topic
else if(fieldsetIndex===3){if(currentState.get('currentTopic')!==optionName){newTopic=setState('currentTopic',optionName);newTopicDepth=setState('currentTopicDepth',topicDepth); // The tale index should be correspond to the topic.
// We have to come up an idea to solve this.
newTaleIndex=setState('currentTaleIndex',0);return state.merge(newTopic,newTopicDepth,newTaleIndex,collapsedAllDropdownMenuStates,shoudDataBoardUpdate);}return state.merge(collapsedAllDropdownMenuStates,shoudDataBoardUpdate);}return state;} // Rerender the dataset and its related options of different fields
function __datasetSwitchRendering(theme,optionName,datasetIndex){ // Update the current dataset state to the chosen one
var newDataset=setState('currentDataset',optionName); // Render the first available data beneath the dataset.
var newData=setState('currentData',stateTree.get(datasetIndex).content.data[0].name); // Render the first available chartType beneath the dataset.
var newChartType=setState('currentChartType',stateTree.get(datasetIndex).availableChartTypes[0]); // Render the first available topic beneath the dataset and chartType.
var newTopic=setState('currentTopic',stateTree.get(datasetIndex).content.data[0].topics[0][0].name); // Set the new topic depth to 0
var newTopicDepth=setState('currentTopicDepth',0);var newTaleIndex=setState('currentTaleIndex',0); // Set up the states for the dropdowns.
var newDropdownMenuStates=setState('filterDropdownMenus',List([ // Options for the dataset
Map().set('Options',List(DataFilterStateTree.listDataset(theme))).set('isDisplayed',false), // Options for the data
Map().set('Options',List(DataFilterStateTree.listData(theme,datasetIndex))).set('isDisplayed',false), // Options for the graph
Map().set('Options',List(DataFilterStateTree.listCharttype(theme,datasetIndex))).set('isDisplayed',false), // Options for the topics
Map().set('Options',List(DataFilterStateTree.listTopic(theme,datasetIndex,0,0))).set('isDisplayed',false)]));return {dataset:newDataset,data:newData,chartType:newChartType,topic:newTopic,topicDepth:newTopicDepth,taleIndex:newTaleIndex,dropdownMenuStates:newDropdownMenuStates};}function __dataSwitchRendering(state,theme,dataName){var datasetName=state.get('currentDataset');var datasetIndex=DataFilterStateTree.findDatasetIndex(theme,datasetName);var dataIndex=DataFilterStateTree.findDataIndex(theme,datasetName,dataName);var chartTypeIndex=DataFilterStateTree.findChartTypeIndex(theme,datasetName,state.get('currentChartType'));var newData=setState('currentData',dataName);var newTopic=setState('currentTopic',stateTree.get(datasetIndex).content.data[dataIndex].topics[chartTypeIndex][0].name);var newTopicDepth=setState('currentTopicDepth',0);var newTaleIndex=setState('currentTaleIndex',0); // Switch data will change the available topics
var newDropdownMenuStates=setState('filterDropdownMenus',updateTopicDropdownOption(state,dataName,null));return {data:newData,topic:newTopic,topicDepth:newTopicDepth,taleIndex:newTaleIndex,dropdownMenuStates:newDropdownMenuStates};}function __chartTypeSwitchRendering(state,chartType,fieldsetIndex){var newChartType=setState('currentChartType',optionName);var newTopicDepth=setState('currentTopicDepth',0);var newDropdownMenuStates=setState('filterDropdownMenus',updateTopicDropdownOption(state,null,chartType));var newTaleIndex=setState('currentTaleIndex',0); // Update current topic
var newTopic=setState('currentTopic',newDropdownMenuStates.get('filterDropdownMenus').get(fieldsetIndex+1).get('Options').get(0));return {chartType:newChartType,topic:newTopic,taleIndex:newTaleIndex,dropdownMenuStates:newDropdownMenuStates};}} /* Related function of selecting option: Collapse all dropdown menu */function setAllDropdownCollapsed(state){var newState=state.get('filterDropdownMenus').update(function(Menus){ // Renew each of the dropdown state
for(var j=0;j<Menus.size;++j){var originMenuOptions=Menus.get(j).get('Options');Menus=Menus.set(j,Map().set('isDisplayed',false).set('Options',originMenuOptions));}return Menus;});return newState;} /* 
	 Related function of selecting option: Collapse all dropdown menu
	 Data and charttype have relation with topics
 */function updateTopicDropdownOption(state,dataName,chartName){var key=state.get('theme');var currentDataset=state.get('currentDataset'); // If user is operating data selector. 
var currentData=dataName?dataName:state.get('currentData'); // If user is operating chart selector.
var currentChartType=chartName?chartName:state.get('currentChartType');var newState=state.get('filterDropdownMenus').update(function(Menus){var datasetIndex=DataFilterStateTree.findDatasetIndex(key,currentDataset);var dataIndex=DataFilterStateTree.findDataIndex(key,currentDataset,currentData);var chartIndex=DataFilterStateTree.findChartTypeIndex(key,currentDataset,currentChartType);var topics=List(DataFilterStateTree.listTopic(key,datasetIndex,dataIndex,chartIndex));return Menus.set(1,Map().set('isDisplayed',false).set('Options',Menus.get(1).get('Options'))).set(2,Map().set('isDisplayed',false).set('Options',Menus.get(2).get('Options'))).set(3,Map().set('isDisplayed',false).set('Options',topics));});return newState;}function rollingTales(state,topic,topicDepth,taleChain,taleIndex){var newTaleIndex=setState('currentTaleIndex',taleIndex+1);var updateDataBoard=setState('updateDataBoard',true); // Check up whether the next tale is the new topic's first tale.
var nextTale=taleChain.sections[taleIndex+1];if(nextTale.isTopicFirstSec){var newTopic=setState('currentTopic',nextTale.topicName);var newTopicDepth=setState('currentTopicDepth',state.get('currentTopicDepth')+1);return state.merge(newTaleIndex,newTopic,newTopicDepth,updateDataBoard);}else return state.merge(newTaleIndex,updateDataBoard);} // working-spot
function selectTale(state,taleIndex,taleContext){var newTaleIndex=setState('currentTaleIndex',taleIndex);var newTopic=setState('currentTopic',taleContext.topicName?taleContext.topicName:state.get('currentTopic')); // Find out the topic depth
var topicList=state.get('filterDropdownMenus').get(3).get('Options').toArray();var topicDepth=topicList.findIndex(function(topic){return taleContext.topicName===topic;});var newTopicDepth=setState('currentTopicDepth',topicDepth>-1?topicDepth:state.get('currentTopicDepth'));var updateDataBoard=setState('updateDataBoard',true);return state.merge(newTaleIndex,newTopic,newTopicDepth,updateDataBoard);}function back2FirstTale(state,taleChain){var newTaleIndex=setState('currentTaleIndex',0);var newTopic=setState('currentTopic',taleChain.sections[0].topicName);var newTopicDepth=setState('currentTopicDepth',0);var updateDataBoard=setState('updateDataBoard',true);return state.merge(newTaleIndex,newTopic,newTopicDepth,updateDataBoard);}function setTaleIndex(state,taleIndex){var newTaleIndex=setState('currentTaleIndex',taleIndex); // working-spot
var updateDataBoard=setState('updateDataBoard',false);return state.merge(newTaleIndex,updateDataBoard); // return state.merge(newTaleIndex)
} // Create a immutable Map object as state
function setState(key,value){return Map().set(key,value);} /* ***** Mapping the things from container components to prsentational components ***** */ /* Connect the redux's app state to Nav Component. */var mapStateToAppNavProps=function mapStateToAppNavProps(state){return {childrenComponents:state.get('Nav')};};var AppNav=RRd.connect(mapStateToAppNavProps,null)(Nav); // working-spot
/* Connect the redux's app state to IndexNavList Component. */var mapStateToAppNavList=function mapStateToAppNavList(state){return {listItems:state.get('navList')};};var AppNavList=RRd.connect(mapStateToAppNavList,null)(IndexNavList); /* Connect the redux's app state to Main Component. */var mapStateToAppMainProps=function mapStateToAppMainProps(state){return {childrenComponents:state.get('Main')};};var AppMain=RRd.connect(mapStateToAppMainProps,null)(Main); /* Connect the redux's app state to ThemeBtn. */var ThemeButton=RRd.connect(null,null)(ThemeBtn); /* Connect Title Component with redux app state */var mapStateToTitleProps=function mapStateToTitleProps(state){return {imageSource:state.get('statTitleImageSrc')};};var StatTitle=RRd.connect(mapStateToTitleProps,null)(Title); /* Connect Fliter Component with redux app state. */ /* Connect DropdownToggle */var mapDispatchToDropdownToggle=function mapDispatchToDropdownToggle(dispatch,props){return {expandDropdown:function expandDropdown(e){dispatch(expandDropdownAC(props.menuIndex));}};};var StatFilterDropdownToggle=RRd.connect(null,mapDispatchToDropdownToggle)(DropdownToggle); /* Connect DropdownMenu */ // Determine the dropdwon is displayed or not.
var mapStateToDropdownMenuProps=function mapStateToDropdownMenuProps(state,props){return {isDisplayed:state.get('filterDropdownMenus').get(props.menuIndex).get('isDisplayed')};};var StatFilterDropdownMenu=RRd.connect(mapStateToDropdownMenuProps,null)(DropdownMenu); /* Connect DropdownMenuItem */var mapDispatchToDropdownMenuItemBtnProps=function mapDispatchToDropdownMenuItemBtnProps(dispatch,props){return {selectOption:function selectOption(e){var key=store.getState().get('theme'); // Data is bounding with topics so th
if(props.menuIndex===1)dispatch(selectDropdownOptionAC(key,props.name,props.menuIndex,props.optionIdx,0)); // The topic user clicks on determines the depth.
else if(props.menuIndex===3)dispatch(selectDropdownOptionAC(key,props.name,props.menuIndex,props.optionIdx,props.optionIdx));else {dispatch(selectDropdownOptionAC(key,props.name,props.menuIndex,props.optionIdx,0));}}};};var StatFilterDropdownMenuItem=RRd.connect(null,mapDispatchToDropdownMenuItemBtnProps)(DropdownMenuItem);var mapStateToFilterProps=function mapStateToFilterProps(state){return {filterNames:state.get('filterNames'),currentDataset:state.get('currentDataset'),currentData:state.get('currentData'),currentChartType:state.get('currentChartType'),currentTopic:state.get('currentTopic'),currentFilterDropdownMenus:state.get('filterDropdownMenus')};};var StatFilter=RRd.connect(mapStateToFilterProps,null)(Filter); /* Connect DataBoard */var mapStateToDataBoardProps=function mapStateToDataBoardProps(state){return {dataset:state.get('currentDataset'),data:state.get('currentData'),chartType:state.get('currentChartType'),topic:state.get('currentTopic'),topicDepth:state.get('currentTopicDepth'),taleIndex:state.get('currentTaleIndex'),updateDataBoard:state.get('updateDataBoard')};};var StatDataBoard=RRd.connect(mapStateToDataBoardProps,null)(DataBoard); /* Connect more tale button */var mapDispatchToNextBtn=function mapDispatchToNextBtn(dispatch,props){return {nextTale:function nextTale(e){dispatch(rollingTalesAC(props.topic,props.topicDepth,props.taleChain,props.taleIndex));}};};var NextTaleBtn=RRd.connect(null,mapDispatchToNextBtn)(TaleBtn);var mapDispatchToEndBtn=function mapDispatchToEndBtn(dispatch,props){return {nextTale:function nextTale(e){ // working-spot: Back to start tale
dispatch(back2FirstTaleAC(props.taleChain));}};};var EndTaleBtn=RRd.connect(null,mapDispatchToEndBtn)(TaleBtn); /* Connect Indicator */var mapDispatchToIndicators=function mapDispatchToIndicators(dispatch,props){return {selectTale:function selectTale(e){ // working-spot
dispatch(selectTaleAC(props.indIndex,props.context));}};};var TaleIndicator=RRd.connect(null,mapDispatchToIndicators)(TagentalIndicator); /* ***** Store: For handling the states of the App.***** */var store=Re.createStore(AppReducer);ReactDOM.render(React.createElement(RRd.Provider,{store:store},React.createElement(RR.Router,{history:RR.hashHistory},React.createElement(RR.Route,{component:App},React.createElement(RR.Route,{path:'/',getComponents:function getComponents(nextState,cb){ // worling-spot: Set the nav list for initializing index page.
store.dispatch(setAppNavListAC([React.createElement(RR.Link,{to:'/aboutus'},React.createElement('img',{src:'./src/aboutus.png'})), /* 
							<RR.Link to='/main'>
								<img src="./src/see.png" />
							</RR.Link>,
							<RR.Link to='/special'>
								<img src="./src/issue.png" />
							</RR.Link>,
							<RR.Link to='/work_together'>
								<img src="./src/work.png" />
							</RR.Link>, */ // <img src="./src/aboutus.png"  onClick={ this.pageHasNotFinished }/>,
React.createElement('img',{src:'./src/see.png'}),React.createElement('img',{src:'./src/issue.png'}),React.createElement('img',{src:'./src/work.png'}),React.createElement('div',{className:'social-group'},React.createElement('iframe',{id:'githubStar',className:'social-btn',src:'https://ghbtns.com/github-btn.html?user=yudazilian&repo=VisualJusticeTW&type=star&count=true',frameborder:'0',scrolling:'0',width:'170px',height:'20px'}))])); /* Set up the initial index page for nav side. */store.dispatch(setAppNavAC([React.createElement(Logo,{key:'0'}), // <IndexNavList key='1'/>,
React.createElement(AppNavList,{key:'1'}),React.createElement(Sign,{key:'2'}),React.createElement(HomeLink,{key:'3'})]));store.dispatch(setThemesAC());cb(null,{nav:AppNav,main:AppMain});}}),React.createElement(RR.Route,{path:'/aboutus',getComponents:function getComponents(nextState,cb){ // working-spot: Set the nav list 
store.dispatch(setAppNavListAC([React.createElement('img',{src:'./src/foundstory-125px.png'}),React.createElement('img',{src:'./src/logointro-125px.png'}),React.createElement('img',{src:'./src/memberintro-125px.png'}),React.createElement('img',{src:'./src/vision-125px.png'}),React.createElement('div',{className:'social-group'},React.createElement('iframe',{id:'githubStar',className:'social-btn',src:'https://ghbtns.com/github-btn.html?user=yudazilian&repo=VisualJusticeTW&type=star&count=true',frameborder:'0',scrolling:'0',width:'170px',height:'20px'}))])); // working-spot: set up the intro theme
store.dispatch(setAppNavAC([React.createElement(Logo,{key:'0'}),React.createElement(AppNavList,{key:'1'}),React.createElement(Sign,{key:'2'}),React.createElement(HomeLink,{key:'3'})]));cb(null,{nav:AppNav,main:AppMain});}}),React.createElement(RR.Route,{path:'/police_stat',getComponents:function getComponents(nextState,cb){store.dispatch(selectThemeAC('POLICE_STAT'));cb(null,{nav:AppNav,main:AppMain});}}),React.createElement(RR.Route,{path:'/prosecute_stat',getComponents:function getComponents(nextState,cb){store.dispatch(selectThemeAC('PROSECUTION_STAT'));cb(null,{nav:AppNav,main:AppMain});}}),React.createElement(RR.Route,{path:'/judicial_stat',getComponents:function getComponents(nextState,cb){store.dispatch(selectThemeAC('JUDICIAL_STAT'));cb(null,{nav:AppNav,main:AppMain});}}),React.createElement(RR.Route,{path:'/correction_stat',getComponents:function getComponents(nextState,cb){ /* Routes to the correction statistic page when the url match. */store.dispatch(selectThemeAC('CORRECTION_STAT'));cb(null,{nav:AppNav,main:AppMain});}})))),document.getElementById('CONTAINER'));
