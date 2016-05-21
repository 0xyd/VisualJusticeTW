/* ***** Import Libraries ***** */
const Re = Redux,
	  RR = ReactRouter,
	  RRd = ReactRedux;

/* ***** The Immutables ***** */
const Map  = Immutable.Map,
			List = Immutable.List;

/* ***** Global Variables ***** */
// Should be very 
// window.isLocal = 
// 	document.URL.match(/127.0.0.1/)[0] === '127.0.0.1' ? true : false;

// window.isLocal = document.URL.match(/127.0.0.1/) ? true: false;

window.isLocal = true;


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
			header: Reserved for future.
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
							'直方圖',
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '合計發生件數',
													headers: ['合計發生件數']
												}
											},
											{
												name: '案件種類',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜發生件數', '普通竊盜發生件數', '汽車竊盜發生件數', '機車竊盜發生件數']
												}
											},
											{
												name: '案件種類百分比',
												axes: {
													x: '民國',
													y: '案件百分比'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜發生件數', '普通竊盜發生件數', '汽車竊盜發生件數', '機車竊盜發生件數']
												}
											},
										], 
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												}
											}, 
											{
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
									name: '汽機車竊盜案件',
									topics: [
										[	
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['汽車竊盜發生件數', '機車竊盜發生件數'],
													mHeaders: ['汽車竊盜發生件數', '機車竊盜發生件數']
												}
											},
											{
												name: '汽機車案件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['汽車竊盜發生件數', '機車竊盜發生件數'],
												}
											},
											{
												name: '汽機車案件數百分比',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['汽車竊盜發生件數', '機車竊盜發生件數']
												}
											},
											{
													name: '汽車竊盜發生件數',
													axes: {
														x: '民國',
														y: '案件數'
													},
													extl: {
														headers: null,
														url: null
													},
													intl: {
														header: '',
														// headers: ['汽車竊盜發生件數'],
														mHeaders: ['汽車竊盜發生件數'],
													}
												},
												{
													name: '汽車竊盜案嫌疑犯人數',
													axes: {
														x: '民國',
														y: '人數'
													},
													extl: {
														headers: null,
														url: null
													},
													intl: {
														header: '',
														headers: ['汽車竊盜嫌疑犯人數']
													}
												},
												{
	
													name: '汽車竊盜破獲與否件數',
													axes: {
														x: '民國',
														y: '案件數'
													},
													extl: {
														headers: null,
														url: null
													},
													intl: {
														header: '',
														headers: ['汽車竊盜破獲件數', '汽車竊盜尚未破獲件數']
													}
												},
												{
													name: '汽車竊盜案破獲率',
													axes: {
														x: '民國',
														y: '破獲率'
													},
													extl: {
														headers: null,
														url: null
													},
													intl: {
														header: '',
														headers: ['汽車竊盜破獲件數', '汽車竊盜尚未破獲件數']
													}
												},
												{
													name: '機車竊盜案件數',
													axes: {
														x: '民國',
														y: '案件數'
													},
													extl: {
														headers: null,
														url: null
													},
													intl: {
														header: '',
														headers: ['機車竊盜發生件數']
													}
												},
												{
													name: '機車竊盜嫌疑犯人數',
													axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null,
													url: null
												},
												intl: {
													header: '',
													headers: ['機車竊盜嫌疑犯人數']
												}
											},
											{
												name: '機車竊盜破獲與否件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null,
													url: null
												},
												intl: {
													header: '',
													headers: ['機車竊盜破獲件數', '機車竊盜尚未破獲件數']
												}
											},
											{
												name: '機車竊盜案破獲率',
												axes: {
													x: '民國',
													y: '破獲率'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['機車竊盜破獲率']
												}
											}
										],
										[]
									],
								},
								{
									name: '非汽機車竊盜發生件數',
									topics: [
										{
											name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													mHeaders: ['重大竊盜發生件數', '普通竊盜發生件數']
												}
										},
										{
												name: '重大竊盜案件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜發生件數']
												}
											},
											{
												name: '重大竊盜嫌疑犯人數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜嫌疑犯人數']
												}
											},
											{
												name: '重大竊盜破獲與否件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜破獲件數', '重大竊盜尚未破獲件數']
												}
											},
											{
												name: '重大竊盜案破獲率',
												axes: {
													x: '民國',
													y: '破獲率'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['重大竊盜破獲率']
												}
											},
											{
												name: '普通竊盜案件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['普通竊盜發生件數']
												}
											},
											{
												name: '普通竊盜嫌疑犯人數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['普通竊盜嫌疑犯人數']
												}
											},
											{
												name: '普通竊盜破獲與否件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['普通竊盜破獲件數', '普通竊盜尚未破獲件數']
												}
											},
											{
												name: '普通竊盜案破獲率',
												axes: {
													x: '民國',
													y: '破獲率'
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
													headers: ['普通竊盜破獲率']
												}
											}
									],
								},

							]
						}
					},
					{
						dataset: '暴力犯罪案件',
						availableChartTypes: [
							'直方圖',
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
							'直方圖',
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
											}, 
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
							'直方圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數', 
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null,
												},
												intl: {
													// mHeaders: Headers for mergining into 1 new column.
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							],
						}
					},
					{
						dataset: '兒童及少年性交易防制條例',
						availableChartTypes: [
							'直方圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '竊盜罪',
						availableChartTypes: [
							'直方圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '擄人勒贖罪',
						availableChartTypes: [
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '恐嚇罪',
						availableChartTypes: [
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '槍砲彈藥刀械管制條例',
						availableChartTypes: [
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									// exceptHeaders: [
									// 	'保安處分人數', '緩刑人數', '累犯人數', '民國'
									// ],
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '公共危險罪',
						availableChartTypes: [
							'直方圖',
							'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '貪污罪',
						availableChartTypes: [
								'直方圖',
								'趨勢圖',
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
									]
								}
							]
						}
					},
					{
						dataset: '瀆職罪',
						availableChartTypes: [
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '被告人數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													mHeaders: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}, 
											{
												name: '各刑名統計',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他'],
												}
											}
												, 
											{
												name: '各刑名百分比',
												axes: {
													x: '民國',
													y: '百分比'
												},
												extl: {
													url: null,
													headers: null
												},
												intl: {
													headers: ['死刑', '無期徒刑', '有期徒刑', '拘役', '罰金', '免刑', '無罪', '不受理', '其他']
												}
											}
										],
										[]
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
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '案件數',
									// exceptHeaders: [
									// 	'民國', '終結', '未結', '終結案件中平均一件所需日數', 
									// 	'平均每法官每月辦結件數', '上訴案件維持率', '抗告案件維持率'
									// ],
									topics: [
										[
											{
												name: '受理件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: null,
													mHeaders: ['舊受', '新受']
												}
											},
											{
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
											},
											{
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
											},
											{
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
											},
											{
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
											}
										],
										[

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
									name: '平均每法官每月辦結件數',
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
									name: '上訴案件維持率',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '百分比'
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
								'直方圖',
								'趨勢圖'
						],
						content: {
							data: [
								{
									name: '案件數',
									topics: [
										[
											{
												name: '受理件數',
												axes: {
													x: '民國',
													y: '案件數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: null,
													mHeaders: ['舊受', '新受']
												}
											},
											{
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
											},
											{
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
											},
											{
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
											},
											{
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
											}
										],
										[

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
									name: '平均每法官每月辦結件數',
									topics: [
										[
											{
												name: '總數',
												axes: {
													x: '民國',
													y: '案件數'
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
						dataset: '最高法院刑事案件收結情形',
						availableChartTypes: [
								'直方圖',
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
								'直方圖',
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
												},
												extl: {
													url: null,
													headers: []
												},
												intl: {
													headers: []
												}
											}, 
											{
												name: '犯次分類',
												axes: {
													x: '民國',
													y: '人數'
												},
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
													headers: [],
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

	// Find the data.
	findData: function(key, datasetName, dataName) {

		const state = this.selectState(key);

		let index = this.findDatasetIndex(key, datasetName),
				dataList = state.get(index).content.data;

		return dataList.find((data)=>{
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

	// Find topic
	findTopic: function(key, datasetName, dataName, chartTypeName, topicName) {

		const state = this.selectState(key);

		const _datasetIndex = this.findDatasetIndex(key, datasetName);
		const _dataIndex = this.findDataIndex(key, datasetName, dataName);
		const _chartTypeIndex = this.findChartTypeIndex(key, datasetName, chartTypeName);

		return state.get(_datasetIndex)
				.content.data[_dataIndex].topics[_chartTypeIndex]
					.find((topic) => {
						return topic.name === topicName
					});
	}
};

/* Story Telleller */
class StoryTeller {

	constructor() {
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
		this.vizStoryChains = [
			// Stories for police.
			{
				dataset: '竊盜案件',
				data: '合計發生件數',
				vizType: '直方圖',
				fwdSteps: [
					{
						goto: '案件種類',
						transit: (_this, params) => {
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '案件種類百分比',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					}
				],
				bwdSteps: [
					{
						goto: '案件總數',
						transit: (_this, params) => {
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '案件種類',
						transit: (_this, params) => {	
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					}
				]
			},
			{
				dataset: '竊盜案件',
				data: '非汽機車竊盜發生件數',
				vizType: '直方圖',
				fwdSteps: [
					{
						goto: '重大竊盜發生件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '重大竊盜嫌疑人數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '重大竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBupdateStackBars.apply(_this, params);
						},
						end: null
					},
					{
						goto: '重大竊盜案破獲率',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
					{
						goto: '普通竊盜發生件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					},{
						goto: '普通竊盜嫌疑犯人數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '普通竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBupdateStackBars.apply(_this, params);
						},
						end: null
					},
					{
						goto: '普通竊盜案破獲率',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					}
				],
				bwdSteps: []
			},
			{
				dataset: '竊盜案件',
				data: '汽機車竊盜案件',
				vizType: '直方圖',
				fwdSteps: [
					{
						goto: '汽機車案件數',
						transit: (_this, params) => {	
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽機車案件數百分比',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜發生件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜嫌疑犯人數',
						transit: (_this, params) => {
							params.push('汽車竊盜嫌疑犯人數');
							return _this.DBUpdateBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{

						goto: '汽車竊盜案破獲率',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜發生件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜嫌疑犯人數',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜案破獲率',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
				],
				bwdSteps: [
					{
						goto: '總數',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽機車案件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽機車案件數百分比',
						transit: (_this, params) => {	
							return _this.DBtransBarToPCTStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜發生件數',
						transit: (_this, params) => {	
							params.push('汽車竊盜發生件數');
							return _this.DBUpdateBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜嫌疑犯人數',
						transit: (_this, params) => {
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '汽車竊盜案破獲率',
						transit: (_this, params) => {	
							return _this.DBtransBarToPCTStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜發生件數',
						transit: (_this, params) => {	
							params.push('機車竊盜發生件數');
							return _this.DBUpdateBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜嫌疑犯人數',
						transit: (_this, params) => {	
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '機車竊盜破獲與否件數',
						transit: (_this, params) => {	
							return _this.DBtransPCTToStackBar.apply(_this, params);
						},
						end: null
					}
				]
			},
			// For prosecution stories
			{
				datasets: [
					'殺人罪', '兒童及少年性交易防制條例', '竊盜罪', 
					'擄人勒贖罪', '恐嚇罪', '槍砲彈藥刀械管制條例',
					'公共危險罪', '貪污罪', '瀆職罪'
				],
				data: '被告人數',
				vizType: '直方圖',
				fwdSteps: [
					{ 
						goto: '各刑名統計', 
						transit : (_this, params) => {
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{ 
						goto: '各刑名百分比', 
						transit : (_this, params) => {
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
				],
				bwdSteps: [
					{ 
						goto: '總數', 
						transit : (_this, params) => {
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{ 
						goto: '各刑名統計', 
						transit : (_this, params) => {
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					}
				]
			},
			// For judicial stories
			{
				datasets: ['地方法院刑事案件收結情形', '高等法院刑事案件收結情形'],
				data: '案件數',
				vizType: '直方圖',
				fwdSteps: [
					{
						goto: '新受與舊受',
						transit: (_this, params) => {
							return _this.DBtransBarToStackBar.apply(_this, params)
						},
						end: null
					},
					{
						goto: '新受與舊受百分比',
						transit: (_this, params) => {
							return _this.DBtransStackBarToPCT.apply(_this, params)
						},
						end: null
					},
					{
						goto: '終結與未結',
						transit: (_this, params) => {
							return _this.DBtransPCTToStackBar.apply(_this, params)
						},
						end: null
					},
					{
						goto: '終結與未結百分比',
						transit: (_this, params) => {
							return _this.DBtransStackBarToPCT.apply(_this, params)
						},
						end: null
					},
				],
				bwdSteps: [
					{
						goto: '受理件數',
						transit: (_this, params) => {
							return _this.DBtransStackBarToBar.apply(_this, params)
						},
						end: null
					},
					{
						goto: '新收與舊受',
						transit: (_this, params) => {
							return _this.DBtransPCTToOriginStackBar.apply(_this, params)
						},
						end: null
					},
					{
						goto: '新收與舊受百分比',
						transit: (_this, params) => {
							return _this.DBtransStackBarToPCT.apply(_this, params)
						},
						end: null
					},
					{
						goto: '終結與未結',
						transit: (_this, params) => {
							return _this.DBtransPCTToStackBar.apply(_this, params)
						},
						end: null
					},
				]
			},
			// For correction stories
			{
				dataset: '監獄人數概況',
				data: '本年執行人數',
				vizType: '直方圖',

				fwdSteps: [
					{ 
						goto: '組成', 
						transit : (_this, params) => {
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{ 
						goto: '組成百分比', 
						transit : (_this, params) => {
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					},
				],
				bwdSteps: [
					{ 
						goto: '總數', 
						transit : (_this, params) => {
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{ 
						goto: '組成', 
						transit : (_this, params) => {
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					}
				]
			},
			{
				dataset: '監獄人數概況',
				data: '新入監人數',
				vizType: '直方圖',
				fwdSteps: [
					{
						goto: '犯次分類',
						transit: function(_this, params) {
							return _this.DBtransBarToStackBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '犯次分類比例',
						transit: function(_this, params) {
							return _this.DBtransStackBarToPCT.apply(_this, params);
						},
						end: null
					}
				],
				bwdSteps: [
					{
						goto: '總數',
						transit: function(_this, params) {
							return _this.DBtransStackBarToBar.apply(_this, params);
						},
						end: null
					},
					{
						goto: '犯次分類',
						transit: function(_this, params) {
							return _this.DBtransPCTToOriginStackBar.apply(_this, params);
						},
						end: null
					}
				]
			}
		];

		// working-spot: Tales for explain the chart.
		this.taleChains = [
			{
				// The first section of each topic is the main indicator.
				dataset: '兒童及少年性交易防制條例',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								right: '2em',
								top : '2em',
							},
							size: {
								width : '400px',
								padding: '0.5em 1em'
							}
						},
						IndButton: {
							pos  : {
							},
							style: {
								backgroundColor: '#3B8AE5'
							}
						},
						infoContext  : 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數' 
					},
					{
						
						Container: {
							pos : {
								right: '2em',
								top : '2em',
							},
							size: {
								width : '400px',
								padding: '0.5em 1em'
							}
						},
						IndButton: {
							pos  : {
							},
							style: {
								backgroundColor: '#3B8AE5'
							}
						},
						infoContext  : 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.',
						infoAnimation: '',
						isTopicFirstSec: false
					},
					{
						
						Container: {
							pos : {
								left: '5em',
								top : '2em',
							},
							size: {
								width : '250px',
								padding: '0.5em 1em'
							}
						},
						IndButton: {
							pos  : {

							},
							style: {
								backgroundColor: '#822979'
							}
						},
						infoContext  : 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ',
						infoAnimation: '',
						isTopicFirstSec: false
					},
					{
						// working-spot
						Container: {
							pos : {
								left: '5em',
								top : '2em',
							},
							size: {
								width : '300px',
								padding: '0.5em 1em'
							}
						},
						IndButton: {
							pos  : {

							},
							style: {
								backgroundColor: '#822979'
							}
						},
						infoContext  : 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '刑名統計' 
					},
					{
						Container: {
							pos : {
								left: '',
								top : '',
							}
						},
						infoContext  : '',
						infoAnimation: '',
						isTopicFirstSec: false
					},
					{
						Container: {
							pos : {
								left: '',
								top : '',
							}
						},
						infoContext  : '',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '刑名百分比' 
					},
					{
						Container: {
							pos : {
								left: '',
								top : '',
							}
						},
						infoContext  : '',
						infoAnimation: '',
						isTopicFirstSec: false
					},
					{
						Container: {
							pos : {
								left: '',
								top : '',
							}
						},
						infoContext  : '',
						infoAnimation: '',
						isTopicFirstSec: false
					}
				]
			}
		];

		// working-spot: The tale will
		this.calTopicFirstTale = function() {
			let tales = 
				this._txtTale.sections.filter((section, i) => {
					return section.isTopicFirstSec === true
				});
			return tales
		},

		// To get the styles for the components that the story teller needs
		this._componentStyleFactory = function(styleObjs) {

			let style = {};

			for ( let styleObj of styleObjs ) {
				let params = Object.keys(styleObj);
				for ( let param of params ) 
					style[param] = styleObj[param]
				
			}
			return style

		};

		// Store the current tale.
		this._txtTale = null;

		// Store the current story chain.
		this._vizStory = null;
	}

	// Decide which story chain should be applied.
	decideVizStoryChain(datasetName, dataName, vizTypeName) {

		this._vizStory = this.vizStoryChains.find((chain) => {

			// If the dataset is not defined, access the datasets.
			if (!chain.dataset) {

				// Check if the dataset is in the datasets of the chain
				let isDatasetIn = 
					chain.datasets.findIndex((dataset) => {
						return dataset === datasetName
					}) > -1;

				// Once the dataset is existed in the chain, check up the data and vizType is correct.
				return isDatasetIn ?  
					(chain.data === dataName && chain.vizType === vizTypeName) : null   
			}
			else 
				return chain.dataset === datasetName && 
					chain.data === dataName && 
					chain.vizType === vizTypeName
		})
	}

	// working-spot: Decide which tales chain shoule be applied.
	decideTaleChain(datasetName, dataName, vizTypeName) {

		this._txtTale = this.taleChains.find((chain) => {
			return chain.dataset === datasetName && 
					chain.data === dataName && 
					chain.vizType === vizTypeName
		});

	}
	
	// toTell interates through the animation processes.
	/*
		startDepth: The current depth the user reads on
		endDepth  : The destination depth the user wants to
		opParams  : The parameters each step needs to apply
	*/
	toTell(startDepth, endDepth, fwdOpParams, bwdOpParams) {

		// For deeper exploration
		if (endDepth - startDepth > 0) {

			for (let s = startDepth; s < endDepth; ++s) {
				
				// The pending promise object will be assigned to the end property. 
				if ( s === startDepth ) 
					this._vizStory.fwdSteps[s].end = 
						this._vizStory.fwdSteps[s]
							.transit(fwdOpParams[s]._, fwdOpParams[s].params);
				else
					this._vizStory.fwdSteps[s].end = 
						this._vizStory.fwdSteps[s-1].end
							.then(this._vizStory.fwdSteps[s]
								.transit.bind(null, fwdOpParams[s]._, fwdOpParams[s].params));
			}
		}
		
		// For returning back from the deep.
		else if (endDepth - startDepth < 0) {

			for (let s = startDepth - 1; s >= endDepth; --s) {

				if ( s === startDepth - 1 ) {
					this._vizStory.bwdSteps[s].end = 
						this._vizStory.bwdSteps[s]
							.transit(bwdOpParams[s]._, bwdOpParams[s].params);
				}

				else {
					this._vizStory.bwdSteps[s].end = 
						this._vizStory.bwdSteps[s+1].end
							.then(this._vizStory.bwdSteps[s]
								.transit.bind(null, bwdOpParams[s]._, bwdOpParams[s].params));
				}
			}
		}
	}
}

/* ***** Elements for the Index Page ***** */
var IndexNavList = React.createClass({

	getInitialState: function() {

		return {
			nav: [
				<RR.Link to='/about_us'><img src="./src/aboutus.png" /></RR.Link>,
				<RR.Link to='/main'><img src="./src/see.png" /></RR.Link>,
				<RR.Link to='/special'><img src="./src/issue.png" /></RR.Link>,
				<RR.Link to='/work_together'><img src="./src/work.png" /></RR.Link>,
				<div>
					<iframe id='githubStar' className='social-btn'
						src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" 
						frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
					<div id='FBLike' className="fb-like" 
						data-href="https://developers.facebook.com/docs/plugins/" 
						data-layout="button_count" data-action="like" 
						data-show-faces="true" data-share="true"></div>
				</div>
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

	// Story teller is an explainer for deeper topic tranverse.
	storyTeller: new StoryTeller(),

	// Find the index of datasheet.
	findDataSheetIndex(props) {
		let dSheet = this.state.dataSheets
			.find((dataSheet) => {
				return dataSheet.name === props.dataset
			});
		return dSheet
	},

	DBfindTopic(props) {
		const themeKey = store.getState().get('theme');
		
		return DataFilterStateTree.findTopic(
			themeKey, props.dataset, props.data, props.chartType, props.topic)
	},

	DBfindData(props) {

		const themeKey = store.getState().get('theme');

		return DataFilterStateTree.findData(themeKey, props.dataset, props.data)
	},

	// Visualizing data with bar chart
	vizDataWithBarChart(props, dataSheet, update = false) {

		let bG = this.gpu.barGraph,
				t  = this.tip;
		
		const _topic = this.DBfindTopic(props);
		const _data = this.DBfindData(props);

		if (update) {
			// bG.update(
			// 	dataSheet.url, 
			// 	_topic.axes.x,
			// 	_topic.axes.y,
			// 	props.data
			// 	)
			// 	.then(function() {
			// 		t.appendBarMouseOver(props.data);
			// 	});
			bG.update(
				// dataSheet.url, 
				_topic.axes.x,
				_topic.axes.y,
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
					_topic.axes.x,
					_topic.axes.y,
					props.data,
					false,
					false,
					// _data.exceptHeaders
					_topic.intl.mHeaders
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

		const _topic = this.DBfindTopic(props);
		
		if (update) {
			lG.update(
				dataSheet.url, 
				_topic.axes.x,
				_topic.axes.y,
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
						_topic.axes.x,
						_topic.axes.y,
						props.data,
						false,
						false
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

	// DBUpdateBar allows bar graph display different data in the same dataset.
	DBUpdateBar(props, header) {
		
		let bG = this.gpu.barGraph,
				t  = this.tip;
		
		const _topic = this.DBfindTopic(props);

		return bG.update(
			_topic.axes.x,
			_topic.axes.y,
			props.data === header ? props.data : header
			)
			.then(function() {
				t.appendBarMouseOver(props.data);
			});

	},

	// Transform from bar to stack bars.
	DBtransBarToStackBar(props) {

		let bG = this.gpu.barGraph,
				t = this.tip;
		const _topic = this.DBfindTopic(props);
		return bG.transitBarToStack(_topic.axes.y, _topic.intl, _topic.extl);
	},

	// Transform from bar to stack bars.
	DBtransBarToPCTStackBar(props) {

		let bG = this.gpu.barGraph,
				t = this.tip;

		const _topic = this.DBfindTopic(props);
		const _data = this.DBfindData(props);

		return bG.transitBarToPCTStackBar(_topic.axes.y, _topic.intl, _topic.extl, _topic.intl.mHeaders);
	},

	// Transform from bar to stack bars.
	DBtransStackBarToBar(props) {

		let bG = this.gpu.barGraph,
				t = this.tip;

		const _data = this.DBfindData(props);
		const _topic = this.DBfindTopic(props);

		return bG.transitStackBarToBar(
			// If the intl have only one header, the header is the data user wants to know.
			_topic.intl.headers === undefined ? props.data : 
				_topic.intl.headers.length === 1 ? _topic.intl.headers[0] : props.data,
				_topic.intl.mHeaders, _topic.axes.y)
			.then(function() {
				t.appendBarMouseOver(props.data);
			});
	},

	// Transform the stack bar into stack bar with percent unit
	DBtransStackBarToPCT(props) {
		let bG = this.gpu.barGraph;

		const _topic = this.DBfindTopic(props);
		const _data = this.DBfindData(props);
		
		return bG.transitPCTStackBar(_topic.axes.y, _topic.intl.mHeaders);
	},

	// Transform the percentage stack bar into origin quantative stack bar
	DBtransPCTToOriginStackBar(props) {
		let bG = this.gpu.barGraph;
		const _topic = this.DBfindTopic(props);
		const _data  = this.DBfindData(props);

		return bG.transitPCTSBarToSBar(_topic.axes.y, _topic.intl, _topic.extl, true);
	},

	// Transform the percentage stack to general bar stack
	DBtransPCTToStackBar(props) {
		let bG = this.gpu.barGraph;
		const _topic = this.DBfindTopic(props);
		const _data  = this.DBfindData(props);
		return bG.transitPCTSBarToSBar(_topic.axes.y, _topic.intl, _topic.extl, false);
	},

	// Transform the percentage stack bar to primitive bar
	DBtransPCTStackBarToBar(props) {
		let bG = this.gpu.barGraph;
		const _data  = this.DBfindData(props);
		const _topic = this.DBfindTopic(props);
		
		return bG.transitPCTSBarToBar(
			_topic.axes.y, props.data, _topic.intl, _topic.extl, _topic.intl.mHeaders)
	},

	DBupdateStackBars(props) {
		let bG = this.gpu.barGraph;
		const _topic = this.DBfindTopic(props);

		return bG.updateStackBars(_topic.intl, _topic.extl)
	},

	// Produce the params for forward steps and backward steps.
	DBTopicStepsProducer(props) {

		let theme = store.getState().get('theme'),
				datasetIdx = DataFilterStateTree.findDatasetIndex(theme, props.dataset),
				dataIdx = DataFilterStateTree.findDataIndex(theme, props.dataset, props.data),
				chartIdx = DataFilterStateTree.findChartTypeIndex(theme, props.dataset, props.chartType);

		const topics = DataFilterStateTree.listTopic(theme, datasetIdx, dataIdx, chartIdx),
					fwdTopics = topics.filter((d, i) => { return i !== 0 }),
					bwdTopics = topics.filter((d, i) => { return i !== topics.length });

		// Forward steps
		let fwd = [];

		for (let topic of fwdTopics) {
			
			fwd.push({
				_: this,
				params: [
					{
						dataset: props.dataset,
						data: props.data,
						chartType: props.chartType,
						topic: topic
					}
				]
			});
		}
		
		let bwd = [];

		for (let topic of bwdTopics) {
			bwd.push({
				_: this,
				params: [
					{
						dataset: props.dataset,
						data: props.data,
						chartType: props.chartType,
						topic: topic
					}
				]
			});
		}

		return {
			fwd: fwd,
			bwd: bwd
		}
	},

	// Scrolling event update the text info and in some perticular moment, 
	// it also refreshens the chart
	// scrollReading(e) { // May not work well as expect.
		
	// },

	// working-spot: 
	DBTaleFactory() {

		// temporary if statement
		if (this.storyTeller._txtTale) {

			const index = store.getState().get('currentTaleIndex');
			const taleEle = this.storyTeller._txtTale.sections[index];
			const containerStyle   = this.storyTeller._componentStyleFactory(
				[taleEle.Container.pos, taleEle.Container.size]);
			let btnStyle = this.storyTeller._componentStyleFactory(
				[taleEle.IndButton.pos, taleEle.IndButton.style]);
			
			// TaleBlock inital style
			const taleStyle = { opacity: 0 }

			// Add the opacity for the next button to do the first render animation.
			btnStyle['opacity'] = 0;

				return (
					<div className='tale-container' style={ containerStyle }>
						<TaleBlock innerText={ taleEle.infoContext } style={ taleStyle }/>
						<NextTaleBtn style={ btnStyle } />
					</div>
					)
		}
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

	// working-spot
	shouldComponentUpdate(nextProps) {

		return nextProps.updateDataBoard
	},

	// Initial Data Visualizing
	componentDidMount() {

		let dataSheet = this.findDataSheetIndex(this.props);

		if (this.props.chartType === '直方圖') {
			this.vizDataWithBarChart(this.props, dataSheet);
			
		} else if (this.props.chartType === '趨勢圖') {
			this.vizDataWithLineChart(this.props, dataSheet);

		} else if (this.props.chartType === '圓環比例圖') {

		}
	},

	// The DataBoard component will renew the visualized data or change a different type.
	componentWillUpdate (nextProps, nextStates) {
		
		let dataSheet = this.findDataSheetIndex(nextProps);

		// working-spot
		// Select the chain 
		this.storyTeller.decideVizStoryChain(
			nextProps.dataset, nextProps.data, nextProps.chartType);

		// working-spot
		// Select the tales chain
		this.storyTeller.decideTaleChain(
			nextProps.dataset, nextProps.data, nextProps.chartType);

		var 
			// Renew the board when user switch dataset, chartTypes or 
			// switch to the new data when reading in the detail story.
			shouldRenew = 
				(this.props.dataset !== nextProps.dataset ||
				 this.props.chartType !== nextProps.chartType ||
				 (this.props.data !== nextProps.data &&
				 	this.props.topic !== nextProps.topic)) 
						? true : false,

			// Update the chart when user switch data viewing
			shouldUpdate = 
				(this.props.data !== nextProps.data &&
				 this.props.topic === nextProps.topic ) ? true : false,

			// Extend the chart when topic update.
			isTopicSwitching = 
				(this.props.topic !== nextProps.topic && 
				 this.props.dataset === nextProps.dataset &&
				 this.props.data === nextProps.data) ? true : false,

			// working-spot
			// 
			isTopicSwitchingByTaleUd = (() => {
				if (this.storyTeller._txtTale) {
					return this.storyTeller._txtTale.sections[nextProps.taleIndex].isTopicFirstSec;
				}
				return false
			})();

		if (shouldRenew) { 

			d3.select('#SKETCHPAD').remove();

			if (nextProps.chartType === '直方圖') { 
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
			if (nextProps.chartType === '直方圖') 
				this.vizDataWithBarChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '趨勢圖') 
				this.vizDataWithLineChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '圓環比例圖')
				this.vizDataWithRingChart(nextProps, dataSheet, true)

		} else if (isTopicSwitching) { // Update when topic changing.

			// Produce the steps for topic explanation.
			let steps = this.DBTopicStepsProducer(nextProps);
			// Select the chain 
			// this.storyTeller.decideVizStoryChain(
			// 	nextProps.dataset, nextProps.data, nextProps.chartType);
			this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, steps.fwd, steps.bwd);
			
		} else if (isTopicSwitchingByTaleUd) {
			// working-spot
			let steps = this.DBTopicStepsProducer(nextProps);

			// working-spot: Try to figure out the relationship between tale index and topic depth.
			let td = this.props.topicDepth,
					topicFirstTales = this.storyTeller.calTopicFirstTale(),
					tale = topicFirstTales.find((t, i) => {
						console.log(t);
						return i === td
					});
			console.log(tale.topicName);
			store.dispatch(rollingTalesAC(tale.topicName, this.props.topicDepth));

			this.storyTeller.toTell(this.props.topicDepth, this.props.topicDepth+1, steps.fwd, steps.bwd);
		}
	},

	render() {

		// working-spot
		let tale = this.DBTaleFactory();
		
		return (
			<div id='DATABOARD_WRAPPER' className='b20-col-md-20'>
				<div id='DATABOARD-vizLayer'></div>
				{
						/* Temp if statement */
						this.storyTeller._txtTale ? 
							<TagentalIndicators 
								currentIndex = { this.props.taleIndex }
								indicators={ this.storyTeller._txtTale.sections } /> : null
					}
				{ /*
					this.storyTeller._txtTale ?
						<DataTxtBoard context={ this.storyTeller._txtTale }/> : 
						<DataTxtBoard />
				*/}
			{/* working-spot */}
				{ this.storyTeller._txtTale ? tale: null }
				{ /*this.storyTeller._txtTale ? NextBtn: null*/ }
			</div>
		)
	}
});

// working-spot
const TaleBlock = React.createClass({

	componentDidMount() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	componentWillReceiveProps() {
		$v(ReactDOM.findDOMNode(this), { opacity: 0 }, { duration: 1 });
	},

	componentDidUpdate() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	render() {
		return (
			<div className='tale-body' style={this.props.style}>
				{ this.props.innerText }
			</div>
			)
	}
});

// working-spot
const NextBtn = React.createClass({

	componentDidMount() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	componentWillUpdate() {
		$v(ReactDOM.findDOMNode(this), { opacity: 0 }, { duration: 1 });
	},

	componentDidUpdate() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	render() {
		return (
			<div 
				className='nextbtn'
				style={ this.props.style }
				onClick={ this.props.nextTale } > 
				<span className='ver-helper'></span>
				<span>Next &nbsp;&nbsp;</span>
				<span className='more-indicator'>&raquo;</span>
			</div>)
	}

});

// working-spot
// const DataTxtBoard = React.createClass({


// 	render() {

// 		// The number of sub layers are decided by the tale indicators
// 		let txtLayers = [];

// 		if (this.props.context) {
// 			let i = 0;
// 			for (let section of this.props.context.sections)
// 				txtLayers.push(<DataTxtLayer key={ i++ } text={ section } />);
// 		}
// 		else {
// 			console.log('testing');
// 			txtLayers.push(<DataTxtLayer key={0}/>);
// 			txtLayers.push(<DataTxtLayer key={1}/>);
// 			console.log(txtLayers);
// 		}

// 		return (
// 			<div id="DATABOARD-txtLayer" onScroll={ this.scrollReading } >
// 					{ txtLayers }
// 			</div>
// 			)
// 	}
// });

// const DataTxtLayer = React.createClass({

// 	render() {
// 		return (
// 			<div className='subLayer'>
// 			</div>
// 			)
// 	}
// });


// working-spot
const TagentalIndicators = React.createClass({

	render() {

		// working-spot: Tangetal Indicators should be dynamical position.

		let keyIndex = 0,
				indicators = [];

		for ( let ind of this.props.indicators ) {
			indicators.push(
				<TagentalIndicator
					currentIndex = { this.props.currentIndex }
					indIndex = { keyIndex }
					key={ keyIndex++ }
					isSmall={ ind.isTopicFirstSec ? false : true } />);
		}

		return (
			<div className='indicators'>
				{ indicators }
			</div>
			)
	}

});

// working-spot
const TagentalIndicator = React.createClass({

	render() {
		
		return (
			<div className='indicator-block'>
				<div className={ this.props.isSmall ? 'indicator-small' : 'indicator'}>
					<TagentalIndicatorMkr 
						isActive={ this.props.indIndex === this.props.currentIndex ? true : false } 
						isPassed={ this.props.indIndex < this.props.currentIndex ? true : false } 
						small={ this.props.isSmall } />
				</div>
			</div>
			)
	}
});


// working-spot
const TagentalIndicatorMkr = React.createClass({

	render() {
		return (
			this.props.isSmall ? 
				<div className={ 
					this.props.isActive ? 'indicator-small-marker active' : 
					this.props.isPassed ? 'indicator-small-marker passed' : 'indicator-small-marker'}></div> :
				<div className={ 
					this.props.isActive ? 'indicator-marker active' : 
					this.props.isPassed ? 'indicator-marker passed' : 'indicator-marker'}></div> 
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
				optionIdx = 0,
				menuItems = [];
		
		for (let option of this.props.options) 
			menuItems.push(<StatFilterDropdownMenuItem
				key={++key} optionIdx={optionIdx++} name={option} menuIndex={this.props.menuIndex}/>)
		

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
				<span className='ver-helper'></span>
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


function selectDropdownOptionAC(theme, optionName, fieldsetIndex, dIndex, topicDepth) {
	return {
		type : 'SELECT_DROPDOWN_OPTION',
		theme: theme,
		fieldsetIndex: fieldsetIndex,
		dataIndex: dIndex,
		option: optionName, // Option maybe the name of the dataset, data, chartType or topic.
		topicDepth: topicDepth
	}
}

// working-spot
function rollingTalesAC(topic, depth) {
	return {
		type: 'INCRE_TOPIC_DEPTH',
		topic: topic,
		topicDepth: depth,
	}
}

// working-spot
function setTaleIndexAC(index) {
	return {
		type: 'SET_TALE_INDEX',
		taleIndex: index
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

		// working-spot
		// Set the tale index
		case 'SET_TALE_INDEX':
			return setTaleIndex(state, action.taleIndex)

		case 'INCRE_TOPIC_DEPTH':
			 return rollingTales(state, action.topic, action.topicDepth)

		case 'SELECT_DROPDOWN_OPTION':
			return selectDropdownOption(
				state, 
				action.theme, action.option, action.fieldsetIndex, action.dataIndex, action.topicDepth)

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
	let defaultTaleIndex = null;

	// Topic depth defines how deep the user drilling into the data.
	let defaultTopicDepth = null;

	// working-spot
	// A control state to decide the viz data board refresh or not.
	let defaultDataBoardUpdateSet = setState('updateDataBoard', true);

	let defaultFilterDropdownMenus = null;

	switch(theme) {
		case 'POLICE_STAT':

			themeState = setState('theme', 'police');
			statTitle = setState('statTitleImageSrc', './src/policeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '竊盜案件');
			defaultData = setState('currentData', '合計發生件數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '案件總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);
			defaultTaleIndex = setState('currentTaleIndex', 0);

			// Set the default dropdown menu and its option.
			defaultFilterDropdownMenus = _setDefaultDropdownMenus('police');

			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames, 
				defaultDataset, defaultData, defaultChartType, 
				defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus, 
				defaultTaleIndex, defaultDataBoardUpdateSet
				)

		case 'PROSECUTION_STAT':

			themeState = setState('theme', 'prosecution');
			statTitle = setState('statTitleImageSrc', './src/prosecuteStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '殺人罪');
			defaultData = setState('currentData', '被告人數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);
			defaultTaleIndex = setState('currentTaleIndex', 0);

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('prosecution');
				
			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames,
				defaultDataset, defaultData, defaultChartType, 
				defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus, 
				defaultTaleIndex, defaultDataBoardUpdateSet
				)

		case 'JUDICIAL_STAT':

			themeState = setState('theme', 'judicial');
			statTitle = setState('statTitleImageSrc', './src/judgeStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '地方法院刑事案件收結情形');
			defaultData = setState('currentData', '案件數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '受理件數');
			defaultTopicDepth = setState('currentTopicDepth', 0);
			defaultTaleIndex = setState('currentTaleIndex', 0);

			defaultFilterDropdownMenus = _setDefaultDropdownMenus('judicial');

			return state.merge(
				navState, mainState,
				themeState, statTitle, filterNames, 
				defaultDataset, defaultData, defaultChartType, 
				defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus, 
				defaultTaleIndex, defaultDataBoardUpdateSet)

		case 'CORRECTION_STAT':
			
			themeState = setState('theme', 'correction');
			statTitle = setState('statTitleImageSrc', './src/correctStatTitle-160px.png');
			defaultDataset = setState('currentDataset', '監獄人數概況');
			defaultData = setState('currentData', '本年執行人數');
			defaultChartType = setState('currentChartType', '直方圖');
			defaultTopic = setState('currentTopic', '總數');
			defaultTopicDepth = setState('currentTopicDepth', 0);
			defaultTaleIndex = setState('currentTaleIndex', 0);


			defaultFilterDropdownMenus = _setDefaultDropdownMenus('correction');

			return state.merge(
				navState, mainState, 
				statTitle, filterNames, themeState,
				defaultDataset, defaultData, defaultChartType,
				defaultTopic, defaultTopicDepth, defaultFilterDropdownMenus, 
				defaultTaleIndex, defaultDataBoardUpdateSet
				)

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
	let newDataset = null;
	let newData = null;
	let newChartType = null;
	let newTopic = null;
	let newDropdownMenuStates = null;

	// Topic depth define how much info for users to read.
	let newTopicDepth = null;

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
						newState.topicDepth,
						newState.dropdownMenuStates)
				}
			return state.merge(collapsedAllDropdownMenuStates)
		} 

		// Selecting data
		else if (fieldsetIndex === 1) {

			if (currentState.get('currentData') !== optionName) {

				const newState = __dataSwitchRendering(state, theme, optionName);

				return state.merge(
						newState.data,
						newState.topic,
						newState.topicDepth,
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
				newTopicDepth = setState('currentTopicDepth', topicDepth);

				return state.merge(newTopic, newTopicDepth, collapsedAllDropdownMenuStates)
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

		// Set the new topic depth to 0
		let newTopicDepth = setState('currentTopicDepth', 0);

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
			topicDepth: newTopicDepth,
			dropdownMenuStates: newDropdownMenuStates
		}
	}

	function __dataSwitchRendering(state, theme, dataName) {

		const datasetName = state.get('currentDataset');

		const datasetIndex = 
			DataFilterStateTree.findDatasetIndex(
				theme, datasetName);

		const dataIndex = 
			DataFilterStateTree.findDataIndex(theme, datasetName, dataName);

		const chartTypeIndex = 
			DataFilterStateTree.findChartTypeIndex(theme, datasetName, state.get('currentChartType'));

		const newData = setState('currentData', dataName);

		const newTopic = setState(
			'currentTopic', 
			stateTree.get(datasetIndex).content.data[dataIndex].topics[chartTypeIndex][0].name
			);

		const newTopicDepth = setState('currentTopicDepth', 0);

		// Switch data will change the available topics
		const	newDropdownMenuStates = 
			setState(
				'filterDropdownMenus', 
				updateTopicDropdownOption(state, dataName, null));

		return {
			data: newData,
			topic: newTopic,
			topicDepth: newTopicDepth,
			dropdownMenuStates: newDropdownMenuStates
		}
	}

	function __chartTypeSwitchRendering(state, chartType, fieldsetIndex) {

		const newChartType = setState('currentChartType', optionName);

		const newTopicDepth = setState('currentTopicDepth', 0);

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

// working-spot
function rollingTales(state, topic, topicDepth) {
	const newTopicDepth = setState('currentTopicDepth', topicDepth+1);
	const newTopic = setState('currentTopic', topic);
	const updateDataBoard = setState('updateDataBoard', false);
	return state.merge(newTopicDepth, newTopic, updateDataBoard)
}


function setTaleIndex(state, taleIndex) {

	const newState = setState('currentTaleIndex', taleIndex);

	return state.merge(newState)
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
						
		selectOption: (e) => {

			const key = store.getState().get('theme');
				
			// Data is bounding with topics so th
			if (props.menuIndex === 1) 
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, 0));
			
			// The topic user clicks on determines the depth.
			else if (props.menuIndex === 3) 
				dispatch(selectDropdownOptionAC(
					key, props.name, props.menuIndex, props.optionIdx, props.optionIdx));
			else  
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, 0));
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
		currentFilterDropdownMenus: state.get('filterDropdownMenus'),
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
		topic    : state.get('currentTopic'),
		topicDepth: state.get('currentTopicDepth'),
		taleIndex : state.get('currentTaleIndex'),

		// working-spot
		updateDataBoard: state.get('updateDataBoard')
	}
}

const StatDataBoard = RRd.connect(
	mapStateToDataBoardProps,
	null
	)(DataBoard);

/* Connect more tale button */
// working-spot
const mapDispatchToNextBtn = (dispatch, props) => {
	return {
		nextTale: (e) => {
			// working-spot
			const taleIndex = store.getState().get('currentTaleIndex');

			store.dispatch(setTaleIndexAC(taleIndex + 1));
		}
	}
}

const NextTaleBtn = RRd.connect(
	null,
	mapDispatchToNextBtn
	)(NextBtn);

/* Connect Indicator */
const mapDispatchToIndicators = (dispatch, props) => {

	return {
						
		selectTale: (e) => {

		}
	}	

};

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