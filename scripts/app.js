/* ***** Import Libraries ***** */
const Re = Redux,
	  RR = ReactRouter,
	  RRd = ReactRedux;

/* ***** The Immutables ***** */
const Map  = Immutable.Map,
			List = Immutable.List;

/* ***** Global Variables ***** */
window.isLocal = 
	document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

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
const DataFilterStateTree = {
	state:
		Map()
			// State of Police Data Selector 
			.set('police',
					List([
					{
						dataset: '竊盜案件',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '合計發生件數',
									topics: [
										[
											{
												name: '案件總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
											, 
											{
												name: '破獲與尚未破獲',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										, {
												name: '破獲率',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
									]
								},
								{
									name: '重大竊盜發生件數',
									topics: [
										[
											{
												name: '案件總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
											, 
											{
												name: '破獲與尚未破獲',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										, {
												name: '破獲率',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
									]
								},
								{
									name: '普通竊盜發生件數',
									topics: [
										[
											{
												name: '案件總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
											, 
											{
												name: '破獲與尚未破獲',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										, {
												name: '破獲率',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
									]
								},
								{
									name: '汽車竊盜發生件數',
									topics: [
										[
											{
												name: '案件總數',
												axes: {
													x: '民國',
													y: 	'案件數'
												}
											}
											, 
											{
												name: '破獲與尚未破獲',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
											,{
												name: '破獲率',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
									]
								},
								{
									name: '機車竊盜發生輛數',
									topics: [
										[
											{
												name: '案件總數',
												axes: {
													x: '民國',
													y: 	'車輛數'
												}
											}
											, 
											{
												name: '破獲與尚未破獲',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										, {
												name: '破獲率',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '暴力犯罪案件',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '故意殺人發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '擄人勒贖發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '強盜發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '搶奪發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '重傷害發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '恐嚇取財發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '強制性交發生件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '毒品案件',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '嫌疑犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '查獲第一級毒品數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '毒品數'
												}
											}
										, {
												name: '相較他級毒品'
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '查獲第二級毒品數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '毒品數'
												}
											}
										, {
												name: '相較他級毒品'
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '查獲第三級毒品數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '毒品數'
												}
											}
										, {
												name: '相較他級毒品'
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '查獲第四級毒品數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '毒品數'
												}
											}
										, 
											{
													name: '相較他級毒品'
												}

										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					}
				]))
					
			// State of Prosecution Data Selector 
			.set('prosecution', 
				List([
					{
						dataset: '殺人罪',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '死刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '兒童及少年性交易防制條例',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '竊盜罪',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '擄人勒贖罪',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '恐嚇罪',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '槍砲彈藥刀械管制條例',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '無期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '公共危險罪',
						availableChartTypes: [
							'長條圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '貪污罪',
						availableChartTypes: [
								'長條圖',
								'趨勢圖',
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '瀆職罪',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '有期徒刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									],
								},
								{
									name: '拘役',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '免刑',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '不受理',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '其他',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '保安處分人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '罰金',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '緩刑人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '累犯人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					}
				]))
			// State of judicial data selector
			.set('judicial',
				List([
					{
						dataset: '地方法院刑事案件收結情形',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '舊受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '新受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '終結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '未結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]

								},
								{
									name: '終結案件中平均一件所需日數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '天數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '平均每法官每月辦結件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '上訴案件維持率',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '百分比'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '抗告案件維持率',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '百分比'
												}
											}
										]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '高等法院刑事案件收結情形',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '舊受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '新受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '終結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '未結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '終結案件中平均一件所需日數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '天數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '平均每法官每月辦結件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '上訴案件維持率',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '百分比'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '抗告案件維持率',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '百分比'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '最高法院刑事案件收結情形',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '舊受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '新受',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '終結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												}
											}
										],
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '未結',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]

								},
								{
									name: '終結案件中平均一件所需日數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '天數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '平均每法官每月辦結件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					}
					]))
			// State of correction data selector
			.set('correction',	
				List([
					{
						dataset: '監獄人數概況',
						availableChartTypes: [
								'長條圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '本年執行人數',
									topics: [
										[
											{
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
											},
											{
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
											},
											{
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
											}
										],
										[
											{
												name: '減刑',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '本年入監人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
										}, 
										'入監原因分類'],
										[
											{
												name: '減刑',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
									
								},
								{
									name: '新入監人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}, 
											{
												name: '犯次分類',
												axes: {
													x: '民國',
													y: '人數'
												},
												// working-spot-3
												extl: {
													url: (function() {
														if (isLocal) 
															return './correction/新入監犯罪次數與種類.csv'
														else
															return window.googleSheet +
																'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg' + 
																	window.query
													})(),
													headers: ['初犯', '再犯', '累犯']
												},
												intl: {
													headers: null,
												}
											},
											{
												name: '犯次分類比例',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													headers: ['初犯', '再犯', '累犯']
												},
												intl: {
													headers: null,
												}
											}
										],
										[
											{
												name: '減刑',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '本年出獄人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
										}, 
										'出獄原因分類'],
										[
											{
												name: '減刑',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								},
								{
									name: '本年年底留監人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										],
										[
											{
												name: '減刑',
												axes: {
													x: '民國',
													y: '人數'
												}
											}
										]
									]
								}
							]
						}
					},
					{
						dataset: '新入監資料概覽',
						availableChartTypes: [
							'圓環比例圖'
						],
						content: {
							data: [
								{
									name: '民國75年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國76年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國77年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國78年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國79年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國80年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]

								},
								{
									name: '民國81年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國82年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國83年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '民國84年',
									data: [
										'總覽',
										'新入監前家庭狀況',
										'新入監前犯罪次數與種類',
										'新入監前教育程度',
										'新入監年齡統計'
									],
									topics: [
										[
											{
												name: '總數'
											}
										]
									]
								},
								{
									name: '85',
								},
								{
									name: '86',
								},
								{
									name: '87',
								},
								{
									name: '88',
								},
								{
									name: '89',
								},
								{
									name: '90',
								},
								{
									name: '91',
								},
								{
									name: '92',
								},
								{
									name: '93',
								},
								{
									name: '94',
								},
								{
									name: '95',
								},
								{
									name: '96',
								}
							]
						}
					}	
				]	
			)
		),

	// key: the name of the theme.
	selectState: function(key) {
		return this.state.get(key)
	},

	// Find the index of the specific dataset
	findDatasetIndex: function(key, datasetName) {
		
		const state = this.selectState(key);

		// Transform the List to js array
		let list = state.toArray();

		return list.findIndex((d) => {
			return d.dataset === datasetName
		})
	},

	// Find the index of the data in the chosen dataset.
	findDataIndex: function(key, datasetName, dataName) {

		const state = this.selectState(key);

		let index = this.findDatasetIndex(key, datasetName),
				dataList = state.get(index).content.data;

		return dataList.findIndex((data)=>{
			return data.name === dataName
		})
	},

	// Find the index of the chart type in the chosen dataset.
	findChartTypeIndex: function(key, datasetName, chartName) {

		const state = this.selectState(key);

		let index = this.findDatasetIndex(key, datasetName),
				chartList = state.get(index).availableChartTypes;

		return chartList.findIndex((chart)=>{
			return chart === chartName
		})
	},

	// List the dataset
	listDataset: function(key) {

		const state = this.selectState(key);

		let datasets = [];

		for (let i = 0; i < state.size; ++i) {
			datasets.push(state.get(i).dataset);
		}

		return datasets
	}, 

	// List the available data
	listData: function(key, datasetIdx) {

		const state = this.selectState(key);

		let datas = 
			state.get(datasetIdx)
				.content.data.map((d) => {
					return d.name
				});
		
		return datas
	},

	listCharttype: function(key, datasetIdx) {

		const state = this.selectState(key);

		let charttypes = 
			state.get(datasetIdx).availableChartTypes;

		return charttypes

	},

	listTopic: function(key, datasetIdx, dataIdx, chartIndex) {

		const state = this.selectState(key);
		
		let topics =
			state.get(datasetIdx)
				.content.data[dataIdx].topics[chartIndex]
					.map((topicInfo) => {
						return topicInfo.name
					});

			return topics
	},

	// Find the topic's axes.
	findTopicAxes: function(key, datasetIdx, dataIdx, chartIndex, topicName) {

		const state = this.selectState(key);

		const topic = 
			state.get(datasetIdx)
				.content.data[dataIdx].topics[chartIndex]
					.find((topic) => {
						return topic.name === topicName
					});

		return topic.axes

	},

	// Find topic's external source for futher analysis.
	findTopicExtl: function(key, datasetIdx, dataIdx, chartIndex, topicName) {

		const state = this.selectState(key);

		const topic = 
			state.get(datasetIdx)
				.content.data[dataIdx].topics[chartIndex]
					.find((topic) => {
						return topic.name === topicName
					});

		return topic.extl
	},

	// Find topic's internal data for futher analysis.
	findTopicIntl: function(key, datasetIdx, dataIdx, chartIndex, topicName) {

		const state = this.selectState(key);

		const topic = 
			state.get(datasetIdx)
				.content.data[dataIdx].topics[chartIndex]
					.find((topic) => {
						return topic.name === topicName
					});

		return topic.intl
	},
}	

/* ***** Elements for the Index Page ***** */
var IndexNavList = React.createClass({

	getInitialState: function() {

		return {
			nav: [
				<RR.Link to='/about_us'><img src="./src/aboutus.png" /></RR.Link>,
				<RR.Link to='/main'><img src="./src/see.png" /></RR.Link>,
				<RR.Link to='/special'><img src="./src/issue.png" /></RR.Link>,
				<RR.Link to='/work_together'><img src="./src/work.png" /></RR.Link>
			]
		}
	},

	render: function() {

		var listItems = [],
			l = this.state.nav.length;

		for ( var i=0; i<l; i++ ) 
			listItems.push(
				<IndexNavListItem 
					key={i}
					link={this.state.nav[i]} />
				);

		return (
			<nav id="NAV" className="b12-col-md-12 b15-row-md-9">
				<ul className="b12-col-md-12 b15-row-md-15">
					{ listItems }
				</ul>
			</nav>
		)

	}
});

var IndexNavListItem = React.createClass({

	render: function() {
		return (
			<li className="nav-option b12-col-md-12 b12-row-md-2">
				{ this.props.link }
			</li>
		)
	}
});

/* Major Themes are displaying on the index page. */
var Theme = React.createClass({

	render: function() {

		return (
			<div id="" className="b12-col-md-3 b12-row-md-12 sect-part sect-part--box bd-right ">
				<div className="b12-col-md-12 b12-row-md-8 sect-part-imgwrapper">
					<img className="sect-part-img" src={this.props.themeImg} />
				</div>
				<div className="b12-col-md-12 b12-row-md-1 sect-part-btnwrapper">
					<span className="ver-helper"></span>
					<ThemeButton path={this.props.path} btnTxtSrc={this.props.btnTxt}/>
				</div>
				<div className="b12-col-md-12 b12-row-md-3 sect-part-imgwrapper">
					<span className="ver-helper"></span>
					<div className="imgtxt-wrapper">
						<img className="imgtxt" src={this.props.info} />
					</div>
				</div>
			</div>
		)
	}
});

var ThemeBtn = React.createClass({

	render: function() {

		return (
			<div className="sect-part-btn"  >
				<RR.Link to={this.props.path}>
					<img className="sect-part-btn-img" src={this.props.btnTxtSrc}/> 
				</RR.Link>
			</div>
		)
	}
});

/* ***** DataBoard components: The components render the visualized data  ***** */
const DataBoard = React.createClass({

	/* Customized Methods */
	// Graph unit for drawing.
	gpu: (() => {
		return {
			barGraph  : new barGraphClass(),
			lineGraph : new lineGraphClass(),
			ringGraph : new ringGraphClass()
		}
	})(),

	tip: new tipClass(),

	// Find the index of datasheet.
	findDataSheetIndex(props) {
		let dSheet = this.state.dataSheets
			.find((dataSheet) => {
				return dataSheet.name === props.dataset
			});
		return dSheet
	},


	// Find the axes name for the data 
	findDataTopicAxes(props) {

		const themeKey = store.getState().get('theme');

		let datasetIndex = 
					DataFilterStateTree.findDatasetIndex(themeKey, props.dataset),
				dataIndex = 
					DataFilterStateTree.findDataIndex(themeKey, props.dataset, props.data),
				chartTypeIndex = 
					DataFilterStateTree.findChartTypeIndex(themeKey, props.dataset, props.chartType);
				
		return DataFilterStateTree.findTopicAxes(
			themeKey, datasetIndex, dataIndex, chartTypeIndex, props.topic)

	},

	// Find the external soruces for the specific topic
	findDataTopicExtl(props) {

		const themeKey = store.getState().get('theme');

		let datasetIndex = 
					DataFilterStateTree.findDatasetIndex(themeKey, props.dataset),
				dataIndex = 
					DataFilterStateTree.findDataIndex(themeKey, props.dataset, props.data),
				chartTypeIndex = 
					DataFilterStateTree.findChartTypeIndex(themeKey, props.dataset, props.chartType);

		return DataFilterStateTree.findTopicExtl(
			themeKey, datasetIndex, dataIndex, chartTypeIndex, props.topic)

	},

	// Find the external soruces for the specific topic
	findDataTopicIntl(props) {

		const themeKey = store.getState().get('theme');

		let datasetIndex = 
					DataFilterStateTree.findDatasetIndex(themeKey, props.dataset),
				dataIndex = 
					DataFilterStateTree.findDataIndex(themeKey, props.dataset, props.data),
				chartTypeIndex = 
					DataFilterStateTree.findChartTypeIndex(themeKey, props.dataset, props.chartType);

		return DataFilterStateTree.findTopicIntl(
			themeKey, datasetIndex, dataIndex, chartTypeIndex, props.topic)

	},

	// Visualizing data with bar chart
	vizDataWithBarChart(props, dataSheet, update = false) {

		let bG = this.gpu.barGraph,
				t  = this.tip;
		
		const axes = this.findDataTopicAxes(props);

		if (update) {
			bG.update(
				dataSheet.url, 
				axes.x,
				axes.y,
				props.data
				)
				.then(function() {
					t.appendBarMouseOver(props.data);
				});
		} else {
			
			bG.initializeAPad()
				.setChartSize().setOutPadding(10).setStep(10)
				.mappingData(
					dataSheet.url, 
					axes.x,
					axes.y,
					props.data
				)
				.then(function() {
					t.initTips().appendBarMouseOver(props.data);
				});
		}
	},

	// Visualizing data with bar chart
	vizDataWithLineChart(props, dataSheet, update = false) {

		let lG = this.gpu.lineGraph,
				t = this.tip;

		const axes = this.findDataTopicAxes(props);

		if (update) {
			lG.update(
				dataSheet.url, 
				axes.x,
				axes.y,
				props.data
				)
				.then(function() {
					t.appendDotMouseOver(props.data);
				});
		} else {
			lG.initializeAPad()
				.setChartSize().setOutPadding(10).setStep(10)
					.mappingData(
						dataSheet.url, 
						axes.x,
						axes.y,
						props.data
					)
					.then(function() {
						t.initTips().appendDotMouseOver(props.data);
					});
		}
	},

	// Visualizing data with ring chart
	vizDataWithRingChart(props, dataSheet, update = false) {
		let rG = this.gpu.ringGraph;

		if (update) {

			let yr = parseInt(props.data.match(/\d+/));

			rG.selectROCYr(yr)
				.updateRings();

		} else {
			rG.resetRings()
				.initializeAPad()
				.init()
					.selectROCYr(75)
						.drawMultiRings(
							dataSheet.urls);
		}
	},

	// Transform from bar to stack bars.
	transBarToStackBar(props) {

		let bG = this.gpu.barGraph,
				t = this.tip;

		const intl = this.findDataTopicIntl(props);
		const extl = this.findDataTopicExtl(props);
		
		bG.transitBarToStack(intl, extl);
	},

	// Transform from bar to stack bars.
	transStackBarToBar(props) {

		let bG = this.gpu.barGraph,
				t = this.tip;

		// const intl = this.findDataTopicIntl(props);
		// const extl = this.findDataTopicExtl(props);
		
		// bG.transitStackBarToBar(intl[0], extl).then(function() {
		// 	t.appendBarMouseOver(intl[0], extl);
		// });
		bG.transitStackBarToBar(props.data).then(function() {
			t.appendBarMouseOver(props.data);
		});
	},

	// Transform the stack bar into stack bar with percent unit
	transStackBarToPCT(props) {
		let bG = this.gpu.barGraph;
		const axes = this.findDataTopicAxes(props);
		bG.transitPCTStackBar(axes.y);
	},

	// working-spot-3
	transPCTToStackBar(props) {
		let bG = this.gpu.barGraph;
		const axes = this.findDataTopicAxes(props);

		bG.transitPCTSBarToSBar(axes.y);
	},

	/* React Native methods */
	getInitialState() {
		return {
			dataSheets: [
				// Police Data
				{
					name: '竊盜案件',
					url : (function() {
						if (isLocal)
							return '/police/竊盜案件.csv'
						else 
							return window.googleSheet + 
								'1Hh4neC6yeRM8_CI1s447S75fuTBznOZwafQK3AvWaKQ'
									+ query
					})(),
				},
				{
					name: '暴力犯罪案件',
					url : (function() {
						if (isLocal)
							return '/police/暴力犯罪案件.csv'
						else 
							return window.googleSheet + 
								'1mwTXShuHTBewW3KiyPwTgUaL6-8RIyuMiRCmugJd2D0'
									+ query
					})(),
				},
				{
					name: '毒品案件',
					url : (function() {
						if (isLocal)
							return '/police/毒品案件.csv'
						else 
							return window.googleSheet + 
								'1Ax81wm_4P2wNCiX4eYcYxudTbAlFpoKGUGWUXe4UuDI'
									+ query
					})(),
				},

				// Prosecution Data
				{
					name: '殺人罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/殺人罪.csv'
						else 
							return window.googleSheet + 
								'1dj015G94qWVns0lTmV8E1oIH9MrxhZCBNB8mG7aEDoA'
									+ query
					})(),
				},
				{
					name: '竊盜罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/竊盜罪.csv'
						else 
							return window.googleSheet + 
								'1QobB2PpmQcBVXnKwHLPo640P_GSkoFzkF9WXPTwIVuI'
									+ query
					})(),
				},
				{
					name: '擄人勒贖罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/擄人勒贖罪.csv'
						else 
							return window.googleSheet + 
								'1nTKcutjNWduHzxnkcxigxOKnjTbVk9qPRRkNOE-3NiY'
									+ query
					})(),
				},
				{
					name: '恐嚇罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/恐嚇罪.csv'
						else 
							return window.googleSheet + 
								'1yAanaOO-EexpwXPXmG1WVX2KRjGaOhqYlskX09NquHA'
									+ query
					})(),
				},
				{
					name: '槍砲彈藥刀械管制條例',
					url: (function() {
						if (isLocal)
							return '/prosecution/槍砲彈藥刀械管制條例.csv'
						else 
							return window.googleSheet + 
								'1-3Ss6m_2FYL_PZRDZ3UEQukCbD4U_yIZBwHM-QfyThM'
									+ query
					})(),
				},
				{
					name: '兒童及少年性交易防制條例',
					url: (function() {
						if (isLocal)
							return '/prosecution/兒童及少年性交易防制條例.csv'
						else 
							return window.googleSheet + 
								'1XhV5QHf4-jIR9oxmfjx_qoR4oQA2G-YdZQi99TzE3iY'
									+ query
					})(),
				},
				{
					name: '公共危險罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/公共危險罪.csv'
						else 
							return window.googleSheet + 
								'1DwRetxP42og_RNNi3x3uaRWjydwMxBZRMvsPKu8uL9Q'
									+ query
					})(),
				},
				{
					name: '貪污罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/貪污罪.csv'
						else 
							return window.googleSheet + 
								'1e21BqSPs3cOazIsnOKcf3l2CkYEpZ9O6GUYKykjO7m4'
									+ query
					})(),
				},
				{
					name: '瀆職罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/瀆職罪.csv'
						else 
							return window.googleSheet + 
								'1rVLoQxICRwr8nKNy0JlSxPdtl3Ry-h94f37PDoA1Wjs'
									+ query
					})(),
				},
				{
					name: '賭博罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/賭博罪.csv'
						else 
							return window.googleSheet + 
								'10HerzgG7Z6xdltfQeOpomI2NlJTl0g2xuyJZdbJYM1g'
									+ query
					})(),
				},
				// Judical Data 
				{
					name: '地方法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/地方法院刑事案件收結情形.csv'
						else 
							return window.googleSheet + 
								'1jcvf4cO3AJoX3vMVfih5OP27g16Lgax3aKz2uWTjdww'
									+ query
					})(),
				},
				{
					name: '高等法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/高等法院刑事案件收結情形.csv'
						else 
							return window.googleSheet + 
								'1I-RT9-AeS4vyaCV4mxa5MJviW01y-DkZzqNKNc7T7vM'
									+ query
					})(),
				},
				{
					name: '最高法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/最高法院刑事案件收結情形.csv'
						else 
							return window.googleSheet + 
								'1lpNN8xU0jL8UJAh3gE51nFRbbGS6k0FPDPBrkfudyds'
									+ query
					})(),
				},

				// Correction Data
				{
					name: '監獄人數概況',
					url: (function() {
						if (isLocal)
							return '/correction/監獄人數概況.csv'
						else
							return window.googleSheet + 
						  	'1zUyMPJbbW0GZ6KGwD-tCVSSHDlTDECX6s3vPnGJmP28' + 
						  		query
					})(),
				},
				{
					name: '新入監資料概覽',
					keys: [
						'1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg',
						'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg',
						'1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8',
						'1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4'
					],
							urls: (function() {

								if (isLocal) 
									return ([
										{
											name: '新入監前家庭狀況',
											url : '/correction/新入監前家庭狀況.csv'
										},
										{
											name: '新入監犯罪次數與種類',
											url : '/correction/新入監犯罪次數與種類.csv'
										},
										{
											name: '新入監前教育程度',
											url : '/correction/新入監前教育程度.csv'
										},
										{
											name: '歷年新入監年齡歷年統計',
											url : '/correction/歷年新入監年齡歷年統計.csv'
										}
									])
								else {
									let urls = [
										{
											name: '新入監前家庭狀況',
											url : 
												window.googleSheet +
													'1CvwvOSmEV681gY9GBFdQdGT9IpM3oH9ttfPmVTCshsg' + 
														window.query
										},
										{
											name: '新入監犯罪次數與種類.',
											url : 
												window.googleSheet +
													'17DykPlzpafA6ajXsOfwnNwDj4fTQvh-qtphw3I_A-Fg' + 
														window.query
										},
										{
											name: '新入監前教育程度',
											url : 
												window.googleSheet +
													'1qz5R2oAgh-KGjxIPZrXUMrUeeRGnVwkLDWzjnlzoSV8' + 
														window.query
										},
										{
											name: '歷年新入監年齡歷年統計',
											url : 
												window.googleSheet +
													'1IyFpSljBLk6XrP59di75M5Xy7lGd0KqEicraZCHCt-4' + 
														window.query
										}
									];
									return urls
								}
							})()
						}
					] 
				}
	},

	// Initial Data Visualizing
	componentDidMount() {

		let dataSheet = this.findDataSheetIndex(this.props);
		
		if (this.props.chartType === '長條圖') {
			this.vizDataWithBarChart(this.props, dataSheet);
			
		} else if (this.props.chartType === '趨勢圖') {
			this.vizDataWithLineChart(this.props, dataSheet);

		} else if (this.props.chartType === '圓環比例圖') {

		}
	},

	// The DataBoard component will renew the visualized data or change a different type.
	componentWillUpdate (nextProps, nextStates) {
		
		let dataSheet = this.findDataSheetIndex(nextProps);

		var 
			// Renew the board when user switch dataset or chartTypes
			shouldRenew = 
				(this.props.dataset !== nextProps.dataset ||
				 this.props.chartType !== nextProps.chartType) 
						? true : false,

			// Update the chart when user switch data viewing
			shouldUpdate = 
				(this.props.data !== nextProps.data) ? true : false,

			// Extend the chart when topic update.
			shouldExtend = 
				(this.props.topic !== nextProps.topic) ? true : false;
		
		if (shouldRenew) { 

			d3.select('#SKETCHPAD').remove();
			if (nextProps.chartType === '長條圖') { 
				if (this.props.chartType === '圓環比例圖') 
					this.gpu.ringGraph.removeBoards();
				this.vizDataWithBarChart(nextProps, dataSheet)
			}
			else if (nextProps.chartType === '趨勢圖')
				this.vizDataWithLineChart(nextProps, dataSheet)
			else if (nextProps.chartType === '圓環比例圖')
				this.vizDataWithRingChart(nextProps, dataSheet)

		} else if (shouldUpdate) {
			// Update for chart type changing
			if (nextProps.chartType === '長條圖') 
				this.vizDataWithBarChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '趨勢圖') 
				this.vizDataWithLineChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '圓環比例圖')
				this.vizDataWithRingChart(nextProps, dataSheet, true)

		} else if (shouldExtend) { // Update when topic changing.
				
				if (this.props.chartType === '長條圖' && nextProps.topic === '組成'){
					
					this.transBarToStackBar(nextProps);
				}
				else if (
					this.props.chartType === '長條圖' && 
					this.props.topic === '組成' && 
					nextProps.topic === '總數'
					) 
					this.transStackBarToBar(nextProps);
				
				else if (
					this.props.chartType === '長條圖' && 
					this.props.topic === '組成' && 
					nextProps.topic === '組成百分比')
					this.transStackBarToPCT(nextProps);

				// working-spot-3
				else if (
					this.props.data === '新入監人數' &&
					this.props.topic === '總數' &&
					nextProps.topic  === '犯次分類'
				) {
					this.transBarToStackBar(nextProps);
				}
				// working-spot-3
				else if (
					this.props.data === '新入監人數' &&
					this.props.topic === '犯次分類' &&
					nextProps.topic  === '犯次分類比例'
				) {
					this.transStackBarToPCT(nextProps);
				}
				// working-spot-3
				else if (
					this.props.data === '新入監人數' &&
					this.props.topic === '犯次分類比例' &&
					nextProps.topic  === '犯次分類'
				) {
					this.transPCTToStackBar(nextProps);
				}
				// working-spot-3
				else if (
					this.props.data === '新入監人數' &&
					this.props.topic === '犯次分類' &&
					nextProps.topic  === '總數'
				) {
					console.log('testing');
					this.transStackBarToBar(nextProps);
				}
		}
	},

	render() {

		return (
			<div id='DATABOARD_WRAPPER' className='b20-col-md-20'>
				<div id='DATABOARD'></div>
			</div>
		)
	}
});

const Filter = React.createClass({

	generateFilterFields: function() {

		const FilterNames = this.props.filterNames;
		const FilterDropdownMenus = this.props.currentFilterDropdownMenus;
		
		let FilterFields = [],
				FilterDefaultField = [
					this.props.currentDataset,
					this.props.currentData,
					this.props.currentChartType,
					this.props.currentTopic
				];

		for (let i = 0; i < FilterNames.size; i++) {

			FilterFields.push(
				<FilterField key={i} 
										 index={i}
										 filterName={FilterNames.get(i)} 
										 selectedOption={FilterDefaultField[i]}
										 options={FilterDropdownMenus.get(i).get('Options')}/>
				);
		}
		return FilterFields
	},

	render: function() {

		const FilterFields = this.generateFilterFields();

		return (
			<nav id="FILTER_WRAPPER" className="b12-col-md-12 b15-row-md-8 hdr-div">
				<form id="FILTER" className="b15-row-md-15">
					<div id="FILTER-TITLE" className="b15-row-md-1">
						<span className="ver-helper"></span>
					<span style={{verticalAlign: 'middle'}}>資料選擇</span>
					</div>
					<div className="b12-col-md-12 b15-row-md-14">
						{FilterFields}
					</div>
				</form>
			</nav>
		)
	}
});

// FilterField Components make a way for user to select the data or the data expression they want.
const FilterField = React.createClass({

	render: function() {
		return (
			<fieldset className="b12-col-md-12 b12-row-md-3 formblock-fieldset">
				<div className="b12-col-md-12 b12-row-md-12">
					<span className="ver-helper"></span>
					<div className="dropdown-group">
						<legend className="dropdown-title">
							<span>{ this.props.filterName }</span>
						</legend>
						<div className="dropdown">
							<StatFilterDropdownToggle 
								menuIndex={ this.props.index }
								name={ this.props.selectedOption } />
							<StatFilterDropdownMenu 
								menuIndex={ this.props.index }
								options={ this.props.options } />
						</div>
					</div>
				</div>
			</fieldset>
		)
	}
});

const DropdownToggle = React.createClass({

	render: function() {
		
		return (
			<button className="dropdown-btn" type="button" 
							onClick={ this.props.expandDropdown }>
				<span 
					className={ this.props.name.length <= 11 ? 
							"dropdown-txt dropdown-txt--ft-size-12" : 
								"dropdown-txt dropdown-txt--ft-size-10"}>
						{ this.props.name }
					</span>
				<span className="dropdown-caret"></span>
			</button>
		)
	}
});

const DropdownMenu = React.createClass({

	render: function() {

		let key = 0,
				menuItems = [];
		
		for (let option of this.props.options) 
			menuItems.push(<StatFilterDropdownMenuItem
				key={++key} optionIdx={++key} name={option} menuIndex={this.props.menuIndex}/>)

		return (
			<ul className={this.props.isDisplayed ? 
				'dropdown-menu displayed' : 'dropdown-menu'}>
					{ menuItems }
			</ul>
		)
	}
});

const DropdownMenuItem = React.createClass({
	render: function() {
		return (
			// Click for selecting the option
			<li onClick={ this.props.selectOption }>
				{ this.props.name }
			</li>
		)
	}
});

/* ***** Basic components: The components that are used almost everywhere. ***** */
const Logo = React.createClass({
	render: function() {
		return (
			<div id="LOGO-WRAPPER" className="b12-col-md-12 b15-row-md-5">
				<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
			</div>
		)
	}
});

// Title components for rendering the theme image.
const Title = React.createClass({
	render: function() {
		return (
			<div className="b12-col-md-12 b15-row-md-1 hdr-div">
				<img id="TITLE" src={ this.props.imageSource } />
			</div>
		)
	}
});

const Sign = React.createClass({
	render: function() {
		return (
			<div id="SIGN">
				<img src="./src/sign.png" />
			</div>
		)
	}
});

const HomeLink = React.createClass({
	render: function() {
		return (
			<div id="HDR-FOOTER" className="b12-col-md-12 b15-row-md-1">
				<a id="HOME-LINK" href="">vizjust.tw</a>
			</div>
		)
	}
});


/* ***** App are the main components of all web pages  ***** */
var App = React.createClass({

	render: function() {
		const { nav, main } = this.props
		return (
			<div id="APP">
				{ nav }
				{ main }
			</div>
		)
	}
});

var Nav = React.createClass({
	render: function() {
		return (
			<header id="HDR" className="b20-col-md-4 b12-row-md-12 bd-right">
				{this.props.childrenComponents}
			</header>
		)
	}
});


var Main = React.createClass({

	render: function() {
		return (
			<section id="BODY" className="b20-col-md-16 b12-row-md-12">
				{ this.props.childrenComponents }
			</section>
		)
	}
});

/* ***** Action Creators ***** */
/* "AC" is the postfix for action creators */

function setAppNavAC(components) {
	return {
		type: 'SET_NAV',
		components: components
	}
}

function setAppMainAC(components) {
	return {
		type: 'SET_MAIN',
		components: components
	}
}

function setThemesAC() {
	return {
		type: 'SET_THEMES'
	}
}

function selectThemeAC(name) {
	return {
		type: 'SELECT_THEME',
		themeName: name
	}
}

function expandDropdownAC(dropdownIndex) {
	return {
		type: 'EXPAND_DROPDOWN',
		dropdownIndex: dropdownIndex
	}
}

function selectDropdownOptionAC(theme, optionName, fieldsetIndex, dIndex) {
	
	return {
		type : 'SELECT_DROPDOWN_OPTION',
		theme: theme,
		fieldsetIndex: fieldsetIndex,
		dataIndex: dIndex,
		option: optionName
	}
}

/* ***** Reducers ***** */
const INITIAL_STATE = Map();



function AppReducer(state = INITIAL_STATE, action) {
	
	switch(action.type) {
		case 'SET_NAV':
			return setAppNavIndex(state, action.components)

		case 'SET_MAIN':
			return setAppMainIndex(state, action.components)

		case 'SET_THEMES':
			return setAppMainThemes(state)

		case 'SELECT_THEME':
			return selectAppTheme(state, action.themeName)

		case 'EXPAND_DROPDOWN':
			return setDropdownMenuStates(state, action.dropdownIndex)

		case 'SELECT_DROPDOWN_OPTION':
			return selectDropdownOption(
				state, 
				action.theme, action.option, action.fieldsetIndex, action.dataIndex)

		default: 
			return state
	} 
}

function setAppNavIndex(state, components) {
	let navState = Map().set('Nav', components);
	return state.merge(navState)
}

function setAppMainThemes(state) {
	// The 4 major themes on the Index page.
	let themes = [
		{
			style: { 
				zIndex: 1000
			},
			key : 0,
			img : "./src/police.png",
			path: '/police_stat',
			btnTxtImg : "./src/policeStatBtnName.png",
			infoTxtImg: "./src/police-2.png",
		},
		{
			style: {
				zIndex: 900
			},
			key : 1,
			img : "./src/prosecutor.png",
			path: '/prosecute_stat',
			btnTxtImg : "./src/proStatBtnName.png",
			infoTxtImg: "./src/justiceLaw86.png"
		},
		{
			style: {
				zIndex: 800
			},
			key : 2,
			img : "./src/justice.png",
			path: '/judicial_stat',
			btnTxtImg : "./src/justiceStatBtnName.png",
			infoTxtImg: "./src/constitution-80.png"
		},
		{
			style: {
				zIndex: 700
			},
			key : 3,
			img : "./src/correction.png",
			path: '/correction_stat',
			btnTxtImg : "./src/corrStatBtnName.png",
			infoTxtImg: "./src/prison-1.png"
		}
	],
	mainState = Immutable.Map().set(
		'Main',
		(() => {
			let themeSections = [];

			for (let theme of themes) {
				themeSections.push(
					<Theme 
						key={theme.key} 
						info={theme.infoTxtImg}
						path={theme.path}
						style={theme.style}
						themeImg={theme.img}
						btnTxt={theme.btnTxtImg} />
						);
					}
					return themeSections
					
				})()
		);
	return state.merge(mainState)
}


function selectAppTheme(state, theme) {
	console.log(theme);
	let navComponents  = [
			<Logo key='0'/>, <StatTitle key='1'/>, <StatFilter key='2'/>, <HomeLink key='3'/>],
		mainComponents = [<StatDataBoard key='0' />];

	const navState = Map().set('Nav', navComponents);
	const mainState = Map().set('Main', mainComponents);

	// The name of each filter field.
	const filterNames = 
		setState('filterNames', List(['資料集', '檢索資料','視覺化', '專題']));

	let themeState = null;
	let statTitle = null;
	let defaultDataset = null;
	let defaultData = null;
	let defaultChartType = null;
	let defaultTopic = null;

	let defaultFilterDropdownMenus = null;

	switch(theme) {
		case 'POLICE_STAT':

			themeState = setState('theme', 'police');
			statTitle = setState('statTitleImageSrc', './src/policeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '竊盜案件');
			defaultData = setState('currentData', '合計發生件數');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '案件總數');

			// Set the default dropdown menu and its option.
			defaultFilterDropdownMenus = _setDefaultDropdownMenus('police');

			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames, 
				defaultDataset, defaultData, defaultChartType, defaultTopic, defaultFilterDropdownMenus)

		case 'PROSECUTION_STAT':

			themeState = setState('theme', 'prosecution');
			statTitle = setState('statTitleImageSrc', './src/prosecuteStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '兒童及少年性交易防制條例');
			defaultData = setState('currentData', '有期徒刑');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '總數');

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('prosecution');
				
			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames,
				defaultDataset, defaultData, defaultChartType, defaultTopic, defaultFilterDropdownMenus
				)

		case 'JUDICIAL_STAT':

			themeState = setState('theme', 'judicial');
			statTitle = setState('statTitleImageSrc', './src/judgeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '地方法院刑事案件收結情形');
			defaultData = setState('currentData', '新受');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '總數');

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('judicial');

			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames, 
				defaultDataset, defaultData, defaultChartType, defaultTopic, defaultFilterDropdownMenus)

		case 'CORRECTION_STAT':
			
			themeState = setState('theme', 'correction');
			statTitle = setState('statTitleImageSrc', './src/correctStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '監獄人數概況');
			defaultData = setState('currentData', '本年執行人數');
			defaultChartType = setState('currentChartType', '長條圖');
			defaultTopic = setState('currentTopic', '總數');


			defaultFilterDropdownMenus = _setDefaultDropdownMenus('correction');

			return state.merge(
				navState, mainState, 
				statTitle, filterNames, themeState,
				defaultDataset, defaultData, defaultChartType,
				defaultTopic, defaultFilterDropdownMenus)

		default:
			return state
	}

	// Set the default dropdown menus with initial state.
	function _setDefaultDropdownMenus(theme) {
			
			const dropdownMenus = 
				setState(
					'filterDropdownMenus',
					List([
						Map().set(
							'Options', 
							DataFilterStateTree.listDataset(theme))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							DataFilterStateTree.listData(theme, 0))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							DataFilterStateTree.listCharttype(theme, 0))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							DataFilterStateTree.listTopic(theme, 0, 0, 0))
								.set('isDisplayed', false)
						])
					);

			return dropdownMenus
		}
}

// Expand the dropdown and the rest should all collpased.
function setDropdownMenuStates(state, index) {
	
	// update the states of the current dropdown.
	let newState = state.get('filterDropdownMenus').update(function(Menus) {

		// Renew each of the dropdown state
		for ( let j = 0; j < Menus.size; ++j ) {

			const originMenuOptions = Menus.get(j).get('Options');

			if (j === index) {
				
				Menus = Menus.set(
					index, 
					Map()
						.set('isDisplayed', true)
							.set('Options', originMenuOptions)
					);
			} else {
				Menus = Menus.set(
					j, 
					Map()
						.set('isDisplayed', false)
							.set('Options', originMenuOptions)
					);
			}
		}
		return Menus
	});
	return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus', newState))
}

// working-spot-5
/* Option selecting reducser and its related function. */
/* Basic selecting option reducer:
		state:
		theme: 
		optionName: 
		fieldsetIndex: The index of the selector. 
			0: dataset
			1: data
			2: chartType
			3: topic
			
		dataIdx:
 */
function selectDropdownOption(state, theme, optionName, fieldsetIndex, dataIdx) {
	
	let newDataset = null;
	let newData = null;
	let newChartType = null;
	let newTopic = null;
	let newDropdownMenuStates = null;

	const currentState = store.getState();

	// Create an initial collpased state for all menus.
	const collapsedAllDropdownMenuStates = setState(
			'filterDropdownMenus',
			setAllDropdownCollapsed(currentState));

	// Fetch the prepared states 
	const stateTree = DataFilterStateTree.state.get(theme);
	const datasetIndex = DataFilterStateTree.findDatasetIndex(theme, optionName);
	
	if (theme === 'police') 
		return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);
	else if (theme === 'prosecution') 
		return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);
	else if (theme === 'judicial') 
		return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);
	else if (theme === 'correction')
		return _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex);
		
	// The process of how filter reacts when user click any of its options.
	function _FilterRenderDispatcher(state, theme, optionName, fieldsetIndex, datasetIndex) {

		// Select the dataset
		if (fieldsetIndex === 0 ) {

			if (currentState.get('currentDataset') !== optionName) {

				const newState = __datasetSwitchRendering(theme, optionName, datasetIndex);

				return state.merge(
						newState.dataset, 
						newState.data, 
						newState.chartType, 
						newState.topic, 
						newState.dropdownMenuStates)
				}
			return state.merge(collapsedAllDropdownMenuStates)
		} 

		// Selecting data
		else if (fieldsetIndex === 1) {

			if (currentState.get('currentData') !== optionName) {

				const newState = __dataSwitchRendering(state, optionName);

				return state.merge(
						newState.data,
						newState.dropdownMenuStates
					)
			}
			return state.merge(collapsedAllDropdownMenuStates)
		}

		// Selecting the charttype which will affect the topics.
		else if (fieldsetIndex === 2) {

			if (currentState.get('currentChartType') !== optionName) {

				const newState = __chartTypeSwitchRendering(state, optionName, fieldsetIndex);

				return state.merge(
					newState.chartType,
					newState.topic,
					newState.dropdownMenuStates
					)
			}
			return state.merge(collapsedAllDropdownMenuStates)
		} 

		// Selection the topic
		else if (fieldsetIndex === 3) {
			if (currentState.get('currentTopic') !== optionName) {

				newTopic = setState('currentTopic', optionName);

				return state.merge(newTopic, collapsedAllDropdownMenuStates)
			}
			return state.merge(collapsedAllDropdownMenuStates);
		}

		return state

	}

	// Rerender the dataset and its related options of different fields
	function __datasetSwitchRendering(theme, optionName, datasetIndex) {

		// Update the current dataset state to the chosen one
		let newDataset = setState('currentDataset', optionName);

		// Render the first available data beneath the dataset.
		let newData = setState(
			'currentData', 
			stateTree.get(datasetIndex).content.data[0].name
			);

		// Render the first available chartType beneath the dataset.
		let newChartType = setState(
			'currentChartType', 
			stateTree.get(datasetIndex).availableChartTypes[0]
			);

		// Render the first available topic beneath the dataset and chartType.
		let newTopic = setState(
			'currentTopic', 
			stateTree.get(datasetIndex).content.data[0].topics[0][0].name
			);

		// Set up the states for the dropdowns.
		let newDropdownMenuStates = 
			setState('filterDropdownMenus', List([
				// Options for the dataset
				Map().set(
					'Options', 
					List(DataFilterStateTree.listDataset(theme))
				).set(
					'isDisplayed',
					false
				),
				// Options for the data
				Map().set(
					'Options', 
					List(DataFilterStateTree.listData(theme, datasetIndex))
				).set(
					'isDisplayed',
					false
				),
				// Options for the graph
				Map().set(
					'Options', 
						List(DataFilterStateTree.listCharttype(theme, datasetIndex))
					).set(
						'isDisplayed',
						false
					),
				// Options for the topics
				Map().set(
						'Options', 
						List(DataFilterStateTree.listTopic(theme, datasetIndex, 0, 0))
					).set(
						'isDisplayed',
						false
						)
					]));

		return {
			dataset: newDataset,
			data: newData,
			chartType: newChartType,
			topic: newTopic,
			dropdownMenuStates: newDropdownMenuStates
		}
	}

	function __dataSwitchRendering(state, dataName) {

		const newData = setState('currentData', dataName);

		// Switch data will change the available topics
		const	newDropdownMenuStates = 
			setState(
				'filterDropdownMenus', 
				updateTopicDropdownOption(state, dataName, null));

		return {
			data: newData,
			dropdownMenuStates: newDropdownMenuStates
		}
	}

	function __chartTypeSwitchRendering(state, chartType, fieldsetIndex) {

		const newChartType = setState('currentChartType', optionName);

		const newDropdownMenuStates = setState(
					'filterDropdownMenus', 
					updateTopicDropdownOption(state, null, chartType));

		// Update current topic
		const newTopic = setState(
					'currentTopic', 
					newDropdownMenuStates
						.get('filterDropdownMenus')
							.get(fieldsetIndex+1)
								.get('Options')[0]);

		return {
			chartType: newChartType,
			topic: newTopic,
			dropdownMenuStates: newDropdownMenuStates
		}

	}
}

/* Related function of selecting option: Collapse all dropdown menu */
function setAllDropdownCollapsed(state) {

	let newState = state.get('filterDropdownMenus').update(function(Menus) {

		// Renew each of the dropdown state
		for ( let j = 0; j < Menus.size; ++j ) {

			const originMenuOptions = Menus.get(j).get('Options');
			
			Menus = Menus.set(
				j, 
				Map()
					.set('isDisplayed', false)
						.set('Options', originMenuOptions)
				);
			
		}
		return Menus
	});
	return newState
}

/* 
	 Related function of selecting option: Collapse all dropdown menu
	 Data and charttype have relation with topics
 */
function updateTopicDropdownOption(state, dataName, chartName) {
	
	const key = state.get('theme');
	const currentDataset = state.get('currentDataset');

	// If user is operating data selector. 
	const currentData =
		dataName ? dataName : state.get('currentData');

	// If user is operating chart selector.
	const currentChartType = 
		chartName ? chartName : state.get('currentChartType');
	
	let newState = state.get('filterDropdownMenus').update(function(Menus) {
		
		let datasetIndex = 
			DataFilterStateTree.findDatasetIndex(key, currentDataset);
		let dataIndex = 
			DataFilterStateTree.findDataIndex(key, currentDataset, currentData);
		let chartIndex = 
			DataFilterStateTree.findChartTypeIndex(key, currentDataset, currentChartType);

		const topics = 
			DataFilterStateTree
				.listTopic(key, datasetIndex, dataIndex, chartIndex);

		return Menus
			.set(1,
				Map()
					.set('isDisplayed', false)
						.set('Options', Menus.get(1).get('Options'))
				)
			.set(2,
				Map()
					.set('isDisplayed', false)
						.set('Options', Menus.get(2).get('Options'))
				)
			.set(3, 
				Map()
					.set('isDisplayed', false)
						.set('Options', topics))
			
	});

	return newState
}

// Create a immutable Map object as state
function setState(key, value) {
	return Map().set(key, value)
}

/* ***** Mapping the things from container components to prsentational components ***** */
/* Connect the redux's app state to Nav Component. */
const mapStateToAppNavProps = (state) => {
	return {
		childrenComponents: state.get('Nav')
	}
}
const AppNav = RRd.connect(
	mapStateToAppNavProps,
	null
)(Nav);


/* Connect the redux's app state to Main Component. */
const mapStateToAppMainProps = (state) => {
	return {
		childrenComponents: state.get('Main')
	}
}
const AppMain = RRd.connect(
	mapStateToAppMainProps,
	null
)(Main);


/* Connect the redux's app state to ThemeBtn. */


const ThemeButton = RRd.connect(
	null,
	// mapDispatchToThemeBtnProps
	null
)(ThemeBtn);

/* Connect Title Component with redux app state */
const mapStateToTitleProps = (state) => {
	return {
		imageSource: state.get('statTitleImageSrc')
	}
}

const StatTitle = RRd.connect(
	mapStateToTitleProps,
	null
)(Title);

/* Connect Fliter Component with redux app state. */

/* Connect DropdownToggle */
const mapDispatchToDropdownToggle = (dispatch, props) => {
	return {
		expandDropdown: (e) => {
			dispatch(expandDropdownAC(props.menuIndex));
		}
	}
}

const StatFilterDropdownToggle = RRd.connect(
	null,
	mapDispatchToDropdownToggle
)(DropdownToggle);

/* Connect DropdownMenu */
// Determine the dropdwon is displayed or not.
const mapStateToDropdownMenuProps = (state, props) => {
	return {
		isDisplayed: 
			state.get('filterDropdownMenus')
				.get(props.menuIndex)
					.get('isDisplayed')
	}
}

const StatFilterDropdownMenu = RRd.connect(
	mapStateToDropdownMenuProps,
	null
)(DropdownMenu);

/* Connect DropdownMenuItem */
const mapDispatchToDropdownMenuItemBtnProps = (dispatch, props) => {
	return {
						
		// working-spot-5
		selectOption: (e) => {

			const key = store.getState().get('theme');

			// Data is bounding with topics so th
			if (props.menuIndex === 1) 
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx));
			else  
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx));
		}
	}
}
const StatFilterDropdownMenuItem = RRd.connect(
	null,
	mapDispatchToDropdownMenuItemBtnProps
)(DropdownMenuItem);

const mapStateToFilterProps = (state) => {

	return {
		filterNames: state.get('filterNames'),
		currentDataset: state.get('currentDataset'),
		currentData: state.get('currentData'),
		currentChartType: state.get('currentChartType'),
		currentTopic: state.get('currentTopic'),
		currentFilterDropdownMenus: state.get('filterDropdownMenus')
	}
}

const StatFilter = RRd.connect(
	mapStateToFilterProps,
	null
)(Filter);

/* Connect DataBoard */
const mapStateToDataBoardProps = (state) => {
	return {
		dataset  : state.get('currentDataset'), 
		data     : state.get('currentData'), 
		chartType: state.get('currentChartType'),
		topic    : state.get('currentTopic')
	}
}

const StatDataBoard = RRd.connect(
	mapStateToDataBoardProps,
	null
	)(DataBoard);

/* ***** Store: For handling the states of the App.***** */
let store = Re.createStore(AppReducer);


ReactDOM.render(
	<RRd.Provider store={store}>
		<RR.Router history={RR.hashHistory} >
			<RR.Route component={App} >
				<RR.Route 
					path='/' 
					getComponents={(nextState, cb) => {

						/*Set up the initial index page for nav side.*/
						store.dispatch(setAppNavAC([
							<Logo key='0'/>,
							<IndexNavList key='1'/>,
							<Sign key='2'/>,
							<HomeLink key='3'/>
						]));

						store.dispatch(setThemesAC());

						cb(null, { nav: AppNav, main: AppMain });
				}} />
				<RR.Route 
					path='/police_stat' 
					getComponents={(nextState, cb) => {
						store.dispatch(selectThemeAC('POLICE_STAT'));
						cb(null, { nav: AppNav, main: AppMain });
					}}/>
				<RR.Route 
					path='/prosecute_stat' 
					getComponents={(nextState, cb) => {
						store.dispatch(selectThemeAC('PROSECUTION_STAT'));
						cb(null, { nav: AppNav, main: AppMain });
					}}/>
				<RR.Route 
					path='/judicial_stat' 
					getComponents={(nextState, cb) => {
						store.dispatch(selectThemeAC('JUDICIAL_STAT'));
						cb(null, { nav: AppNav, main: AppMain });
					}}/>
				<RR.Route 
					path='/correction_stat' 
					getComponents={(nextState, cb) => {

						/* Routes to the correction statistic page when the url match. */
						store.dispatch(selectThemeAC('CORRECTION_STAT'));

						cb(null, { nav: AppNav, main: AppMain });
					}}/>
			</RR.Route>
		</RR.Router>
	</RRd.Provider>, 
	document.getElementById('CONTAINER'))