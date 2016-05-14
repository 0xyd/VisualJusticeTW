'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* ***** Import Libraries ***** */
var Re = Redux,
    RR = ReactRouter,
    RRd = ReactRedux;

/* ***** The Immutables ***** */
var Map = Immutable.Map,
    List = Immutable.List;

/* ***** Global Variables ***** */
window.isLocal = document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

// To access the remove csv sources.
window.query = '&tqx=out:csv';
window.googleSheet = 'https://spreadsheets.google.com/tq?';

/* States for different topic */
/*
	Properties:
		dataset: the name of the dataset
		extl: 
			the data is not included in the original dataset which
			should be called externally.
		intl: 
			the data chosen from the dataset for further explanation or operations.
*/
var DataFilterStateTree = {
	state: Map()
	// State of Police Data Selector
	.set('police', List([{
		dataset: '竊盜案件',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '合計發生件數',
				topics: [[{
					name: '案件總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}, {
					name: '破獲與尚未破獲',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '破獲率',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}]]
			}, {
				name: '重大竊盜發生件數',
				topics: [[{
					name: '案件總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}, {
					name: '破獲與尚未破獲',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '破獲率',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}]]
			}, {
				name: '普通竊盜發生件數',
				topics: [[{
					name: '案件總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}, {
					name: '破獲與尚未破獲',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '破獲率',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}]]
			}, {
				name: '汽車竊盜發生件數',
				topics: [[{
					name: '案件總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}, {
					name: '破獲與尚未破獲',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '破獲率',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}]]
			}, {
				name: '機車竊盜發生輛數',
				topics: [[{
					name: '案件總數',
					axes: {
						x: '民國',
						y: '車輛數'
					}
				}, {
					name: '破獲與尚未破獲',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '破獲率',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}]]
			}]
		}
	}, {
		dataset: '暴力犯罪案件',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '故意殺人發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '擄人勒贖發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '強盜發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '搶奪發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '重傷害發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '恐嚇取財發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '強制性交發生件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
		}
	}, {
		dataset: '毒品案件',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '嫌疑犯人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '查獲第一級毒品數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '毒品數'
					}
				}, {
					name: '相較他級毒品'
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '查獲第二級毒品數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '毒品數'
					}
				}, {
					name: '相較他級毒品'
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '查獲第三級毒品數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '毒品數'
					}
				}, {
					name: '相較他級毒品'
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '查獲第四級毒品數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '毒品數'
					}
				}, {
					name: '相較他級毒品'
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
		}
	}]))

	// State of Prosecution Data Selector
	.set('prosecution', List([{
		dataset: '殺人罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				// exceptHeaders are excluded from the current data statistic.
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '兒童及少年性交易防制條例',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '竊盜罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '擄人勒贖罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '恐嚇罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '槍砲彈藥刀械管制條例',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '公共危險罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '貪污罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}, {
		dataset: '瀆職罪',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '被告人數',
				exceptHeaders: ['保安處分人數', '緩刑人數', '累犯人數', '民國'],
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '各刑名統計',
					axes: {
						x: '民國',
						y: '人數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
					}
				}, {
					name: '各刑名百分比',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], []]
			}]
		}
	}]))
	// State of judicial data selector
	.set('judicial', List([{
		dataset: '地方法院刑事案件收結情形',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '案件數',
				exceptHeaders: ['民國', '終結', '未結', '終結案件中平均一件所需日數', '平均每法官每月辦結件數', '上訴案件維持率', '抗告案件維持率'],
				topics: [[{
					name: '受理件數',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: null
					}
				}, {
					name: '新收與舊受',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['舊受', '新受']
					}
				}, {
					name: '新收與舊受百分比',
					axes: {
						x: '民國',
						y: '百分比'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['舊受', '新受']
					}
				}, {
					name: '終結與未結',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['終結', '未結']
					}
				}, {
					name: '終結與未結百分比',
					axes: {
						x: '民國',
						y: '百分比'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['終結', '未結']
					}
				}], []]
			}, {
				// working-spot-2
				name: '終結案件中平均一件所需日數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '天數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '平均每法官每月辦結件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '上訴案件維持率',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '抗告案件維持率',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
		}
	}, {
		dataset: '高等法院刑事案件收結情形',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '案件數',
				exceptHeaders: ['民國', '終結', '未結', '終結案件中平均一件所需日數', '平均每法官每月辦結件數', '上訴案件維持率', '抗告案件維持率'],
				topics: [[{
					name: '受理件數',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: null
					}
				}, {
					name: '新收與舊受',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['舊受', '新受']
					}
				}, {
					name: '新收與舊受百分比',
					axes: {
						x: '民國',
						y: '百分比'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['舊受', '新受']
					}
				}, {
					name: '終結與未結',
					axes: {
						x: '民國',
						y: '案件數'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['終結', '未結']
					}
				}, {
					name: '終結與未結百分比',
					axes: {
						x: '民國',
						y: '百分比'
					},
					extl: {
						headers: null
					},
					intl: {
						headers: ['終結', '未結']
					}
				}], []]
			}, {
				// working-spot-2
				name: '終結案件中平均一件所需日數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '天數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '平均每法官每月辦結件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '上訴案件維持率',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '抗告案件維持率',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '百分比'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
			// data: [
			// 	{
			// 		name: '舊受',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '案件數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '新受',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '案件數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '終結',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '案件數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '未結',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '案件數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '終結案件中平均一件所需日數',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '天數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]

			// 	},
			// 	{
			// 		name: '平均每法官每月辦結件數',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '案件數'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '上訴案件維持率',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '百分比'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	},
			// 	{
			// 		name: '抗告案件維持率',
			// 		topics: [
			// 			[
			// 				{
			// 					name: '總數',
			// 					axes: {
			// 						x: '民國',
			// 						y: '百分比'
			// 					}
			// 			}]
			// 			,
			// 			[
			// 				{
			// 					name: '趨勢',
			// 					axes: {
			// 						x: '民國',
			// 						y: '人數'
			// 					}
			// 				}
			// 			]
			// 		]
			// 	}
			// ]
		}
	}, {
		dataset: '最高法院刑事案件收結情形',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '舊受',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '新受',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '終結',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '案件數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '未結',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '終結案件中平均一件所需日數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '天數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '平均每法官每月辦結件數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}], [{
					name: '趨勢',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
		}
	}]))
	// State of correction data selector
	.set('correction', List([{
		dataset: '監獄人數概況',
		availableChartTypes: ['直方圖', '趨勢圖'],
		content: {
			data: [{
				name: '本年執行人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					},
					intl: {
						headers: ['本年執行人數']
					},
					extl: {
						url: null
					}
				}, {
					name: '組成',
					axes: {
						x: '民國',
						y: '人數'
					},
					intl: {
						headers: ['上年底留監人數', '本年入監人數']
					},
					extl: {
						url: null
					}
				}, {
					name: '組成百分比',
					axes: {
						x: '民國',
						y: '百分比'
					},
					intl: {
						headers: ['上年底留監人數', '本年入監人數']
					},
					extl: {
						url: null
					}
				}], [{
					name: '減刑',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '本年入監人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, '入監原因分類'], [{
					name: '減刑',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]

			}, {
				name: '新入監人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, {
					name: '犯次分類',
					axes: {
						x: '民國',
						y: '人數'
					},

					extl: {
						url: function () {
							if (isLocal) return './correction/新入監犯罪次數與種類.csv';else return window.googleSheet + '17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg' + window.query;
						}(),
						headers: ['初犯', '再犯', '累犯']
					},
					intl: {
						headers: null
					}
				}, {
					name: '犯次分類比例',
					axes: {
						x: '民國',
						y: '百分比'
					},
					extl: {
						headers: ['初犯', '再犯', '累犯']
					},
					intl: {
						headers: null
					}
				}], [{
					name: '減刑',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '本年出獄人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}, '出獄原因分類'], [{
					name: '減刑',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}, {
				name: '本年年底留監人數',
				topics: [[{
					name: '總數',
					axes: {
						x: '民國',
						y: '人數'
					}
				}], [{
					name: '減刑',
					axes: {
						x: '民國',
						y: '人數'
					}
				}]]
			}]
		}
	}, {
		dataset: '新入監資料概覽',
		availableChartTypes: ['圓環比例圖'],
		content: {
			data: [{
				name: '民國75年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國76年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國77年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國78年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國79年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國80年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]

			}, {
				name: '民國81年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國82年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國83年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '民國84年',
				data: ['總覽', '新入監前家庭狀況', '新入監前犯罪次數與種類', '新入監前教育程度', '新入監年齡統計'],
				topics: [[{
					name: '總數'
				}]]
			}, {
				name: '85'
			}, {
				name: '86'
			}, {
				name: '87'
			}, {
				name: '88'
			}, {
				name: '89'
			}, {
				name: '90'
			}, {
				name: '91'
			}, {
				name: '92'
			}, {
				name: '93'
			}, {
				name: '94'
			}, {
				name: '95'
			}, {
				name: '96'
			}]
		}
	}])),

	// key: the name of the theme.
	selectState: function selectState(key) {
		return this.state.get(key);
	},

	// Find the index of the specific dataset
	findDatasetIndex: function findDatasetIndex(key, datasetName) {

		var state = this.selectState(key);

		// Transform the List to js array
		var list = state.toArray();

		return list.findIndex(function (d) {
			return d.dataset === datasetName;
		});
	},

	// Find the index of the data in the chosen dataset.
	findDataIndex: function findDataIndex(key, datasetName, dataName) {

		var state = this.selectState(key);

		var index = this.findDatasetIndex(key, datasetName),
		    dataList = state.get(index).content.data;

		return dataList.findIndex(function (data) {
			return data.name === dataName;
		});
	},

	// Find the data.
	findData: function findData(key, datasetName, dataName) {

		var state = this.selectState(key);

		var index = this.findDatasetIndex(key, datasetName),
		    dataList = state.get(index).content.data;

		return dataList.find(function (data) {
			return data.name === dataName;
		});
	},

	// Find the index of the chart type in the chosen dataset.
	findChartTypeIndex: function findChartTypeIndex(key, datasetName, chartName) {

		var state = this.selectState(key);

		var index = this.findDatasetIndex(key, datasetName),
		    chartList = state.get(index).availableChartTypes;

		return chartList.findIndex(function (chart) {
			return chart === chartName;
		});
	},

	// List the dataset
	listDataset: function listDataset(key) {

		var state = this.selectState(key);

		var datasets = [];

		for (var i = 0; i < state.size; ++i) {
			datasets.push(state.get(i).dataset);
		}

		return datasets;
	},

	// List the available data
	listData: function listData(key, datasetIdx) {

		var state = this.selectState(key);

		var datas = state.get(datasetIdx).content.data.map(function (d) {
			return d.name;
		});

		return datas;
	},

	listCharttype: function listCharttype(key, datasetIdx) {

		var state = this.selectState(key);

		var charttypes = state.get(datasetIdx).availableChartTypes;

		return charttypes;
	},

	listTopic: function listTopic(key, datasetIdx, dataIdx, chartIndex) {

		var state = this.selectState(key);

		var topics = state.get(datasetIdx).content.data[dataIdx].topics[chartIndex].map(function (topicInfo) {
			return topicInfo.name;
		});

		return topics;
	},

	// Find topic
	findTopic: function findTopic(key, datasetName, dataName, chartTypeName, topicName) {

		var state = this.selectState(key);

		var _datasetIndex = this.findDatasetIndex(key, datasetName);
		var _dataIndex = this.findDataIndex(key, datasetName, dataName);
		var _chartTypeIndex = this.findChartTypeIndex(key, datasetName, chartTypeName);

		return state.get(_datasetIndex).content.data[_dataIndex].topics[_chartTypeIndex].find(function (topic) {
			return topic.name === topicName;
		});
	}
};

/* Story Telleller */

var StoryTeller = function () {
	function StoryTeller() {
		_classCallCheck(this, StoryTeller);

		/* * Story Chains define how the animations work each time user switch a topic. * */
		/*
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
  	*/
		this.storyChains = [
		// For prosecution stories
		{
			datasets: ['殺人罪', '兒童及少年性交易防制條例', '竊盜罪', '擄人勒贖罪', '恐嚇罪', '槍砲彈藥刀械管制條例', '公共危險罪', '貪污罪', '瀆職罪'],
			data: '被告人數',
			vizType: '直方圖',
			fwdSteps: [{
				goto: '各刑名統計',
				transit: function transit(_this, params) {
					return _this.transBarToStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '各刑名百分比',
				transit: function transit(_this, params) {
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}],

			bwdSteps: [{
				goto: '總數',
				transit: function transit(_this, params) {
					return _this.transStackBarToBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '各刑名統計',
				transit: function transit(_this, params) {
					return _this.transPCTToOriginStackBar.apply(_this, params);
				},
				end: null
			}]
		},
		// For judicial stories
		{
			datasets: ['地方法院刑事案件收結情形', '高等法院刑事案件收結情形'],
			data: '案件數',
			vizType: '直方圖',
			fwdSteps: [{
				goto: '新收與舊受',
				transit: function transit(_this, params) {
					return _this.transBarToStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '新收與舊受百分比',
				transit: function transit(_this, params) {
					// working-spot-2
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}, {
				goto: '終結與未結',
				transit: function transit(_this, params) {
					// working-spot-2
					return _this.transPCTToStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '終結與未結百分比',
				transit: function transit(_this, params) {
					// working-spot-2
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}],
			bwdSteps: [{
				goto: '受理件數',
				transit: function transit(_this, params) {
					return _this.transStackBarToBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '新收與舊受',
				transit: function transit(_this, params) {
					return _this.transPCTToOriginStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '新收與舊受百分比',
				transit: function transit(_this, params) {
					// working-spot-2
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}, {
				goto: '終結與未結',
				transit: function transit(_this, params) {
					// working-spot-2
					return _this.transPCTToStackBar.apply(_this, params);
				},
				end: null
			}]
		},
		// For correction stories
		{
			dataset: '監獄人數概況',
			data: '本年執行人數',
			vizType: '直方圖',

			fwdSteps: [{
				goto: '組成',
				transit: function transit(_this, params) {
					return _this.transBarToStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '組成百分比',
				transit: function transit(_this, params) {
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}],

			bwdSteps: [{
				goto: '總數',
				transit: function transit(_this, params) {
					return _this.transStackBarToBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '組成',
				transit: function transit(_this, params) {
					return _this.transPCTToOriginStackBar.apply(_this, params);
				},
				end: null
			}]
		}, {
			dataset: '監獄人數概況',
			data: '新入監人數',
			vizType: '直方圖',
			fwdSteps: [{
				goto: '犯次分類',
				transit: function transit(_this, params) {
					return _this.transBarToStackBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '犯次分類比例',
				transit: function transit(_this, params) {
					return _this.transStackBarToPCT.apply(_this, params);
				},
				end: null
			}],
			bwdSteps: [{
				goto: '總數',
				transit: function transit(_this, params) {
					return _this.transStackBarToBar.apply(_this, params);
				},
				end: null
			}, {
				goto: '犯次分類',
				transit: function transit(_this, params) {
					return _this.transPCTToOriginStackBar.apply(_this, params);
				},
				end: null
			}]
		}];

		// Store the current story chain.
		this._story = null;
	}

	// Decide which story chain should be applied.

	_createClass(StoryTeller, [{
		key: 'decideChain',
		value: function decideChain(datasetName, dataName, vizTypeName) {

			this._story = this.storyChains.find(function (chain) {

				// If the dataset is not defined, access the datasets.
				if (!chain.dataset) {

					// Check if the dataset is in the datasets of the chain
					var isDatasetIn = chain.datasets.findIndex(function (dataset) {
						return dataset === datasetName;
					}) > -1;

					// Once the dataset is existed in the chain, check up the data and vizType is correct.
					return isDatasetIn ? chain.data === dataName && chain.vizType === vizTypeName : null;
				} else return chain.dataset === datasetName && chain.data === dataName && chain.vizType === vizTypeName;
			});
		}

		// toTell interates through the animation processes.
		/*
  	startDepth: The current depth the user reads on
  	endDepth  : The destination depth the user wants to
  	opParams  : The parameters each step needs to apply
  */

	}, {
		key: 'toTell',
		value: function toTell(startDepth, endDepth, fwdOpParams, bwdOpParams) {

			// For deeper exploration
			if (endDepth - startDepth > 0) {

				for (var s = startDepth; s < endDepth; ++s) {

					// The pending promise object will be assigned to the end property.
					if (s === startDepth) this._story.fwdSteps[s].end = this._story.fwdSteps[s].transit(fwdOpParams[s]._, fwdOpParams[s].params);else this._story.fwdSteps[s].end = this._story.fwdSteps[s - 1].end.then(this._story.fwdSteps[s].transit.bind(null, fwdOpParams[s]._, fwdOpParams[s].params));
				}
			}

			// For returning back from the deep.
			else if (endDepth - startDepth < 0) {

					for (var s = startDepth - 1; s >= endDepth; --s) {

						if (s === startDepth - 1) {
							this._story.bwdSteps[s].end = this._story.bwdSteps[s].transit(bwdOpParams[s]._, bwdOpParams[s].params);
						} else {
							this._story.bwdSteps[s].end = this._story.bwdSteps[s + 1].end.then(this._story.bwdSteps[s].transit.bind(null, bwdOpParams[s]._, bwdOpParams[s].params));
						}
					}
				}
		}
	}]);

	return StoryTeller;
}();

/* ***** Elements for the Index Page ***** */

var IndexNavList = React.createClass({
	displayName: 'IndexNavList',

	getInitialState: function getInitialState() {

		return {
			nav: [React.createElement(
				RR.Link,
				{ to: '/about_us' },
				React.createElement('img', { src: './src/aboutus.png' })
			), React.createElement(
				RR.Link,
				{ to: '/main' },
				React.createElement('img', { src: './src/see.png' })
			), React.createElement(
				RR.Link,
				{ to: '/special' },
				React.createElement('img', { src: './src/issue.png' })
			), React.createElement(
				RR.Link,
				{ to: '/work_together' },
				React.createElement('img', { src: './src/work.png' })
			), React.createElement(
				'div',
				null,
				React.createElement('iframe', { id: 'githubStar', className: 'social-btn',
					src: 'https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true',
					frameborder: '0', scrolling: '0', width: '170px', height: '20px' }),
				React.createElement('div', { id: 'FBLike', className: 'fb-like',
					'data-href': 'https://developers.facebook.com/docs/plugins/',
					'data-layout': 'button_count', 'data-action': 'like',
					'data-show-faces': 'true', 'data-share': 'true' })
			)]
		};
	},

	render: function render() {

		var listItems = [],
		    l = this.state.nav.length;

		for (var i = 0; i < l; i++) {
			listItems.push(React.createElement(IndexNavListItem, {
				key: i,
				link: this.state.nav[i] }));
		}return React.createElement(
			'nav',
			{ id: 'NAV', className: 'b12-col-md-12 b15-row-md-9' },
			React.createElement(
				'ul',
				{ className: 'b12-col-md-12 b15-row-md-15' },
				listItems
			)
		);
	}
});

var IndexNavListItem = React.createClass({
	displayName: 'IndexNavListItem',

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'nav-option b12-col-md-12 b12-row-md-2' },
			this.props.link
		);
	}
});

/* Major Themes are displaying on the index page. */
var Theme = React.createClass({
	displayName: 'Theme',

	render: function render() {

		return React.createElement(
			'div',
			{ id: '', className: 'b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ' },
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-8 sect-part-imgwrapper' },
				React.createElement('img', { className: 'sect-part-img', src: this.props.themeImg })
			),
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-1 sect-part-btnwrapper' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(ThemeButton, { path: this.props.path, btnTxtSrc: this.props.btnTxt })
			),
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-3 sect-part-imgwrapper' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(
					'div',
					{ className: 'imgtxt-wrapper' },
					React.createElement('img', { className: 'imgtxt', src: this.props.info })
				)
			)
		);
	}
});

var ThemeBtn = React.createClass({
	displayName: 'ThemeBtn',

	render: function render() {

		return React.createElement(
			'div',
			{ className: 'sect-part-btn' },
			React.createElement(
				RR.Link,
				{ to: this.props.path },
				React.createElement('img', { className: 'sect-part-btn-img', src: this.props.btnTxtSrc })
			)
		);
	}
});

/* ***** DataBoard components: The components render the visualized data  ***** */
var DataBoard = React.createClass({
	displayName: 'DataBoard',

	/* Customized Methods */
	// Graph unit for drawing.
	gpu: function () {
		return {
			barGraph: new barGraphClass(),
			lineGraph: new lineGraphClass(),
			ringGraph: new ringGraphClass()
		};
	}(),

	tip: new tipClass(),

	// Story teller is an explainer for deeper topic tranverse.
	storyTeller: new StoryTeller(),

	// Find the index of datasheet.
	findDataSheetIndex: function findDataSheetIndex(props) {
		var dSheet = this.state.dataSheets.find(function (dataSheet) {
			return dataSheet.name === props.dataset;
		});
		return dSheet;
	},
	DBfindTopic: function DBfindTopic(props) {
		var themeKey = store.getState().get('theme');

		return DataFilterStateTree.findTopic(themeKey, props.dataset, props.data, props.chartType, props.topic);
	},
	DBfindData: function DBfindData(props) {

		var themeKey = store.getState().get('theme');

		return DataFilterStateTree.findData(themeKey, props.dataset, props.data);
	},

	// Visualizing data with bar chart
	vizDataWithBarChart: function vizDataWithBarChart(props, dataSheet) {
		var update = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		var bG = this.gpu.barGraph,
		    t = this.tip;

		var _topic = this.DBfindTopic(props);
		var _data = this.DBfindData(props);

		if (update) {
			bG.update(dataSheet.url, _topic.axes.x, _topic.axes.y, props.data).then(function () {
				t.appendBarMouseOver(props.data);
			});
		} else {

			bG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).mappingData(dataSheet.url, _topic.axes.x, _topic.axes.y, props.data, false, false, _data.exceptHeaders).then(function () {
				t.initTips().appendBarMouseOver(props.data);
			});
		}
	},

	// Visualizing data with bar chart
	vizDataWithLineChart: function vizDataWithLineChart(props, dataSheet) {
		var update = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		var lG = this.gpu.lineGraph,
		    t = this.tip;

		var _topic = this.DBfindTopic(props);

		if (update) {
			lG.update(dataSheet.url, _topic.axes.x, _topic.axes.y, props.data).then(function () {
				t.appendDotMouseOver(props.data);
			});
		} else {
			lG.initializeAPad().setChartSize().setOutPadding(10).setStep(10).mappingData(dataSheet.url, _topic.axes.x, _topic.axes.y, props.data, false, false).then(function () {
				t.initTips().appendDotMouseOver(props.data);
			});
		}
	},

	// Visualizing data with ring chart
	vizDataWithRingChart: function vizDataWithRingChart(props, dataSheet) {
		var update = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

		var rG = this.gpu.ringGraph;

		if (update) {

			var yr = parseInt(props.data.match(/\d+/));

			rG.selectROCYr(yr).updateRings();
		} else {
			rG.resetRings().initializeAPad().init().selectROCYr(75).drawMultiRings(dataSheet.urls);
		}
	},

	// Transform from bar to stack bars.
	transBarToStackBar: function transBarToStackBar(props) {

		var bG = this.gpu.barGraph,
		    t = this.tip;
		var _topic = this.DBfindTopic(props);
		return bG.transitBarToStack(_topic.intl, _topic.extl);
	},

	// Transform from bar to stack bars.
	transStackBarToBar: function transStackBarToBar(props) {

		var bG = this.gpu.barGraph,
		    t = this.tip;
		var _data = this.DBfindData(props);
		var _topic = this.DBfindTopic(props);

		return bG.transitStackBarToBar(props.data, _data.exceptHeaders, _topic.axes.y).then(function () {
			t.appendBarMouseOver(props.data);
		});
	},

	// Transform the stack bar into stack bar with percent unit
	transStackBarToPCT: function transStackBarToPCT(props) {
		var bG = this.gpu.barGraph;

		// working-spot-2
		var _topic = this.DBfindTopic(props);
		var _data = this.DBfindData(props);

		// Add the except headers.
		return bG.transitPCTStackBar(_topic.axes.y, _data.exceptHeaders);
	},

	// Transform the percentage stack bar into origin quantative stack bar
	transPCTToOriginStackBar: function transPCTToOriginStackBar(props) {
		var bG = this.gpu.barGraph;
		var _topic = this.DBfindTopic(props);
		var _data = this.DBfindData(props);

		return bG.transitPCTSBarToSBar(_topic.axes.y, _topic.intl, _topic.extl, true);
	},

	// Transform the percentage stack to general bar stack
	transPCTToStackBar: function transPCTToStackBar(props) {
		var bG = this.gpu.barGraph;
		var _topic = this.DBfindTopic(props);
		var _data = this.DBfindData(props);

		return bG.transitPCTSBarToSBar(_topic.axes.y, _topic.intl, _topic.extl, false);
	},
	DBupdateStackBars: function DBupdateStackBars(props) {
		var bG = this.gpu.barGraph;
		var _topic = this.DBfindTopic(props);

		return bG.updateStackBars(_topic.intl, _topic.extl);
	},

	/* React Native methods */
	getInitialState: function getInitialState() {
		return {
			dataSheets: [
			// Police Data
			{
				name: '竊盜案件',
				url: function () {
					if (isLocal) return '/police/竊盜案件.csv';else return window.googleSheet + '1Hh4neC6yeRM8_CI1s447S75fuTBznOZwafQK3AvWaKQ' + query;
				}()
			}, {
				name: '暴力犯罪案件',
				url: function () {
					if (isLocal) return '/police/暴力犯罪案件.csv';else return window.googleSheet + '1mwTXShuHTBewW3KiyPwTgUaL6-8RIyuMiRCmugJd2D0' + query;
				}()
			}, {
				name: '毒品案件',
				url: function () {
					if (isLocal) return '/police/毒品案件.csv';else return window.googleSheet + '1Ax81wm_4P2wNCiX4eYcYxudTbAlFpoKGUGWUXe4UuDI' + query;
				}()
			},

			// Prosecution Data
			{
				name: '殺人罪',
				url: function () {
					if (isLocal) return '/prosecution/殺人罪.csv';else return window.googleSheet + '1dj015G94qWVns0lTmV8E1oIH9MrxhZCBNB8mG7aEDoA' + query;
				}()
			}, {
				name: '竊盜罪',
				url: function () {
					if (isLocal) return '/prosecution/竊盜罪.csv';else return window.googleSheet + '1QobB2PpmQcBVXnKwHLPo640P_GSkoFzkF9WXPTwIVuI' + query;
				}()
			}, {
				name: '擄人勒贖罪',
				url: function () {
					if (isLocal) return '/prosecution/擄人勒贖罪.csv';else return window.googleSheet + '1nTKcutjNWduHzxnkcxigxOKnjTbVk9qPRRkNOE-3NiY' + query;
				}()
			}, {
				name: '恐嚇罪',
				url: function () {
					if (isLocal) return '/prosecution/恐嚇罪.csv';else return window.googleSheet + '1yAanaOO-EexpwXPXmG1WVX2KRjGaOhqYlskX09NquHA' + query;
				}()
			}, {
				name: '槍砲彈藥刀械管制條例',
				url: function () {
					if (isLocal) return '/prosecution/槍砲彈藥刀械管制條例.csv';else return window.googleSheet + '1-3Ss6m_2FYL_PZRDZ3UEQukCbD4U_yIZBwHM-QfyThM' + query;
				}()
			}, {
				name: '兒童及少年性交易防制條例',
				url: function () {
					if (isLocal) return '/prosecution/兒童及少年性交易防制條例.csv';else return window.googleSheet + '1XhV5QHf4-jIR9oxmfjx_qoR4oQA2G-YdZQi99TzE3iY' + query;
				}()
			}, {
				name: '公共危險罪',
				url: function () {
					if (isLocal) return '/prosecution/公共危險罪.csv';else return window.googleSheet + '1DwRetxP42og_RNNi3x3uaRWjydwMxBZRMvsPKu8uL9Q' + query;
				}()
			}, {
				name: '貪污罪',
				url: function () {
					if (isLocal) return '/prosecution/貪污罪.csv';else return window.googleSheet + '1e21BqSPs3cOazIsnOKcf3l2CkYEpZ9O6GUYKykjO7m4' + query;
				}()
			}, {
				name: '瀆職罪',
				url: function () {
					if (isLocal) return '/prosecution/瀆職罪.csv';else return window.googleSheet + '1rVLoQxICRwr8nKNy0JlSxPdtl3Ry-h94f37PDoA1Wjs' + query;
				}()
			}, {
				name: '賭博罪',
				url: function () {
					if (isLocal) return '/prosecution/賭博罪.csv';else return window.googleSheet + '10HerzgG7Z6xdltfQeOpomI2NlJTl0g2xuyJZdbJYM1g' + query;
				}()
			},
			// Judical Data
			{
				name: '地方法院刑事案件收結情形',
				url: function () {
					if (isLocal) return '/judicial/地方法院刑事案件收結情形.csv';else return window.googleSheet + '1jcvf4cO3AJoX3vMVfih5OP27g16Lgax3aKz2uWTjdww' + query;
				}()
			}, {
				name: '高等法院刑事案件收結情形',
				url: function () {
					if (isLocal) return '/judicial/高等法院刑事案件收結情形.csv';else return window.googleSheet + '1I-RT9-AeS4vyaCV4mxa5MJviW01y-DkZzqNKNc7T7vM' + query;
				}()
			}, {
				name: '最高法院刑事案件收結情形',
				url: function () {
					if (isLocal) return '/judicial/最高法院刑事案件收結情形.csv';else return window.googleSheet + '1lpNN8xU0jL8UJAh3gE51nFRbbGS6k0FPDPBrkfudyds' + query;
				}()
			},

			// Correction Data
			{
				name: '監獄人數概況',
				url: function () {
					if (isLocal) return '/correction/監獄人數概況.csv';else return window.googleSheet + '1zUyMPJbbW0GZ6KGwD-tCVSSHDlTDECX6s3vPnGJmP28' + query;
				}()
			}, {
				name: '新入監資料概覽',
				keys: ['1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg', '17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg', '1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8', '1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4'],
				urls: function () {

					if (isLocal) return [{
						name: '新入監前家庭狀況',
						url: '/correction/新入監前家庭狀況.csv'
					}, {
						name: '新入監犯罪次數與種類',
						url: '/correction/新入監犯罪次數與種類.csv'
					}, {
						name: '新入監前教育程度',
						url: '/correction/新入監前教育程度.csv'
					}, {
						name: '歷年新入監年齡歷年統計',
						url: '/correction/歷年新入監年齡歷年統計.csv'
					}];else {
						var urls = [{
							name: '新入監前家庭狀況',
							url: window.googleSheet + '1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg' + window.query
						}, {
							name: '新入監犯罪次數與種類.',
							url: window.googleSheet + '17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg' + window.query
						}, {
							name: '新入監前教育程度',
							url: window.googleSheet + '1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8' + window.query
						}, {
							name: '歷年新入監年齡歷年統計',
							url: window.googleSheet + '1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4' + window.query
						}];
						return urls;
					}
				}()
			}]
		};
	},

	// Initial Data Visualizing
	componentDidMount: function componentDidMount() {

		var dataSheet = this.findDataSheetIndex(this.props);

		if (this.props.chartType === '直方圖') {
			this.vizDataWithBarChart(this.props, dataSheet);
		} else if (this.props.chartType === '趨勢圖') {
			this.vizDataWithLineChart(this.props, dataSheet);
		} else if (this.props.chartType === '圓環比例圖') {}
	},

	// The DataBoard component will renew the visualized data or change a different type.
	componentWillUpdate: function componentWillUpdate(nextProps, nextStates) {

		var dataSheet = this.findDataSheetIndex(nextProps);

		var
		// Renew the board when user switch dataset, chartTypes or
		// switch to the new data when reading in the detail story.
		shouldRenew = this.props.dataset !== nextProps.dataset || this.props.chartType !== nextProps.chartType || this.props.data !== nextProps.data && this.props.topic !== nextProps.topic ? true : false,
		   

		// Update the chart when user switch data viewing
		shouldUpdate = this.props.data !== nextProps.data && this.props.topic === nextProps.topic ? true : false,
		   

		// Extend the chart when topic update.
		shouldDive = this.props.topic !== nextProps.topic && this.props.dataset === nextProps.dataset && this.props.data === nextProps.data ? true : false;

		if (shouldRenew) {

			d3.select('#SKETCHPAD').remove();
			if (nextProps.chartType === '直方圖') {
				if (this.props.chartType === '圓環比例圖') this.gpu.ringGraph.removeBoards();
				this.vizDataWithBarChart(nextProps, dataSheet);
			} else if (nextProps.chartType === '趨勢圖') this.vizDataWithLineChart(nextProps, dataSheet);else if (nextProps.chartType === '圓環比例圖') this.vizDataWithRingChart(nextProps, dataSheet);
		} else if (shouldUpdate) {

			// Update for chart type changing
			if (nextProps.chartType === '直方圖') this.vizDataWithBarChart(nextProps, dataSheet, true);else if (nextProps.chartType === '趨勢圖') this.vizDataWithLineChart(nextProps, dataSheet, true);else if (nextProps.chartType === '圓環比例圖') this.vizDataWithRingChart(nextProps, dataSheet, true);
		} else if (shouldDive) {
			// Update when topic changing.

			// Select the chain
			this.storyTeller.decideChain(nextProps.dataset, nextProps.data, nextProps.chartType);

			if (nextProps.dataset === '殺人罪' || '兒童及少年性交易防制條例' && nextProps.data === '被告人數' && nextProps.chartType === '直方圖') this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '各刑名統計'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '各刑名百分比'
				}]
			}], [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '總數'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '各刑名統計'
				}]
			}]);

			if (nextProps.dataset === '監獄人數概況' && nextProps.data === '本年執行人數' && nextProps.chartType === '直方圖') this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '組成'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '組成百分比'
				}]
			}], [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '總數'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '組成'
				}]
			}]);else if (nextProps.dataset === '地方法院刑事案件收結情形' || '高等法院刑事案件收結情形' && nextProps.data === '案件數' && nextProps.chartType === '直方圖') this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '新收與舊受'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '新收與舊受百分比'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '終結與未結'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '終結與未結百分比'
				}]
			}], [{
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '受理件數'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '新收與舊受'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '新收與舊受百分比'
				}]
			}, {
				_: this,
				params: [{
					dataset: nextProps.dataset,
					data: nextProps.data,
					chartType: nextProps.chartType,
					topic: '終結與未結'
				}]
			}]);else if (nextProps.dataset === '監獄人數概況' && nextProps.data === '新入監人數' && nextProps.chartType === '直方圖') {

				this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, [{
					_: this,
					params: [{
						dataset: nextProps.dataset,
						data: nextProps.data,
						chartType: nextProps.chartType,
						topic: '犯次分類'
					}]
				}, {
					_: this,
					params: [{
						dataset: nextProps.dataset,
						data: nextProps.data,
						chartType: nextProps.chartType,
						topic: '犯次分類比例'
					}]
				}], [{
					_: this,
					params: [{
						dataset: nextProps.dataset,
						data: nextProps.data,
						chartType: nextProps.chartType,
						topic: '總數'
					}]
				}, {
					_: this,
					params: [{
						dataset: nextProps.dataset,
						data: nextProps.data,
						chartType: nextProps.chartType,
						topic: '犯次分類'
					}]
				}]);
			}
		}
	},
	render: function render() {

		return React.createElement(
			'div',
			{ id: 'DATABOARD_WRAPPER', className: 'b20-col-md-20' },
			React.createElement('div', { id: 'DATABOARD' })
		);
	}
});

var Filter = React.createClass({
	displayName: 'Filter',

	generateFilterFields: function generateFilterFields() {

		var FilterNames = this.props.filterNames;
		var FilterDropdownMenus = this.props.currentFilterDropdownMenus;

		var FilterFields = [],
		    FilterDefaultField = [this.props.currentDataset, this.props.currentData, this.props.currentChartType, this.props.currentTopic];

		for (var i = 0; i < FilterNames.size; i++) {

			FilterFields.push(React.createElement(FilterField, { key: i,
				index: i,
				filterName: FilterNames.get(i),
				selectedOption: FilterDefaultField[i],
				options: FilterDropdownMenus.get(i).get('Options') }));
		}
		return FilterFields;
	},

	render: function render() {

		var FilterFields = this.generateFilterFields();

		return React.createElement(
			'nav',
			{ id: 'FILTER_WRAPPER', className: 'b12-col-md-12 b15-row-md-8 hdr-div' },
			React.createElement(
				'form',
				{ id: 'FILTER', className: 'b15-row-md-15' },
				React.createElement(
					'div',
					{ id: 'FILTER-TITLE', className: 'b15-row-md-1' },
					React.createElement('span', { className: 'ver-helper' }),
					React.createElement(
						'span',
						{ style: { verticalAlign: 'middle' } },
						'資料選擇'
					)
				),
				React.createElement(
					'div',
					{ className: 'b12-col-md-12 b15-row-md-14' },
					FilterFields
				)
			)
		);
	}
});

// FilterField Components make a way for user to select the data or the data expression they want.
var FilterField = React.createClass({
	displayName: 'FilterField',

	render: function render() {
		return React.createElement(
			'fieldset',
			{ className: 'b12-col-md-12 b12-row-md-3 formblock-fieldset' },
			React.createElement(
				'div',
				{ className: 'b12-col-md-12 b12-row-md-12' },
				React.createElement('span', { className: 'ver-helper' }),
				React.createElement(
					'div',
					{ className: 'dropdown-group' },
					React.createElement(
						'legend',
						{ className: 'dropdown-title' },
						React.createElement(
							'span',
							null,
							this.props.filterName
						)
					),
					React.createElement(
						'div',
						{ className: 'dropdown' },
						React.createElement(StatFilterDropdownToggle, {
							menuIndex: this.props.index,
							name: this.props.selectedOption }),
						React.createElement(StatFilterDropdownMenu, {
							menuIndex: this.props.index,
							options: this.props.options })
					)
				)
			)
		);
	}
});

var DropdownToggle = React.createClass({
	displayName: 'DropdownToggle',

	render: function render() {

		return React.createElement(
			'button',
			{ className: 'dropdown-btn', type: 'button',
				onClick: this.props.expandDropdown },
			React.createElement(
				'span',
				{
					className: this.props.name.length <= 11 ? "dropdown-txt dropdown-txt--ft-size-12" : "dropdown-txt dropdown-txt--ft-size-10" },
				this.props.name
			),
			React.createElement('span', { className: 'dropdown-caret' })
		);
	}
});

var DropdownMenu = React.createClass({
	displayName: 'DropdownMenu',

	render: function render() {

		var key = 0,
		    optionIdx = 0,
		    menuItems = [];

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = this.props.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var option = _step.value;

				menuItems.push(React.createElement(StatFilterDropdownMenuItem, {
					key: ++key, optionIdx: optionIdx++, name: option, menuIndex: this.props.menuIndex }));
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return React.createElement(
			'ul',
			{ className: this.props.isDisplayed ? 'dropdown-menu displayed' : 'dropdown-menu' },
			menuItems
		);
	}
});

var DropdownMenuItem = React.createClass({
	displayName: 'DropdownMenuItem',

	render: function render() {
		return(
			// Click for selecting the option
			React.createElement(
				'li',
				{ onClick: this.props.selectOption },
				this.props.name
			)
		);
	}
});

/* ***** Basic components: The components that are used almost everywhere. ***** */
var Logo = React.createClass({
	displayName: 'Logo',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'LOGO-WRAPPER', className: 'b12-col-md-12 b15-row-md-5' },
			React.createElement('div', { id: 'LOGO', className: 'b12-col-md-12 b12-row-md-12' })
		);
	}
});

// Title components for rendering the theme image.
var Title = React.createClass({
	displayName: 'Title',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'b12-col-md-12 b15-row-md-1 hdr-div' },
			React.createElement('img', { id: 'TITLE', src: this.props.imageSource })
		);
	}
});

var Sign = React.createClass({
	displayName: 'Sign',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'SIGN' },
			React.createElement('img', { src: './src/sign.png' })
		);
	}
});

var HomeLink = React.createClass({
	displayName: 'HomeLink',

	render: function render() {
		return React.createElement(
			'div',
			{ id: 'HDR-FOOTER', className: 'b12-col-md-12 b15-row-md-1' },
			React.createElement('span', { className: 'ver-helper' }),
			React.createElement(
				'a',
				{ id: 'HOME-LINK', href: '' },
				'vizjust.tw'
			)
		);
	}
});

/* ***** App are the main components of all web pages  ***** */
var App = React.createClass({
	displayName: 'App',

	render: function render() {
		var _props = this.props;
		var nav = _props.nav;
		var main = _props.main;

		return React.createElement(
			'div',
			{ id: 'APP' },
			nav,
			main
		);
	}
});

var Nav = React.createClass({
	displayName: 'Nav',

	render: function render() {
		return React.createElement(
			'header',
			{ id: 'HDR', className: 'b20-col-md-4 b12-row-md-12 bd-right' },
			this.props.childrenComponents
		);
	}
});

var Main = React.createClass({
	displayName: 'Main',

	render: function render() {
		return React.createElement(
			'section',
			{ id: 'BODY', className: 'b20-col-md-16 b12-row-md-12' },
			this.props.childrenComponents
		);
	}
});

/* ***** Action Creators ***** */
/* "AC" is the postfix for action creators */

function setAppNavAC(components) {
	return {
		type: 'SET_NAV',
		components: components
	};
}

function setAppMainAC(components) {
	return {
		type: 'SET_MAIN',
		components: components
	};
}

function setThemesAC() {
	return {
		type: 'SET_THEMES'
	};
}

function selectThemeAC(name) {
	return {
		type: 'SELECT_THEME',
		themeName: name
	};
}

function expandDropdownAC(dropdownIndex) {
	return {
		type: 'EXPAND_DROPDOWN',
		dropdownIndex: dropdownIndex
	};
}

function selectDropdownOptionAC(theme, optionName, fieldsetIndex, dIndex, topicDepth) {
	return {
		type: 'SELECT_DROPDOWN_OPTION',
		theme: theme,
		fieldsetIndex: fieldsetIndex,
		dataIndex: dIndex,
		option: optionName, // Option maybe the name of the dataset, data, chartType or topic.
		topicDepth: topicDepth
	};
}

/* ***** Reducers ***** */
var INITIAL_STATE = Map();

function AppReducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'SET_NAV':
			return setAppNavIndex(state, action.components);

		case 'SET_MAIN':
			return setAppMainIndex(state, action.components);

		case 'SET_THEMES':
			return setAppMainThemes(state);

		case 'SELECT_THEME':
			return selectAppTheme(state, action.themeName);

		case 'EXPAND_DROPDOWN':
			return setDropdownMenuStates(state, action.dropdownIndex);

		case 'SELECT_DROPDOWN_OPTION':
			return selectDropdownOption(state, action.theme, action.option, action.fieldsetIndex, action.dataIndex, action.topicDepth);

		default:
			return state;
	}
}

function setAppNavIndex(state, components) {
	var navState = Map().set('Nav', components);
	return state.merge(navState);
}

function setAppMainThemes(state) {
	// The 4 major themes on the Index page.
	var themes = [{
		style: {
			zIndex: 1000
		},
		key: 0,
		img: "./src/police.png",
		path: '/police_stat',
		btnTxtImg: "./src/policeStatBtnName.png",
		infoTxtImg: "./src/police-2.png"
	}, {
		style: {
			zIndex: 900
		},
		key: 1,
		img: "./src/prosecutor.png",
		path: '/prosecute_stat',
		btnTxtImg: "./src/proStatBtnName.png",
		infoTxtImg: "./src/justiceLaw86.png"
	}, {
		style: {
			zIndex: 800
		},
		key: 2,
		img: "./src/justice.png",
		path: '/judicial_stat',
		btnTxtImg: "./src/justiceStatBtnName.png",
		infoTxtImg: "./src/constitution-80.png"
	}, {
		style: {
			zIndex: 700
		},
		key: 3,
		img: "./src/correction.png",
		path: '/correction_stat',
		btnTxtImg: "./src/corrStatBtnName.png",
		infoTxtImg: "./src/prison-1.png"
	}],
	    mainState = Immutable.Map().set('Main', function () {
		var themeSections = [];

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = themes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var theme = _step2.value;

				themeSections.push(React.createElement(Theme, {
					key: theme.key,
					info: theme.infoTxtImg,
					path: theme.path,
					style: theme.style,
					themeImg: theme.img,
					btnTxt: theme.btnTxtImg }));
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return themeSections;
	}());
	return state.merge(mainState);
}

function selectAppTheme(state, theme) {

	var navComponents = [React.createElement(Logo, { key: '0' }), React.createElement(StatTitle, { key: '1' }), React.createElement(StatFilter, { key: '2' }), React.createElement(HomeLink, { key: '3' })],
	    mainComponents = [React.createElement(StatDataBoard, { key: '0' })];

	var navState = Map().set('Nav', navComponents);
	var mainState = Map().set('Main', mainComponents);

	// The name of each filter field.
	var filterNames = setState('filterNames', List(['資料集', '檢索資料', '視覺化', '專題']));

	var themeState = null;
	var statTitle = null;
	var defaultDataset = null;
	var defaultData = null;
	var defaultChartType = null;
	var defaultTopic = null;

	// Topic depth defines how deep the user drilling into the data.
	var defaultTopicDepth = null;

	var defaultFilterDropdownMenus = null;

	switch (theme) {
		case 'POLICE_STAT':

			themeState = setState('theme', 'police');
			statTitle = setState('statTitleImageSrc', './src/policeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '竊盜案件');
			defaultData = setState('currentData', '合計發生件數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '案件總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);

			// Set the default dropdown menu and its option.
			defaultFilterDropdownMenus = _setDefaultDropdownMenus('police');

			return state.merge(navState, mainState, themeState, statTitle, filterNames, defaultDataset, defaultData, defaultChartType, defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus);

		case 'PROSECUTION_STAT':

			themeState = setState('theme', 'prosecution');
			statTitle = setState('statTitleImageSrc', './src/prosecuteStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '殺人罪');
			defaultData = setState('currentData', '被告人數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('prosecution');

			return state.merge(navState, mainState, themeState, statTitle, filterNames, defaultDataset, defaultData, defaultChartType, defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus);

		case 'JUDICIAL_STAT':

			themeState = setState('theme', 'judicial');
			statTitle = setState('statTitleImageSrc', './src/judgeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '地方法院刑事案件收結情形');
			defaultData = setState('currentData', '案件數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '受理件數');
			defaultTopicDepth = setState('currentTopicDepth', 0);

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('judicial');

			return state.merge(navState, mainState, themeState, statTitle, filterNames, defaultDataset, defaultData, defaultChartType, defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus);

		case 'CORRECTION_STAT':

			themeState = setState('theme', 'correction');
			statTitle = setState('statTitleImageSrc', './src/correctStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '監獄人數概況');
			defaultData = setState('currentData', '本年執行人數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('correction');

			return state.merge(navState, mainState, statTitle, filterNames, themeState, defaultDataset, defaultData, defaultChartType, defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus);

		default:
			return state;
	}

	// Set the default dropdown menus with initial state.
	function _setDefaultDropdownMenus(theme) {

		var dropdownMenus = setState('filterDropdownMenus', List([Map().set('Options', DataFilterStateTree.listDataset(theme)).set('isDisplayed', false), Map().set('Options', DataFilterStateTree.listData(theme, 0)).set('isDisplayed', false), Map().set('Options', DataFilterStateTree.listCharttype(theme, 0)).set('isDisplayed', false), Map().set('Options', DataFilterStateTree.listTopic(theme, 0, 0, 0)).set('isDisplayed', false)]));

		return dropdownMenus;
	}
}

// Expand the dropdown and the rest should all collpased.
function setDropdownMenuStates(state, index) {

	// update the states of the current dropdown.
	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		// Renew each of the dropdown state
		for (var j = 0; j < Menus.size; ++j) {

			var originMenuOptions = Menus.get(j).get('Options');

			if (j === index) {

				Menus = Menus.set(index, Map().set('isDisplayed', true).set('Options', originMenuOptions));
			} else {
				Menus = Menus.set(j, Map().set('isDisplayed', false).set('Options', originMenuOptions));
			}
		}
		return Menus;
	});
	return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus', newState));
}

/* Option selecting reducser and its related function. */
/* Basic selecting option reducer:
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
 */

// Update the dropdown menu.
function selectDropdownOption(state, theme, optionName, fieldsetIndex, dataIdx, topicDepth) {
	var newDataset = null;
	var newData = null;
	var newChartType = null;
	var newTopic = null;
	var newDropdownMenuStates = null;

	// Topic depth define how much info for users to read.
	var newTopicDepth = null;

	var currentState = store.getState();

	// Create an initial collpased state for all menus.
	var collapsedAllDropdownMenuStates = setState('filterDropdownMenus', setAllDropdownCollapsed(currentState));

	// Fetch the prepared states
	var stateTree = DataFilterStateTree.state.get(theme);

	var datasetIndex = DataFilterStateTree.findDatasetIndex(theme, optionName);

	if (theme === 'police') return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);else if (theme === 'prosecution') return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);else if (theme === 'judicial') return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);else if (theme === 'correction') return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);

	// The process of how filter reacts when user click any of its options.
	function _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex) {

		// Select the dataset
		if (fieldsetIndex === 0) {

			if (currentState.get('currentDataset') !== optionName) {

				var newState = __datasetSwitchRendering(theme, optionName, datasetIndex);

				return state.merge(newState.dataset, newState.data, newState.chartType, newState.topic, newState.topicDepth, newState.dropdownMenuStates);
			}
			return state.merge(collapsedAllDropdownMenuStates);
		}

		// Selecting data
		else if (fieldsetIndex === 1) {

				if (currentState.get('currentData') !== optionName) {

					var newState = __dataSwitchRendering(state, theme, optionName);

					return state.merge(newState.data, newState.topic, newState.topicDepth, newState.dropdownMenuStates);
				}
				return state.merge(collapsedAllDropdownMenuStates);
			}

			// Selecting the charttype which will affect the topics.
			else if (fieldsetIndex === 2) {

					if (currentState.get('currentChartType') !== optionName) {

						var newState = __chartTypeSwitchRendering(state, optionName, fieldsetIndex);

						return state.merge(newState.chartType, newState.topic, newState.dropdownMenuStates);
					}
					return state.merge(collapsedAllDropdownMenuStates);
				}

				// Selection the topic
				else if (fieldsetIndex === 3) {
						if (currentState.get('currentTopic') !== optionName) {

							newTopic = setState('currentTopic', optionName);
							newTopicDepth = setState('currentTopicDepth', topicDepth);

							return state.merge(newTopic, newTopicDepth, collapsedAllDropdownMenuStates);
						}
						return state.merge(collapsedAllDropdownMenuStates);
					}

		return state;
	}

	// Rerender the dataset and its related options of different fields
	function __datasetSwitchRendering(theme, optionName, datasetIndex) {

		// Update the current dataset state to the chosen one
		var newDataset = setState('currentDataset', optionName);

		// Render the first available data beneath the dataset.
		var newData = setState('currentData', stateTree.get(datasetIndex).content.data[0].name);

		// Render the first available chartType beneath the dataset.
		var newChartType = setState('currentChartType', stateTree.get(datasetIndex).availableChartTypes[0]);

		// Render the first available topic beneath the dataset and chartType.
		var newTopic = setState('currentTopic', stateTree.get(datasetIndex).content.data[0].topics[0][0].name);

		// Set the new topic depth to 0
		var newTopicDepth = setState('currentTopicDepth', 0);

		// Set up the states for the dropdowns.
		var newDropdownMenuStates = setState('filterDropdownMenus', List([
		// Options for the dataset
		Map().set('Options', List(DataFilterStateTree.listDataset(theme))).set('isDisplayed', false),
		// Options for the data
		Map().set('Options', List(DataFilterStateTree.listData(theme, datasetIndex))).set('isDisplayed', false),
		// Options for the graph
		Map().set('Options', List(DataFilterStateTree.listCharttype(theme, datasetIndex))).set('isDisplayed', false),
		// Options for the topics
		Map().set('Options', List(DataFilterStateTree.listTopic(theme, datasetIndex, 0, 0))).set('isDisplayed', false)]));

		return {
			dataset: newDataset,
			data: newData,
			chartType: newChartType,
			topic: newTopic,
			topicDepth: newTopicDepth,
			dropdownMenuStates: newDropdownMenuStates
		};
	}

	function __dataSwitchRendering(state, theme, dataName) {

		var datasetName = state.get('currentDataset');

		var datasetIndex = DataFilterStateTree.findDatasetIndex(theme, datasetName);

		var dataIndex = DataFilterStateTree.findDataIndex(theme, datasetName, dataName);

		var chartTypeIndex = DataFilterStateTree.findChartTypeIndex(theme, datasetName, state.get('currentChartType'));

		var newData = setState('currentData', dataName);

		var newTopic = setState('currentTopic', stateTree.get(datasetIndex).content.data[dataIndex].topics[chartTypeIndex][0].name);

		var newTopicDepth = setState('currentTopicDepth', 0);

		// Switch data will change the available topics
		var newDropdownMenuStates = setState('filterDropdownMenus', updateTopicDropdownOption(state, dataName, null));

		return {
			data: newData,
			topic: newTopic,
			topicDepth: newTopicDepth,
			dropdownMenuStates: newDropdownMenuStates
		};
	}

	function __chartTypeSwitchRendering(state, chartType, fieldsetIndex) {

		var newChartType = setState('currentChartType', optionName);

		var newTopicDepth = setState('currentTopicDepth', 0);

		var newDropdownMenuStates = setState('filterDropdownMenus', updateTopicDropdownOption(state, null, chartType));

		// Update current topic
		var newTopic = setState('currentTopic', newDropdownMenuStates.get('filterDropdownMenus').get(fieldsetIndex + 1).get('Options')[0]);

		return {
			chartType: newChartType,
			topic: newTopic,
			dropdownMenuStates: newDropdownMenuStates
		};
	}
}

/* Related function of selecting option: Collapse all dropdown menu */
function setAllDropdownCollapsed(state) {

	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		// Renew each of the dropdown state
		for (var j = 0; j < Menus.size; ++j) {

			var originMenuOptions = Menus.get(j).get('Options');

			Menus = Menus.set(j, Map().set('isDisplayed', false).set('Options', originMenuOptions));
		}
		return Menus;
	});
	return newState;
}

/* 
	 Related function of selecting option: Collapse all dropdown menu
	 Data and charttype have relation with topics
 */
function updateTopicDropdownOption(state, dataName, chartName) {

	var key = state.get('theme');
	var currentDataset = state.get('currentDataset');

	// If user is operating data selector.
	var currentData = dataName ? dataName : state.get('currentData');

	// If user is operating chart selector.
	var currentChartType = chartName ? chartName : state.get('currentChartType');

	var newState = state.get('filterDropdownMenus').update(function (Menus) {

		var datasetIndex = DataFilterStateTree.findDatasetIndex(key, currentDataset);
		var dataIndex = DataFilterStateTree.findDataIndex(key, currentDataset, currentData);
		var chartIndex = DataFilterStateTree.findChartTypeIndex(key, currentDataset, currentChartType);

		var topics = DataFilterStateTree.listTopic(key, datasetIndex, dataIndex, chartIndex);

		return Menus.set(1, Map().set('isDisplayed', false).set('Options', Menus.get(1).get('Options'))).set(2, Map().set('isDisplayed', false).set('Options', Menus.get(2).get('Options'))).set(3, Map().set('isDisplayed', false).set('Options', topics));
	});

	return newState;
}

// Create a immutable Map object as state
function setState(key, value) {
	return Map().set(key, value);
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to Nav Component. */
var mapStateToAppNavProps = function mapStateToAppNavProps(state) {
	return {
		childrenComponents: state.get('Nav')
	};
};
var AppNav = RRd.connect(mapStateToAppNavProps, null)(Nav);

/* Connect the redux's app state to Main Component. */
var mapStateToAppMainProps = function mapStateToAppMainProps(state) {
	return {
		childrenComponents: state.get('Main')
	};
};
var AppMain = RRd.connect(mapStateToAppMainProps, null)(Main);

/* Connect the redux's app state to ThemeBtn. */
var ThemeButton = RRd.connect(null, null)(ThemeBtn);

/* Connect Title Component with redux app state */
var mapStateToTitleProps = function mapStateToTitleProps(state) {
	return {
		imageSource: state.get('statTitleImageSrc')
	};
};

var StatTitle = RRd.connect(mapStateToTitleProps, null)(Title);

/* Connect Fliter Component with redux app state. */

/* Connect DropdownToggle */
var mapDispatchToDropdownToggle = function mapDispatchToDropdownToggle(dispatch, props) {
	return {
		expandDropdown: function expandDropdown(e) {
			dispatch(expandDropdownAC(props.menuIndex));
		}
	};
};

var StatFilterDropdownToggle = RRd.connect(null, mapDispatchToDropdownToggle)(DropdownToggle);

/* Connect DropdownMenu */
// Determine the dropdwon is displayed or not.
var mapStateToDropdownMenuProps = function mapStateToDropdownMenuProps(state, props) {
	return {
		isDisplayed: state.get('filterDropdownMenus').get(props.menuIndex).get('isDisplayed')
	};
};

var StatFilterDropdownMenu = RRd.connect(mapStateToDropdownMenuProps, null)(DropdownMenu);

/* Connect DropdownMenuItem */
var mapDispatchToDropdownMenuItemBtnProps = function mapDispatchToDropdownMenuItemBtnProps(dispatch, props) {
	return {

		selectOption: function selectOption(e) {

			var key = store.getState().get('theme');

			// Data is bounding with topics so th
			if (props.menuIndex === 1) dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, 0));

			// The topic user clicks on determines the depth.
			else if (props.menuIndex === 3) dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, props.optionIdx));else dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, 0));
		}
	};
};

var StatFilterDropdownMenuItem = RRd.connect(null, mapDispatchToDropdownMenuItemBtnProps)(DropdownMenuItem);

var mapStateToFilterProps = function mapStateToFilterProps(state) {

	return {
		filterNames: state.get('filterNames'),
		currentDataset: state.get('currentDataset'),
		currentData: state.get('currentData'),
		currentChartType: state.get('currentChartType'),
		currentTopic: state.get('currentTopic'),
		currentFilterDropdownMenus: state.get('filterDropdownMenus')
	};
};

var StatFilter = RRd.connect(mapStateToFilterProps, null)(Filter);

/* Connect DataBoard */
var mapStateToDataBoardProps = function mapStateToDataBoardProps(state) {
	return {
		dataset: state.get('currentDataset'),
		data: state.get('currentData'),
		chartType: state.get('currentChartType'),
		topic: state.get('currentTopic'),
		topicDepth: state.get('currentTopicDepth')
	};
};

var StatDataBoard = RRd.connect(mapStateToDataBoardProps, null)(DataBoard);

/* ***** Store: For handling the states of the App.***** */
var store = Re.createStore(AppReducer);

ReactDOM.render(React.createElement(
	RRd.Provider,
	{ store: store },
	React.createElement(
		RR.Router,
		{ history: RR.hashHistory },
		React.createElement(
			RR.Route,
			{ component: App },
			React.createElement(RR.Route, {
				path: '/',
				getComponents: function getComponents(nextState, cb) {

					/*Set up the initial index page for nav side.*/
					store.dispatch(setAppNavAC([React.createElement(Logo, { key: '0' }), React.createElement(IndexNavList, { key: '1' }), React.createElement(Sign, { key: '2' }), React.createElement(HomeLink, { key: '3' })]));

					store.dispatch(setThemesAC());

					cb(null, { nav: AppNav, main: AppMain });
				} }),
			React.createElement(RR.Route, {
				path: '/police_stat',
				getComponents: function getComponents(nextState, cb) {
					store.dispatch(selectThemeAC('POLICE_STAT'));
					cb(null, { nav: AppNav, main: AppMain });
				} }),
			React.createElement(RR.Route, {
				path: '/prosecute_stat',
				getComponents: function getComponents(nextState, cb) {
					store.dispatch(selectThemeAC('PROSECUTION_STAT'));
					cb(null, { nav: AppNav, main: AppMain });
				} }),
			React.createElement(RR.Route, {
				path: '/judicial_stat',
				getComponents: function getComponents(nextState, cb) {
					store.dispatch(selectThemeAC('JUDICIAL_STAT'));
					cb(null, { nav: AppNav, main: AppMain });
				} }),
			React.createElement(RR.Route, {
				path: '/correction_stat',
				getComponents: function getComponents(nextState, cb) {

					/* Routes to the correction statistic page when the url match. */
					store.dispatch(selectThemeAC('CORRECTION_STAT'));

					cb(null, { nav: AppNav, main: AppMain });
				} })
		)
	)
), document.getElementById('CONTAINER'));
