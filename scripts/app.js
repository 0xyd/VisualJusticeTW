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

// FB Library
window.FB = undefined;

window.isLocal = document.URL.match(/127.0.0.1/) ? true : false;

// window.isLocal = false;


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
							// '趨勢圖'
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
							// '趨勢圖'
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											}
										],
										// Next version
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											}
										],
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											}
										],
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											}
										],
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											}
										],
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
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
												},
												extl: {
													headers: null
												},
												intl: {
													header: '',
												}
											},
										],
										// [
										// 	{
										// 		name: '趨勢',
										// 		axes: {
										// 			x: '民國',
										// 			y: '人數'
										// 		}
										// 	}
										// ]
									]
								}
							]
						}
					},
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
					// 公共危險罪
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
					// 貪污罪
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
					// 瀆職罪
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
					// 詐欺罪
					{
						dataset: '詐欺罪',
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
					// 重傷罪
					{
						dataset: '重傷罪',
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
					// 強制性交罪
					{
						dataset: '強制性交罪',
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
					// 偽造文書印文罪
					{
						dataset: '偽造文書印文罪',
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
					// 賭博罪
					{
						dataset: '賭博罪',
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
					// 毒品罪
					{
						dataset: '毒品罪',
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
				]))
			// State of judicial data selector
			.set('judicial',
				List([
					{
						dataset: '地方法院刑事案件收結情形',
						availableChartTypes: [
								'直方圖',
								// '趨勢圖'
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
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
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
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
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
								// '趨勢圖'
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
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
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
								// '趨勢圖'
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
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
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
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
												}
										}]
										,
										[
											{
												name: '趨勢',
												axes: {
													x: '民國',
													y: '人數'
												},
												extl: {
													headers: null
												},
												intl: {
													headers: ['終結', '未結'] 
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
												},
												extl: {
													url: null,
													headers: []
												},
												intl: {
													headers: []
												}
											}, 
											// For the next version
											// {
											// 	name: '入監原因分類',
											// 	axes: {
											// 		x: '民國',
											// 		y: '人數'
											// 	}
											// }
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
															return './correction/c3.csv'
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
												},
												extl: {
													headers: null,
												},
												intl: {
													headers: null,
												}
											}, 
											// Next new task
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
									name: '本年年底留監人數',
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
									name: '民國85年',
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
									name: '民國86年',
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
									name: '民國87年',
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
									name: '民國88年',
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
									name: '民國89年',
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
									name: '民國90年',
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
									name: '民國91年',
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
									name: '民國92年',
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
									name: '民國93年',
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
									name: '民國94年',
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
									name: '民國95年',
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
									name: '民國96年',
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
									name: '民國97年',
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
									name: '民國98年',
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
									name: '民國99年',
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
									name: '民國100年',
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
									name: '民國101年',
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
									name: '民國102年',
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
									name: '民國103年',
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
								}
							]
						}
					},
					{
						dataset: '103年戒護人力概況',
						availableChartTypes: [
							'散佈圖'
						],
						content: {
							data: [
								{
									name: '戒護人力情形',
									topics: [
										[
											{
												name: '全國矯正機關',
												axes: {
													x: '總戒護人力',
													y: '戒護人力比',
													r: '收容人數',
													c: '矯正機關類型',
													t: '矯正機關名稱'
												},
												intl: {
													headers: [
														'矯正機關類型',
														'矯正機關名稱',
														'矯正機關戒護人力',
														'合署辦公機關',
														'合署辦公機關戒護人力',
														'矯正機關法定容額',
														'收容人數', 
														'超收率',
														'戒護人力比'
													],
													filterSets: null
												},
												
												extl: {
													url: null
												},
												tipFormat: {
													title: '矯正機關名稱',
													items: [
														{
															name: '矯正機關類型'
														},
														{
															name: '收容人數'
														},
														{
															name: '矯正機關法定容額'
														},
														{
															name: '超收率'
														},
														{
															name: '矯正機關戒護人力'
														},
														{
															name: '戒護人力比'
														}
													]
												}
											},
											{
												name: '全國監獄',
												axes: {
													x: '總戒護人力',
													y: '戒護人力比',
													r: '收容人數',
													c: '超收率',
													// t: '矯正機關名稱'
												},
												intl: {
													headers: [
														'矯正機關類型',
														'矯正機關名稱',
														'矯正機關戒護人力',
														'合署辦公機關',
														'合署辦公機關戒護人力',
														'矯正機關法定容額',
														'收容人數', 
														'超收率',
														'戒護人力比'
													],
													filterSets: [
														{
															type : '矯正機關類型',
															value: '監獄'
														},
														{
															type: 'colorLinearGradient',
															value: '監獄'
														}
													],
												},
												extl: {
													url: null
												},
												tipFormat: {
													title: '矯正機關名稱',
													items: [
														{
															name: '收容人數'
														},
														{
															name: '矯正機關法定容額'
														},
														{
															name: '超收率'
														},
														{
															name: '矯正機關戒護人力'
														},
														{
															name: '戒護人力比'
														}
													]
												}
											},
											{
												name: '全國看守所',
												axes: {
													x: '總戒護人力',
													y: '戒護人力比',
													r: '收容人數',
													c: '超收率',
													t: '矯正機關名稱'
												},
												intl: {
													headers: [
														'矯正機關類型',
														'矯正機關名稱',
														'矯正機關戒護人力',
														'合署辦公機關',
														'合署辦公機關戒護人力',
														'矯正機關法定容額',
														'收容人數', 
														'超收率',
														'戒護人力比'
													],
													filterSets: [
														{
															type : '矯正機關類型',
															value: '看守所'
														},
														{
															type: 'colorLinearGradient',
															value: '看守所'
														}
													],
												},
												extl: {
													url: null
												},
												tipFormat: {
													title: '矯正機關名稱',
													items: [
														{
															name: '收容人數'
														},
														{
															name: '矯正機關法定容額'
														},
														{
															name: '超收率'
														},
														{
															name: '矯正機關戒護人力'
														},
														{
															name: '戒護人力比'
														}
													]
												}
											},
											{
												name: '全國戒治所',
												axes: {
													x: '總戒護人力',
													y: '戒護人力比',
													r: '收容人數',
													c: '超收率',
													// t: '矯正機關名稱'
												},
												intl: {
													headers: [
														'矯正機關類型',
														'矯正機關名稱',
														'矯正機關戒護人力',
														'合署辦公機關',
														'合署辦公機關戒護人力',
														'矯正機關法定容額',
														'收容人數', 
														'超收率',
														'戒護人力比'
													],
													filterSets: [
														{
															type : '矯正機關類型',
															value: '戒治所'
														},
														{
															type: 'colorLinearGradient',
															value: '戒治所'
														}
													]
												},
												extl: {
													url: null
												},
												tipFormat: {
													title: '矯正機關名稱',
													items: [
														{
															name: '收容人數'
														},
														{
															name: '矯正機關法定容額'
														},
														{
															name: '超收率'
														},
														{
															name: '矯正機關戒護人力'
														},
														{
															name: '戒護人力比'
														}
													]
												}
											},
											{
												name: '全國少年矯正機關',
												axes: {
													x: '總戒護人力',
													y: '戒護人力比',
													r: '收容人數',
													c: '超收率',
													// t: '矯正機關名稱'
												},
												intl: {
													headers: [
														'矯正機關類型',
														'矯正機關名稱',
														'矯正機關戒護人力',
														'合署辦公機關',
														'合署辦公機關戒護人力',
														'矯正機關法定容額',
														'收容人數', 
														'超收率',
														'戒護人力比'
													],
													filterSets: [
														{
															type : '矯正機關類型',
															value: '少年觀護所'
														},
														{
															type : '矯正機關類型',
															value: '矯正學校'
														},
														{
															type : '矯正機關類型',
															value: '少年輔育院'
														},
														{
															type: 'colorLinearGradient',
															value: '少年矯正機關'
														}
													]
												},
												extl: {
													url: null
												},
												tipFormat: {
													title: '矯正機關名稱',
													items: [
														{
															name: '收容人數'
														},
														{
															name: '矯正機關法定容額'
														},
														{
															name: '超收率'
														},
														{
															name: '矯正機關戒護人力'
														},
														{
															name: '戒護人力比'
														}
													]
												}
											},
										]
									]
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
					'公共危險罪', '貪污罪', '瀆職罪', '詐欺罪',
					'重傷罪', '強制性交罪', '偽造文書印文罪', '賭博罪',
					'毒品罪'
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
			},
			// working-spot
			{
				dataset: '103年戒護人力概況',
				data: '戒護人力情形',
				vizType: '散佈圖',
				fwdSteps: [
					{
						goto: '全國監獄',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						},
						end: null
					},
					{
						goto: '全國看守所',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						}
					},
					{
						goto: '全國戒治所',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						}
					},
					{
						goto: '全國少年矯正機關',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						}
					}
				],
				bwdSteps: [
					{
						goto: '全國矯正機關',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						},
						end: null
					},
					{
						goto: '全國監獄',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						},
						end: null
					},
					{
						goto: '全國看守所',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						}
					},
					{
						goto: '全國戒治所',
						transit: function(_this, params) {
							return _this.DBUpdateScatterPlot.apply(_this, params);
						}
					}
				]
			}
		];

		// Tales for explain the chart.
		this.taleChains = [
			// 兒少法 (Prosecution)
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
						infoContext  : 
							<span>
							兒童及少年，是國家未來的主人翁，更是社會持續發展及進步的原動力，
							確保我們的孩子在無憂無慮、安全健康的環境下成長，是我們責無旁貸的使命，
							為此立法院立法<a className='tale-body-link' href='http://law.moj.gov.tw/LawClass/LawOldVer_Vaild.aspx?PCODE=D0050023'>
								兒童及少年性交易防制條例</a>就是希望給予我們的下一代多一層保障。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '4.5em',
								top : '9em',
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
						infoContext  : '早年的粉紅色代表罰金，近年的黃色代表拘役，無論何者均是輕罪，為什麼呢？',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '4.5em',
								top : '9em',
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
						infoContext  : '因為此條例並不一定是涉及性交易才會被起訴，散步兒少相關猥褻資訊或向兒少散步猥褻資訊均是違反此條例的，但罪不至徒刑，故此。',
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '4em',
								top : '6em',
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
						infoContext  : '民國91、92年很明顯被判有期徒刑人數遠勝前幾年，也比後幾年多出不少，為什麼呢？',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '4em',
								top : '6em',
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
						infoContext  : '目前我們也還沒找到合理的解釋，還請各位一同集思廣益囉',
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: true
					}
				]
			},
			// 殺人罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '殺人罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								right: '4em',
								top : '4em',
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
						infoContext  : '殺人罪是古老之罪行，流傳千年之久，但社會關注度不曾減弱。',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '4em',
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
						infoContext  : '我們統計的殺人罪包含「殺人」、「殺人未遂」、「預備殺人」及「殺害直系尊親屬」不包含過失致死及相關罪行。',
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '3em',
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
						infoContext  : '過去三十年台灣殺人犯的數量是逐年減少的，被求處最高刑罰（死刑）的現象亦趨罕見。特別的是，無罪的人數量也逐年遞減，應可解釋為科學辦案日新月異，減少因證據不足而判無罪的現象。',
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '3em',
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
						infoContext  : 
							<span>以百分比來看，這張圖跟上張無異，有個案例發生於103年的藍「有罪免刑」(藍色表示)，為什麼呢？請看以下中國時報之
								<a className='tale-body-link' href='http://www.chinatimes.com/realtimenews/20140605002800-260402'>報導</a>
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 竊盜罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '竊盜罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : 
							<span>竊盜是古老的犯罪，相較於其他國家，台灣人普遍路不拾遺，東西掉了找回來的情況也多有所聞。不容忽視的是，竊盜罪歷年來被告人數是持續增長的，也長期佔據（2005年到2009年，根據法務部統計處資料）台灣三大常見犯罪第二名。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : <span>竊盜案一直都在你我身邊上演，下次隨手把東西放在桌上就要離開座位時，請再想一想確定要這麼做嘛?</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : <span>近10年來，因竊盜被判罰金的人數大幅減少，改用拘役取代之。不難理解，若非出於貧窮何須偷東西？要他們繳罰金又有什麼意義？</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '4em',
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
						infoContext  : 
							<span>除了罰金、無罪人數減少外，被判有期徒刑之比例也是逐年遞減，盡以拘役處分。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '4em',
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
						infoContext  : 
							<span>法務部近年防治犯罪的看法是「輕罪輕判、重罪重判」因為監獄是個大染缸，小賊進去出來往往變大尾，能避免入獄就避免。</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '4em',
								top : '4em',
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
						infoContext  : 
							<span>竊盜罪為本刑五年以下之罪，當屬法務部稱之輕罪。然而竊盜犯常常犯下不只一起案件。基於一罪一罰原則，常有聽聞慣竊遭判十年、二十年之徒刑。</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: true
					},
				]
			},
			// 擄人勒贖罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '擄人勒贖罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '7em',
								top : '6em',
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
						infoContext  : 
							<span>千萬別以為90年過後治安敗壞。剛好相反，治安就是因為變好了才有這樣的圖表。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '7em',
								top : '6em',
							},
							size: {
								width : '350px',
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
						infoContext  : 
							<span>
								二戰時期制定的&#60;&#60;
									<a href='http://law.moj.gov.tw/Law/LawSearchResult.aspx?p=A&t=A1A2E1F1&k1=懲治盜匪條例' className='tale-body-link'>懲治盜匪條例</a>&#62;&#62;
									在民國90年廢止，故綁匪從91年起開始適用舊法，也就是刑法擄人勒贖罪，所以有91年起犯罪人數爆量的現象（但民國90年前也是有綁匪適用舊法的，關鍵在於特別法與普通法認定標準不一，有興趣的朋友可以自行比較）
								</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '7em',
								top : '6em',
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
						infoContext  : <span>雖然民國90年之前之此罪無罪人數甚高，但因犯案人數歷年都在30人以下，影響解釋變因過多，無須另作解釋。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '3em',
								top : '6.5em',
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
						infoContext  : 
							<span>民國98年之後，擄人勒贖犯罪人數急墜，除了此罪被判重刑風險高之外，另一盛行的「輕罪」產生了替代效果，那就是詐欺。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '3em',
								top : '6.5em',
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
						infoContext  : 
							<span>謊詐綁走被害人之親屬，要求高額贖金，既不冒被抓之危險，也鮮少被重判，這麼「好賺」的行業，意外毀了綁匪的工作！</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: true
					}
				]
			},
			// 恐嚇罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '恐嚇罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '6em',
								top : '3em',
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
						infoContext  : 
							<span>
							恐嚇罪非重罪。被告出於義憤恐嚇被害人，並非出於恐嚇之意，通常可以和解或是罰金了事，
							但若恐嚇案件涉及妨害自由、組織犯罪條例，甚至擄人勒贖，檢察官通常會擇一罪名起訴。
							也因此，恐嚇本身罰責不重，但還是有人被處重判。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '3em',
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
						infoContext  : 
							<span>
								恐嚇罪是個相形單純的罪，非徒刑即無罪，罰金、拘役幾乎不存在。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '3em',
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
						infoContext  : 
							<span>恐嚇認定標準見仁見智，法官裁量標準很寬。無罪比例也很高</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					},

				]
			},
			// 瀆職罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '瀆職罪',
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
						infoContext  : 
							<span>
								我們蒐集瀆職罪的資料本是認為犯下此罪之公務員人數應當不少，且跟貪污罪一樣會造成人民對社會的不信任，
								但實際統計後才發現跟我們想的不一樣。被起訴的人不多，有罪的人更少。
								因為「瀆職」的犯罪構成要件不好拿捏，公務員要有不作為，且對人民或社會造成傷害，此罪才會成立。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '3.5em',
								top : '7em',
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
						infoContext  : 
							<span>
								很明顯的，民國84年有瀆職罪不受理人數相當多的現象。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
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
						infoContext  : 
							<span>以比例而言，被判無罪的人也多。除此之外「其他」也多（免訴、撤回、管轄錯誤）可見瀆職罪之地位尷尬。</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 槍砲 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '槍砲彈藥刀械管制條例',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								right: '2em',
								top : '4em',
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
						infoContext  : 
							<span>
								台灣黑槍氾濫嚴重?不嚴重? 可以確定的是，真正被槍打傷或是打死的人在台灣還是少數。
								但無論如何，街頭駁火、幫派火拼，都是重大社會維安問題，也因此此條例對於持有槍械之人之刑度多在五年以上，不可謂之輕。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},					
					{
						Container: {
							pos : {
								right: '2em',
								top : '4em',
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
						infoContext  : 
							<span>
								值得注意的是，在無法確定有無殺傷力之前，外型仿真之空氣槍、瓦斯槍及BB槍持有者也有被此條例起訴的風險，這也可以解釋為什麼無罪之人這麼多。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '2em',
								top : '4em',
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
						infoContext : 
							<span>
								按照「重罪重判、輕罪輕判」（參考竊盜罪）之標準，近年犯此條例被判拘役之人數也是被壓縮，畢竟五年本刑可不是輕罪。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					},

				]
			},
			// 公共危險罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '公共危險罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : 
							<span>
								根據英國《太陽報》引用壓力團體「移民觀察」（Migration Watch）的研究，台灣是全世界人口密度第二高的國家，在這麼擁擠的地方居住，公眾居住環境安全維護是不容疏忽的，只要一丁點的不慎便有可能造成嚴重的後果。公共危險罪早些年約束縱火、失火的行為，加上台灣天災多，違背建築術成規也被視為公共危險罪的一環。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},			
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : 
							<span>
								近年來，酒駕肇事奪走多條人命，引發社會憤慨，經過兩次修法後，不能安全駕駛已然成為公共危險罪之大宗，2005年到2009年，公共危險罪一直是台灣入監服刑人數第三大罪名。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},	
					{
						Container: {
							pos : {
								left: '7em',
								top : '4em',
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
						infoContext  : 
							<span>
								在1999年之前，單純的酒醉駕車乃是由警察以行政罰的方式為處罰，
								為了有效嚇阻酒醉駕車，因此在1999年(民國88年)刑法修正時，立法者將原本僅屬於行政罰的酒駕與類似行為入罪化，
								而增訂刑法第185條之3，即只要服用毒品、麻醉藥品、酒類或其他相類之物，致不能安全駕駛動力交通工具者，
								即可處一年以下有期徒刑、拘役或三萬元以下罰金。所以民國89年公共危險罪才爆量
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
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
						infoContext : 
							<span>
								時死亡案件98年為397人， 99年、100年卻增為419人、439人，加上葉少爺事件引發社會憤怒，
								立法院乃於102年5月31號修法參考德國、美國標準，將吐氣所含酒精濃度達每公升0.25毫克以上，認定為不能安全駕駛之標準，違者處2年以下有期徒刑，得併科20萬元以下罰金。
								這是103年公共危險罪裁判確定人數暴量的原因。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 貪污 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '貪污罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '6em',
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
						infoContext  : 
							<span>
								貪污一向是國人最痛恨的犯罪手法之一，往往造成人民與對政府的不信任，也會導致巨大的經濟損失。
								根據國際透明組織評比，台灣的「貪腐印象」從08年到15年維持在世界排名39到30名之間，雖不令人滿意，但尚可接受。
								該組織排名主要是依據外商在跟各國政府打交道時的感受來統計，無法看出被起訴的貪瀆人數。但我們的資料可以！
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
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
						infoContext  : 
							<span>
								統計圖為依&#60;&#60;貪污治罪條例&#62;&#62;被起訴人總數，並不是案件數。
								有可能貪污案件減少，但每一案件涉案人數增加，造成整體貪污人數增加的現象
							</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
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
						infoContext  : 
							<span>
								貪污治罪條例定罪率從99年到103年分別是84.8、75.1、74.1、72.7及70.3(資料來源:法務統計年報)。
								相較於多數罪有高達九成的定罪率，貪瀆確實不易定罪。原因如下:
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
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
						infoContext  : 
							<span>
								貪污治罪條例定罪率從99年到103年分別是84.8、75.1、74.1、72.7及70.3(資料來源:法務統計年報)。
								相較於多數罪有高達九成的定罪率，貪瀆確實不易定罪。原因如下:
							</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '8em',
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
						infoContext  : 
							<span>
								<ul>
									<li>1.計算方式以人為本，不是以案為本，所以一案假設有五人被起訴，一人被定罪，縱使本案成立，定罪率卻只有20%。</li>
									<li>2.貪瀆屬於高度智慧之白領犯罪，多數犯行早已計畫良久、證人稀少且證據隱密，檢調事後蒐集犯罪事實有其難度。</li>
								</ul>
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '8em',
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
						infoContext : 
							<span>
								<ul>
									<li>3.貪污治罪條例法定刑度過高，以第四條第一項為例，竊取或侵占公用或公有器材、財物者處無期徒刑或十年以上有期徒刑，也就是說縱使只是公務員從辦公室攜帶橡皮擦回家而被起訴，法官最輕也要判十年，使得許多法官判不下去，只得判無罪。</li>
									<li>4.同上述理由，罪責過重降低被告自白意願，也讓法官採取極度嚴格之採證標準，影響定罪率。</li>
								</ul>
							</span>,
						infoAnimation: '',
						isTopicFirstSec: false,
						isEnd: true
					}
				]
			},
			// 詐欺罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '詐欺罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '6em',
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
						infoContext  : 
							<span>
								此罪堪稱近期最受矚目的罪，但其實此罪從10年前便大行其道。
								雖然被判決有罪之人年年增長，但犯罪手法卻也層出不窮，使檢警疲於奔命，
								加上網路跟通訊科技日新月異，大幅增加追捕難度。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
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
						infoContext  : 
							<span>
								雖然詐欺犯犯罪不法所得可謂日進斗金，但判決結果大多不到六月個，拘役的也不在少數。
								未來如何延長刑度、加重刑罰，值得好好商榷
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '6em',
								top : '4em',
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
						infoContext  : 
							<span>
								從圖形可以看見民國91年之前詐欺被判無罪的人相當的多，但從92年之後便逐年減少。有期徒刑人數則在96年達到高峰，之後略微下降，近6年則持平。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 賭博罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '賭博罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								right: '6em',
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
						infoContext  : 
							<span>
								臺灣人過年總喜歡賭一把，親朋好友聚在家裡，關起門來摸個三五圈，自然不成問題，
								但是別忘了小賭怡情、大賭傷性的原則，更需要注意的是，不要吃上官司。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '6em',
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
						infoContext  : 
							<span>
								根據刑法賭博罪，在公共場所或公眾得出入之場所賭博財物者便犯了賭博罪，
								不過被抓到的話，賭客大多可以併科罰金，只有供給賭博場所者較需擔心徒刑問題。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								right: '6em',
								top : '4em',
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
						infoContext  : 
							<span>
								賭博罪是我們蒐集眾多罪刑中，唯一以罰金為主要懲罰方式的罪，雖然賭博並不是重罪，但還是會留下前科，能避面即避免之。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 重傷罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '重傷罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								重傷罪聽起來很嚴重，事實上刑法對重傷的定義也很嚴格，所以被以重傷罪起訴的人並不算多。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								不過，法務部在統計重傷罪的時候，把重傷害跟傷害致死合併統計了，
								所以實際上被起訴的人也不少，但判決呈現重傷害多處五年以下，
								傷害致死多處五年以上的分化現象。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								歷年來被判有期徒刑、無罪或是不受理的現象十分穩定，是個沒什麼變化的罪。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},
			// 強制性交罪 (Prosecution)
			{
				// The first section of each topic is the main indicator.
				dataset: '強制性交罪',
				data: '被告人數',
				vizType: '直方圖',
				sections: [
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								強制性交包含強姦及強姦殺人，後來隨著時代進步，
								認定男女皆有可能成為被害者，於是乎將強姦及強姦殺人改成強制性交及強制性交殺人，
								但不影響我們統計的基礎。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '總數',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								過去性侵受害者多半 不敢報警，深怕被報復或是被社會瞧不起，
								也造成過去強制性交罪被告人數被低估之現象。
								雖然看見此罪被告人數逐年成長令人心憂，
								卻也代表著有越來越多的受害者站出來伸張自己的權益。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名統計',
						isEnd: false
					},
					{
						Container: {
							pos : {
								left: '10em',
								top : '3em',
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
						infoContext  : 
							<span>
								過去強制性交罪要成立最常見的問題便是「證據不足」
								或是無法證明被害人「不是出於自願的」在當時如此的社會氛圍下，
								許多案件最後不了了之。從民國90年之前大片灰色長期佔據圖表可見一般。
							</span>,
						infoAnimation: '',
						isTopicFirstSec: true,
						topicName: '各刑名百分比',
						isEnd: true
					}
				]
			},

		];

		this.calTopicFirstTale = function() {
			let tales = 
				this._txtTaleChain.sections.filter((section, i) => {
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
		this._txtTaleChain = null;

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

	// Decide which tales chain shoule be applied.
	decideTaleChain(datasetName, dataName, vizTypeName) {

		this._txtTaleChain = this.taleChains.find((chain) => {
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

	// Display a board to tell user that the page they want to go is not ready.
	pageHasNotFinished() {
		window.alert('即將推出，敬請期待。');
	},

	// Mark the browsing list item on the nav list. 
	_markCurrentListItem(containerSelector, elementSelector) {

			const container = document.querySelector(containerSelector);
			const elements  = document.querySelectorAll(elementSelector);
			const navListItems = document.querySelectorAll('.nav-option');
			
			// Calculate the height of each items which corresponding to the nav list item
			let itemTops = 
				((eles) => {

					let _tops = [];
					
					for ( let i = 0; i < elements.length; i++ ) 
						_tops.push(eles[i].offsetTop);
					
					return _tops
				})(elements);

			// Initial the first element with the current marker.
			navListItems[0]
				.firstChild.nextSibling.className = 'nav-option-hovermarker active';
			
			// Detect the scroll animation
			container.addEventListener('scroll', function() {

				let currentTop = this.scrollTop;
				let l = itemTops.length;
				let index = (() => {
					for ( let i = 0; i < l; i++ ) {
						// If the user approaching to the last element within 40 pixels,
						// switch to the last element.
						if (i === l-1 && itemTops[l-1] - currentTop < 40)
							return l-1
						else if ( itemTops[i-1] <= currentTop && itemTops[i] >= currentTop )
							return i-1
					}
				})();

				// Reset all the nav-options.
				for (let j = 0; j < navListItems.length-1; j++){ 
					navListItems[j]
						.firstChild.nextSibling.className = 'nav-option-hovermarker';
				}

				// Set the one user surfing on.
				navListItems[index]
					.firstChild.nextSibling.className = 'nav-option-hovermarker active';
			});
	},

	// Reset every hover marker to inactive.
	_resetAllListHoverMkr() {

		const navOptions = document.querySelectorAll('.nav-option');

		for ( let i = 0; i < navOptions.length - 2; i++ ){
			navOptions[i].firstChild.nextSibling.className = 'nav-option-hovermarker';
		}
	},

	componentDidMount() {

		if (this.props.listType === 'IntroNav') {
			this._markCurrentListItem('.introsec-group', '.introsec-wrapper');
		}
		
		// Reload the facebook button
		// However, the FB functions are not available until the initial page loading successfully.
		FB !== undefined ? FB.XFBML.parse() : null;
		
	},

	componentDidUpdate() {
		
		if (this.props.listType === 'IntroNav') {
			this._markCurrentListItem('.introsec-group', '.introsec-wrapper');
		}
		else {
			this._resetAllListHoverMkr();
		}
	},

	render: function() {

		let i = 0,
				_items = [];
		
		for ( let listItem of this.props.listItems ) {
			_items.push(
				<IndexNavListItem 
					index={i}
					key={i++} link={ listItem } 
					listLength={ this.props.listItems.length }/>)
		}

		return (
			<nav id="NAV" className="b12-col-md-12 b15-row-md-9">
				<ul className="b12-col-md-12 b15-row-md-15">
					 { _items }
				</ul>
			</nav>
		)

	}
});

var IndexNavListItem = React.createClass({

	getInitialState: function() {
		return {
			isHovered: false
		}
	},

	mouseEnterItem: function() {
		this.setState({ isHovered: true });
	},
	mouseLeaveItem: function() {
		this.setState({ isHovered: false });
	},

	render: function() {
		
		return (
			<li onMouseEnter={this.mouseEnterItem} 
					onMouseLeave={this.mouseLeaveItem} 
					className="nav-option b12-col-md-12 b12-row-md-2">
				<span className='ver-helper'></span>

				{ this.props.index < this.props.listLength - 2 ?
					<div className={ this.state.isHovered ? 
						'nav-option-hovermarker active' : 'nav-option-hovermarker'}></div> :
					null
				}
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
					<span className="ver-helper"></span>
					<RR.Link to={ this.props.path }>
						<img className="sect-part-img" src={this.props.themeImg} />
					</RR.Link>
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
				<RR.Link to={ this.props.path }>
					<img className="sect-part-btn-img" src={this.props.btnTxtSrc}/> 
				</RR.Link>
			</div>
		)
	}
});

/* ***** Intro components: The components of the intro page  ***** */
const IntroSections = React.createClass({
	render() {

		return (
			<div className='introsec-group b12-col-md-12'>
				{ this.props.introSects }
			</div>
		)
	}
});
const IntroSection = React.createClass({
	render() {
		return (
			<div className='introsec-wrapper b12-col-md-12'>
				<div className='introsec b12-col-md-12'>
					<div id={ this.props.sectionId } className='introsec-title b12-col-md-12'> 
						<h2>{ this.props.sectionTitle }</h2> 
					</div>
					<div className='introsec-divline'></div>
					<div className='introsec-context'>
						{ this.props.sectionContext }
					</div>
				</div>
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
			ringGraph : new ringGraphClass(),
			scatterPlot: new ScatterPlotClass()
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

	// Visualizing data with Scatter plot
	vizDataWithScatterPlot(props, dataSheet, update = false) {

		let sG = this.gpu.scatterPlot,
				t  = this.tip;

		// Find the topic.
		const _topic = this.DBfindTopic(props);
		
		sG.initializeAPad().setChartSize()
			.mappingData(
				dataSheet.url, _topic.axes.x, _topic.axes.y, _topic.axes.r, _topic.axes.c, _topic.axes.t)
			.then(function() {
				t.appendCircleMouseOver(_topic.tipFormat);
			});
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

	// working-spot
	// Update the Scatter Plot
	DBUpdateScatterPlot(props) {

		let sG = this.gpu.scatterPlot,
				t = this.tip;
		const _topic = this.DBfindTopic(props);

		return sG.update(_topic.intl.filterSets, _topic.axes.x, _topic.axes.y, _topic.axes.r, _topic.axes.c)
			.then(function() { 
				t.appendCircleMouseOver(_topic.tipFormat); 
			})

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

	DBTaleFactory() {

		// temporary if statement
		if (this.storyTeller._txtTaleChain) {

			const index = store.getState().get('currentTaleIndex');
			const taleEle = this.storyTeller._txtTaleChain.sections[index];
			const containerStyle = this.storyTeller._componentStyleFactory(
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
					  {/* The this.props here is the nextProps that prepared to render */}
					  {
					  	taleEle.isEnd ? 
					  		<EndTaleBtn
					  		 	topic={ this.props.topic }
					  			topicDepth={ this.props.topicDepth }
					  			taleIndex={ this.props.taleIndex }
					  			taleChain={ this.storyTeller._txtTaleChain }
					  			msg="End &nbsp;&nbsp;"
					  			indicator="&#8607;"
					  			style={ btnStyle }
					  		 /> :
					  		<NextTaleBtn 
					  			topic={ this.props.topic }
					  			topicDepth={ this.props.topicDepth }
					  			taleIndex={ this.props.taleIndex }
					  			taleChain={ this.storyTeller._txtTaleChain }
					  			msg="Next &nbsp;&nbsp;"
					  			indicator="&raquo;"
					  			style={ btnStyle }/> 
					  }
					</div>
					)
		}
	},

	DBTopicUpdate(nextProps) {
		
		// Produce the steps for topic explanation.
		let steps = this.DBTopicStepsProducer(nextProps);
			
			// Use the topic name to find the taleIndex it corresponeds to
			if (this.storyTeller._txtTaleChain) {
				
				let tName = nextProps.topic,
						taleIndex = this.storyTeller._txtTaleChain.sections.findIndex((t, i) => {
							return t.topicName === tName
						});
				store.dispatch(setTaleIndexAC(taleIndex));
			}
			// working-spot
			this.storyTeller.toTell(this.props.topicDepth, nextProps.topicDepth, steps.fwd, steps.bwd);
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
							return './police/p0.csv'
					})(),
				},
				{
					name: '暴力犯罪案件',
					url : (function() {
						if (isLocal)
							return '/police/暴力犯罪案件.csv'
						else 
							return './police/p2.csv'
					})(),
				},
				{
					name: '毒品案件',
					url : (function() {
						if (isLocal)
							return '/police/毒品案件.csv'
						else 
							return './police/p1.csv'
					})(),
				},

				// Prosecution Data
				{
					name: '殺人罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/殺人罪.csv'
						else 
							return './prosecution/p0.csv'
					})(),
				},
				{
					name: '竊盜罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/竊盜罪.csv'
						else 
							return './prosecution/p2.csv'
					})(),
				},
				{
					name: '擄人勒贖罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/擄人勒贖罪.csv'
						else 
							return './prosecution/p3.csv'
					})(),
				},
				{
					name: '恐嚇罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/恐嚇罪.csv'
						else 
							return './prosecution/p4.csv'
					})(),
				},
				{
					name: '槍砲彈藥刀械管制條例',
					url: (function() {
						if (isLocal)
							return '/prosecution/槍砲彈藥刀械管制條例.csv'
						else 
							return './prosecution/p5.csv'
					})(),
				},
				{
					name: '兒童及少年性交易防制條例',
					url: (function() {
						if (isLocal)
							return '/prosecution/兒童及少年性交易防制條例.csv'
						else 
							return './prosecution/p1.csv'
					})(),
				},
				{
					name: '公共危險罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/公共危險罪.csv'
						else 
							return './prosecution/p6.csv'
					})(),
				},
				{
					name: '貪污罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/貪污罪.csv'
						else 
							return './prosecution/p7.csv'
					})(),
				},
				{
					name: '瀆職罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/瀆職罪.csv'
						else 
							return './prosecution/p8.csv'
					})(),
				},
				{
					name: '賭博罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/賭博罪.csv'
						else 
							return './prosecution/p9.csv'
					})(),
				},
				{
					name: '詐欺罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/詐欺罪.csv'
						else 
							return './prosecution/p11.csv'
					})(),
				},
				{
					name: '重傷罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/重傷罪.csv'
						else 
							return './prosecution/p10.csv'
					})(),
				},
				{
					name: '強制性交罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/強制性交罪.csv'
						else 
							return './prosecution/p13.csv'
					})(),
				},
				{
					name: '偽造文書印文罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/偽造文書印文罪.csv'
						else 
							return './prosecution/p12.csv'
					})(),
				},
				{
					name: '毒品罪',
					url: (function() {
						if (isLocal)
							return '/prosecution/毒品罪.csv'
						else 
							return './prosecution/p14.csv'
					})(),
				},
				// Judical Data 
				{
					name: '地方法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/地方法院刑事案件收結情形.csv'
						else 
							return './judicial/c0.csv'
					})(),
				},
				{
					name: '高等法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/高等法院刑事案件收結情形.csv'
						else 
							return './judicial/c1.csv'
					})(),
				},
				{
					name: '最高法院刑事案件收結情形',
					url: (function() {
						if (isLocal)
							return '/judicial/最高法院刑事案件收結情形.csv'
						else 
							return './judicial/c2.csv'
					})(),
				},

				// Correction Data
				{
					name: '監獄人數概況',
					url: (function() {
						if (isLocal)
							return '/correction/監獄人數概況.csv'
						else
							return './correction/c0.csv'
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
											url : './correction/c1.csv'
										},
										{
											name: '新入監犯罪次數與種類',
											url : './correction/c3.csv'
										},
										{
											name: '新入監前教育程度',
											url : './correction/c2.csv'
										},
										{
											name: '歷年新入監年齡歷年統計',
											url : './correction/c4.csv'
										}
									];
									return urls
								}
					})()
				},
				{
					name: '103年戒護人力概況',
					url: './correction/103-security-ratio.json'
				}
			]
		}
	},

	componentWillMount() {
		
		this.storyTeller.decideVizStoryChain(
			this.props.dataset, this.props.data, this.props.chartType);

		// Select the tales chain
		this.storyTeller.decideTaleChain(
			this.props.dataset, this.props.data, this.props.chartType);
	},

	shouldComponentUpdate(nextProps) {

		if (nextProps.updateDataBoard) {
			
			// Select the chain 
			this.storyTeller.decideVizStoryChain(
				nextProps.dataset, nextProps.data, nextProps.chartType);
			
			// Select the tales chain
			this.storyTeller.decideTaleChain(
				nextProps.dataset, nextProps.data, nextProps.chartType);

			return true
		}

		return false
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
			
			// Switch to the next topic when reach the end of the above one.
			isTopicSwitchingByTaleUd = (() => {
				if (this.storyTeller._txtTaleChain) {
					return this.storyTeller._txtTaleChain.sections[nextProps.taleIndex].isTopicFirstSec;
				}
				return false
			})();

		if (shouldRenew) { 

			d3.select('#SKETCHPAD').remove();

			if (this.props.chartType === '圓環比例圖' && nextProps.chartType !== '圓環比例圖') 
				this.gpu.ringGraph.removeBoards();

			if (nextProps.chartType === '直方圖')
				this.vizDataWithBarChart(nextProps, dataSheet)
			else if (nextProps.chartType === '趨勢圖')
				this.vizDataWithLineChart(nextProps, dataSheet)
			else if (nextProps.chartType === '圓環比例圖')
				this.vizDataWithRingChart(nextProps, dataSheet)
			// working-spot
			else if (nextProps.chartType === '散佈圖')
				this.vizDataWithScatterPlot(nextProps, dataSheet);

		} else if (shouldUpdate) {

			// Update for chart type changing
			if (nextProps.chartType === '直方圖') 
				this.vizDataWithBarChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '趨勢圖') 
				this.vizDataWithLineChart(nextProps, dataSheet, true)
			else if (nextProps.chartType === '圓環比例圖')
				this.vizDataWithRingChart(nextProps, dataSheet, true)

		} else if (isTopicSwitching) { // Update when topic changing.
			
			this.DBTopicUpdate(nextProps);
			
		} else if (isTopicSwitchingByTaleUd) { 

			let steps = this.DBTopicStepsProducer(nextProps);

			// Find out the relationship between tale index and topic depth.
			let incrementedTopicDepth = this.props.topicDepth + 1,
					topicFirstTales = this.storyTeller.calTopicFirstTale(),
					tale = topicFirstTales.find((t, i) => {
						return i === incrementedTopicDepth
					});

			this.storyTeller.toTell(this.props.topicDepth, this.props.topicDepth+1, steps.fwd, steps.bwd);
		}
	},

	render() {

		// Create element tale for info displaying.
		let tale = this.DBTaleFactory();
		
		return (
			<div id='DATABOARD_WRAPPER' className='b20-col-md-20'>
				<div id='DATABOARD-vizLayer'></div>
				{
						/* Temp if statement */
						this.storyTeller._txtTaleChain ? 
							<TagentalIndicators 
								currentIndex = { store.getState().get('currentTaleIndex') }
								indicators={ this.storyTeller._txtTaleChain.sections } /> : null
					}
				{ this.storyTeller._txtTaleChain ? tale : null }
			</div>
		)
	}
});

const TaleBlock = React.createClass({

	componentDidMount() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	shouldComponentUpdate(nextProps) {
		return true
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

// Button for controlling the tales like going to the next or back to the top.
const TaleBtn = React.createClass({

	componentDidMount() {
		$v(ReactDOM.findDOMNode(this), { opacity: 1 }, { duration: 500 });
	},

	shouldComponentUpdate(nextProps) {
		return true
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
				<span>{ this.props.msg }</span>
				<span className='more-indicator'>{ this.props.indicator }</span>
			</div>)
	}
});

const TagentalIndicators = React.createClass({

	componentDidMount() {
		let indicatorsLength = this.props.indicators.length * 25,
				indicatorsTop = (window.innerHeight - indicatorsLength) / 2;
		let indicatorStyle = { top: indicatorsTop  + 'px' };

		$v(ReactDOM.findDOMNode(this), indicatorStyle, { duration: 1000 });
	},

	componentDidUpdate() {
		let indicatorsLength = this.props.indicators.length * 25,
				indicatorsTop = (window.innerHeight - indicatorsLength) / 2;
		let indicatorStyle = { top: indicatorsTop  + 'px' };

		$v(ReactDOM.findDOMNode(this), indicatorStyle, { duration: 1000 });
	},

	render() {

		// Tangetal Indicators should be dynamical position.
		let keyIndex = 0,
				indicators = [];

		for ( let ind of this.props.indicators ) {
			indicators.push(
				<TaleIndicator
					currentIndex = { this.props.currentIndex }
					indIndex = { keyIndex }
					key={ keyIndex++ }
					context={ ind }
					isSmall={ ind.isTopicFirstSec ? false : true }
					/>);
		}

		const initStlye = { top: '100%' };

		return (
			<div className='indicators' style={ initStlye } >
				{ indicators }
			</div>
			)
	}
});

const TagentalIndicator = React.createClass({

	render() {
		return (
			<div className='indicator-block' onClick={ this.props.selectTale } >
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
			<ul 
				onMouseLeave={ this.props.collapseMenu }
				className={
					this.props.isDisplayed ? 
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
				<RR.Link to='/'>
					<div id="LOGO" className="b12-col-md-12 b12-row-md-12"></div>
				</RR.Link>
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

// AppNavList Setting
function setAppNavListAC(listType, components) {
	return {
		type: 'SET_APP_NAV_IDX',
		navListType: listType,
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

function selectIntroAC() {
	return {
		type: 'SELECT_INTRO'
	}
}

function expandDropdownAC(dropdownIndex) {
	return {
		type: 'EXPAND_DROPDOWN',
		dropdownIndex: dropdownIndex
	}
}

function dropdownMenuCollapseAC(dropdownIndex) {
	return {
		type: 'COLLAPSE_DROPDOWN',
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

/* Action creator for tales */
function rollingTalesAC(topic, topicDepth, taleChain, taleIndex) {
	return {
		type: 'INCRE_TALE_IND',
		topic: topic,
		topicDepth: topicDepth,
		taleIndex: taleIndex,
		taleChain: taleChain
	}
}

function back2FirstTaleAC(taleChain) {
	return {
		type: 'BACK_TO_FIRST_TALE',
		taleChain: taleChain
	}
}

function setTaleIndexAC(index) {
	return {
		type: 'SET_TALE_INDEX',
		taleIndex: index
	}
}

function selectTaleAC(index, context) {
	return {
		type: 'SELECT_TALE',
		taleIndex: index,
		taleContext: context
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

		case 'SET_APP_NAV_IDX':
			return setAppNavList(state, action.navListType, action.components)

		case 'SELECT_INTRO':
			return selectIntro(state)

		case 'SELECT_THEME':
			return selectAppTheme(state, action.themeName)

		case 'EXPAND_DROPDOWN':
			return setDropdownMenuStates(state, action.dropdownIndex)

		case 'COLLAPSE_DROPDOWN':
			return setDropdownMenuCollapse(state, action.dropdownIndex)

		// Set the tale index
		case 'SET_TALE_INDEX':
			return setTaleIndex(state, action.taleIndex)

		case 'INCRE_TALE_IND':
			 return rollingTales(state, action.topic, action.topicDepth, action.taleChain, action.taleIndex)

		case 'BACK_TO_FIRST_TALE':
			return back2FirstTale(state, action.taleChain)

		case 'SELECT_TALE':
			return selectTale(state, action.taleIndex, action.taleContext)

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

function setAppNavList(state, listType, components) {
	const navListState = 
		Map().set('navList', components).set('navListType', listType);
	return state.merge(navListState)
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

function selectIntro(state) {

	let mainComponents = [
		{
			sectionId: 'VjtwTitle',
			sectionTitle: '創辦故事',
			sectionContext: 
				<div>
					<p className='introsec-context-p' >	我們正處在一個澎湃的資訊與社論時代，每一個人都有權利發表自己針對公眾議題的看法。尤其是發出不平之音的社論領袖們，在社群網路不斷轉載與分享之下，成為社會一股具有民意基礎且不可忽視的力量，進而主宰社會輿論的方向。</p>
					<p className='introsec-context-p' >	洪仲丘命案、頂新集團導致的食安風暴、高頻率地隨機殺人與攻擊事件、執行死刑與廢除死刑之爭。許許多多司法議題成為輿論的焦點。社群的領袖、媒體的民嘴們也藉此紛紛重砲轟擊司法體系的愚拙與封閉，更出現以社群民意為依歸的雅典式民主審判機制或是臉書法官對各樣社會案件的網路公審。</p>
					<p className='introsec-context-p' >	社群的輿論常常成為一面倒的態勢，當司法機關做出與此態勢相反的判決或是處分時，司法體系就成了眾矢之地，遭到口水無情的噴灑與淹沒。</p>
					<p className='introsec-context-p' >	有沒有一個客觀與理性的標準？對我們來說，沒有任何意識形態與情感的資料數據是唯一能夠把慷慨激昂的人們帶回理性、客觀的唯一方式。</p>
					<p className='introsec-context-p' >	政府克盡職守地將統計資料按月按年向社會大眾公布。然而生硬難懂的表格、難解其意的數字，設下了一道道大眾與政府溝通的藩籬。</p>
					<p className='introsec-context-p' >	對此由感而發的兩位替代役役男，帶著對司法、社會議題的熱血，為著促使司法體系更透明與公開，著手進行本站的開發。將生硬難懂的統計數據，轉為各樣有互動式的圖形，輔以文字地分析與司法事件的統整，以Web為媒介，讓大眾能夠自由且免費的認識台灣的司法。</p>
					<p className='introsec-context-p' >	看見思法因蘊而生，盼望藉著彙整好的數據與文獻，使接觸過後的每一位使用者，都能平靜下心，好好“思考”司法的問題。</p>
				</div>
		},
		{
			sectionId: 'LogoTitle',
			sectionTitle: 'Logo',
			sectionContext: 
				<div>
					<p className='introsec-context-p'>Logo的設計並非出自於專業的設計師，而是常陶醉於美麗使用者介面的阿德不斷Try and Error的結果。最終的定版也是在朋友一句Logo看起來煞有其事而拍板定案。</p>
					<p className='introsec-context-p'>Logo顏色的設計以黑與白為基調，象徵司法針對各類刑事案件的黑白分明，沒有模糊地帶的一面。司法還無罪之人清白，定有罪人之刑則。</p>
					<p className='introsec-context-p'>用大寫拼出JUSTICE VISUALIZING強調了將司法資料視覺化為專案最核心的目標，讓晦澀難懂的冰冷搖身一變成為一目了然且豐富逗趣的數據圖形。</p>
					<p className='introsec-context-p'>裡面看似為光芒，其實是刻度的圓環，代表著司法嚴謹、針對案件，依照案情內容仔細的裁量與測度，最終給予犯罪者最為適切的懲處。</p>
					<p className='introsec-context-p'>在圓環裡有一個羅馬造型的建築物圖示，代表著從司法行政到司法審判的各級機關，不僅有羅馬看重法律、務實的精神，其高長的圓柱，更表示司法的尊高與莊嚴。</p>
					<p className='introsec-context-p'>最後裡面有著台灣形狀瞳孔的眼睛，象徵要給大眾一個更明亮的眼睛，以客觀理性的態度，檢視台灣司法遇到種種的困境與難題。</p>
				</div>
		},
		{
			sectionId: 'MemberTitle',
			sectionTitle: '成員介紹',
			sectionContext: 
				<div>
					<div className='member-sect-wrappper b12-col-md-12'>
						<div className='member-sect b12-col-md-12'>
							<span className='ver-helper'></span>
							<div className='member-sect-media b12-col-md-4'>
								<span className='ver-helper'></span>
								<img className='member-sect-media-photo' src='./src/yd-image1.jpg' />
								<span id='yd-title' className='member-sect-media-banner'>
									<div className='title-arrow right'></div>
									<h4 className='member-title'>共同創辦人 / 工匠長</h4>
								</span>
								<div className="member-social b12-col-md-12">
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/In-2C-28px-R.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/FB-f-Logo__blue_28.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/GitHub-Mark-28px.png" />
									</div>
								</div>
							</div>
							<div className='member-sect-intro b12-col-md-8'>
								<span className='ver-helper'></span>
								<div className='member-sect-intro-elementwrapper'>
									<h2 className='member-sect-intro-name'>
										<span>Y.D Lin</span>&nbsp;&nbsp;<span>林育德</span>
									</h2>
									<p className='member-sect-intro-context'>
										創造新價值是阿德開發服務最大的信念。熱愛編程的他，常常沈浸其中難以自拔，也常常在母校廣程式實作與應用。
										尤其對使用者介面有莫名的熱愛，冀望成為一名俱有視覺設計能力與前端工程實作的稀類。
										看似技術宅的阿德也喜歡攝影與背包旅行，將視野向全世界拓展。
										曾任Taipei.py的一日講者，也是PyCon APAC 2015的Program Officer，協助議程與公關的籌劃，也參與過不少微創的網路服務開發。
									</p>
									<p className='member-sect-intro-context'>
										阿德在<strong>看見思法</strong>主導著系統的建構開發與使用者介面的設計，並且帶了一小撮熱愛資訊的學弟妹們跳坑，
										他們常常睡眠不足，要熬夜收集資料、寫程式、設計UI，就是要積沙成塔，打造屬於人民的<strong>思法</strong>系統。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='member-sect-wrappper b12-col-md-12'>
						<div className='member-sect b12-col-md-12'>
							<span className='ver-helper'></span>
							<div className='member-sect-intro b12-col-md-8'>
								<span className='ver-helper'></span>
								<div className='member-sect-intro-elementwrapper'>
									<h2 className='member-sect-intro-name'>
										<span>Danny Lai</span>&nbsp;&nbsp;<span>賴亮成</span>
									</h2>
									<p className='member-sect-intro-context'>
										就讀大學之時，曾擔任學校校務、學務及總務會議學生代表以及招商會議	學生代表，代表學生和校方共同商議學校許多相關事務。
										更曾為政治大學台北模擬聯合國大會2014/	05教科文組織最佳代表。
										曾於紐約參與過社會企業創新競賽，對社會議題與公共政策有極大的熱情。
									</p>
									<p className='member-sect-intro-context'>
										長期參與校園學生的自治組織，對公眾議題有獨到見解的亮成，決定了看見思法許多法律議題的走向。
										因著好奇心的驅使下，鑽研法律頗有小成的亮成，用清晰的解釋，配合阿德所開發的程式，
										將資料與議題做了完美的結合。
									</p>
								</div>
							</div>
							<div className='member-sect-media b12-col-md-4'>
								<span className='ver-helper'></span>
								<img className='member-sect-media-photo' src='./src/danny-image1.jpg' />
								<span id='dl-title' className='member-sect-media-banner'>
									<div className='title-arrow left'></div>
									<h4 className='member-title'>共同創辦人 / 企劃長</h4>
								</span>
								<div className="member-social b12-col-md-12">
									<div className="member-social-iconwrapper b12-col-md-6">
										<img className="social-icon" src="./src/In-2C-28px-R.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-6">
										<img className="social-icon" src="./src/FB-f-Logo__blue_28.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='member-sect-wrappper b12-col-md-12'>
						<span className='ver-helper'></span>
						<div className='member-sect b12-col-md-12'>
							<span className='ver-helper'></span>
							<div className='member-sect-media b12-col-md-4'>
								<span className='ver-helper'></span>
								<img className='member-sect-media-photo' src='./src/cd-image3.jpg' />
								<span id='cd-title' className='member-sect-media-banner'>
									<div className='title-arrow right'></div>
									<h4 className='member-title'>核心成員 / 資料收集師</h4>
								</span>
								<div className="member-social b12-col-md-12">
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/In-2C-28px-R.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/FB-f-Logo__blue_28.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/GitHub-Mark-28px.png" />
									</div>
								</div>
							</div>
							<div className='member-sect-intro b12-col-md-8'>
								<span className='ver-helper'></span>
								<div className='member-sect-intro-elementwrapper'>
									<h2 className='member-sect-intro-name'>
										<span>C.D Lai</span>&nbsp;&nbsp;<span>賴承德</span>
									</h2>
									<p className='member-sect-intro-context'>
										精熟LEGO機器人的架構的承德，在一次營隊中，用NXT-G寫出一個驚動全隊上下的解密碼遊戲。
										承德更再接再厲，在WRO機器人競賽獲得優異的成績。
										自身就喜歡編程的承德，有感於日益嚴重的青少年犯罪問題，因此加入了看見司法，希望能發揮自己的所長回饋社會。
									</p>
									<p className='member-sect-intro-context'>
										承德協助團隊整理、收集大筆大筆關於警察與檢調的原生數據，將許多零散的資料彙整成方便程式操作的格式。
										政府所釋出的原生資料，大多皆為pdf的格式，且印刷的不清導致難以使用OCR軟體進行解析，
										承德於是乎就發揮苦幹實幹的精神，將資料一筆筆的鍵入系統的資料庫當中，奠定看見思法服務的基石。
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='member-sect-wrappper b12-col-md-12'>
						<span className='ver-helper'></span>
						<div className='member-sect b12-col-md-12'>
							<span className='ver-helper'></span>
							<div className='member-sect-intro b12-col-md-8'>
								<span className='ver-helper'></span>
								<div className='member-sect-intro-elementwrapper'>
									<h2 className='member-sect-intro-name'>
										<span>Laxative Shieh</span>&nbsp;&nbsp;<span>謝耀賢</span>
									</h2>
									<p className='member-sect-intro-context'>
										中學時期接觸了前端工程,從此就種下與前端技術的不解之緣。
										大學時代，求知若渴的耀賢,常常練習UVA,POJ等競賽題目來訓練自己的邏輯腦。
										進取積極的耀賢，更是用相關競賽來反覆驗證自己是否離程式設計大神更近了一步。
									</p>
									<p className='member-sect-intro-context'>
										耀賢是個百分之百的工程人，只要給他一張網頁設計的藍圖，他就能以百分之百的效率完成。
										看見思法中，非資料視覺化的頁面，皆出於耀賢之手，是團隊工匠長最得力的助手。
									</p>
								</div>
							</div>
							<div className='member-sect-media b12-col-md-4'>
								<img className='member-sect-media-photo' src='./src/laxative-image.jpg' />
								<span id='ll-title' className='member-sect-media-banner'>
									<div className='title-arrow left'></div>
									<h4 className='member-title'>核心成員 / 二號工匠</h4>
								</span>
								<div className="member-social b12-col-md-12">
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/In-2C-28px-R.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/FB-f-Logo__blue_28.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/GitHub-Mark-28px.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='member-sect-wrappper b12-col-md-12'>
						<div className='member-sect b12-col-md-12'>
							<span className='ver-helper'></span>
							<div className='member-sect-media b12-col-md-4'>
								<img className='member-sect-media-photo' src='./src/juliana-image1.jpg' />
								<span id='jj-title' className='member-sect-media-banner'>
									<div className='title-arrow right'></div>
									<h4 className='member-title'>核心成員 / 小設計師</h4>
								</span>
								<div className="member-social b12-col-md-12">
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/In-2C-28px-R.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/FB-f-Logo__blue_28.png" />
									</div>
									<div className="member-social-iconwrapper b12-col-md-4">
										<img className="social-icon" src="./src/GitHub-Mark-28px.png" />
									</div>
								</div>
							</div>
							<div className='member-sect-intro b12-col-md-8'>
								<span className='ver-helper'></span>
								<div className='member-sect-intro-elementwrapper'>
									<h2 className='member-sect-intro-name'>
										<span>Juliana Chang </span>&nbsp;&nbsp;<span>張雅貴</span>
									</h2>
									<p className='member-sect-intro-context'>
										擅長活動規劃的雅貴，精於設計流程以及活動內容，曾參與2016新竹城市浪人籌辦團。
										雅貴也喜歡資訊與設計，渴望擁有屬於自己美美的部落站。
										常參與資訊相關的志工活動，如擔任Facebook首次在台舉辦的Hack For A Cause活動志工、台灣第一屆AR/VR遊戲創作營志工等等。
										非理工背景的雅貴，為了累積自身實力以及經驗，更是積極地參與微軟Coding Angel工作坊、Azure Workshop、2016 SITCON年會等。
									</p>
									<p className='member-sect-intro-context'>
										看見思法給雅貴一個可以自由設計的地方。與阿德強調簡約、硬線條、樸素的設計風格著迥然不同，
										高彩、活潑是雅貴的風格，每次的設計都讓全團耳目一新。
										主體設計雖是阿德操刀，但是處處還是見得到雅式設計與林式設計的交融。
										不同風格的碰撞，在看見思法中發揮了截長補短之效。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
		},
		{
			sectionId: 'VisionTitle',
			sectionTitle: '展望未來',
			sectionContext: 
				<div>
					<p className='introsec-context-p'>
						一個屬於人民的司法資料庫。
					</p>
					<p className='introsec-context-p'>
						司法系統，對大眾來說，是一道高牆。高牆內的世界，外人難以參透。
					</p>
					<p className='introsec-context-p'>
						保守的司法系統，一直以來都是人民呼求改革的對象。
						人民對司法寄與厚望，無非是希望司法系統，
						是公正無私，不會被人所操作，更不會淪為統治者的濫權、鞏固權力的工具。
					</p>
					<p className='introsec-context-p'>
						<q className='introsec-context-p-quote'>知識就是力量。</q> -- Francis Bacon, 1st Viscount St Alban 
					</p>
					<p className='introsec-context-p'>
						藉著一步步地將資料視覺化，從警察機關、調查局、檢察署、廉政署、法院甚至矯正機關，
						生硬、拗口、難讀的資料，一筆筆地被來至各地的有志之士們所解開，為社會大眾所看見。
						深藏在龐大的司法資料中的秘密，將攤在司法的陽光下而無所遁形，成就一個透明、公開的司法系統，將
						也是人民最大的一個勝利。
					</p>
					<p className='introsec-context-p'>
						看見思法以打造全亞洲第一個，全備的司法資料視覺平台為平台。更是華人社會首屈一指的司法開源專案。
						期望專案的長大，一天一天，都能讓這社會更美好;一步一步，使台灣的司法能更加完善透明。
					</p>
					<p className='introsec-context-p'>
						在不久的將來，看見思法不僅囊括刑事案件、社會犯罪的司法視覺資料庫，
						與人名息息相關的民法、稅法法律資料，會將看見思法蛻變為一個更加完美的司法資料庫。
					</p>
				</div>	
		}
	];

	let mainState = 
		Map().set('Main', (() => {
			let _mainCs = [],
					i = 0;
			for ( let component of mainComponents ) {
				_mainCs.push(<IntroSection 
					key= {i++}
					sectionId={ component.sectionId }
					sectionTitle={ component.sectionTitle } 
					sectionContext={ component.sectionContext } />)
			}

			return <IntroSections introSects={_mainCs} />
		})());

	return state.merge(mainState);
}


function selectAppTheme(state, theme) {
	
	let navComponents  = [
			<Logo key='0'/>, <StatTitle key='1'/>, <StatFilter key='2'/>, <HomeLink key='3'/>],
		mainComponents = [<StatDataBoard key='0' />];

	const navState  = Map().set('Nav', navComponents);
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
							List(DataFilterStateTree.listDataset(theme)))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							List(DataFilterStateTree.listData(theme, 0)))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							List(DataFilterStateTree.listCharttype(theme, 0)))
								.set('isDisplayed', false),
						Map().set(
							'Options', 
							List(DataFilterStateTree.listTopic(theme, 0, 0, 0)))
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
							.set('Options', List(originMenuOptions))
					);
			} else {
				Menus = Menus.set(
					j, 
					Map()
						.set('isDisplayed', false)
							.set('Options', List(originMenuOptions))
					);
			}
		}
		return Menus
	});
	return state.delete('filterDropdownMenus').merge(Map().set('filterDropdownMenus', newState))
}

function setDropdownMenuCollapse(state, dropdownIndex) {

	let newState = state.get('filterDropdownMenus')
		.update((menus) => {

			const originalOptions = menus.get(dropdownIndex).get('Options');

			return menus.set(
				dropdownIndex, 
				Map()
					.set('isDisplayed', false)
					.set('Options', originalOptions))
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
	let newTaleIndex = null;

	let shoudDataBoardUpdate = setState('updateDataBoard', true);

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
						newState.taleIndex,
						newState.dropdownMenuStates,
						shoudDataBoardUpdate)
				}
			return state.merge(collapsedAllDropdownMenuStates, shoudDataBoardUpdate)
		} 

		// Selecting data
		else if (fieldsetIndex === 1) {

			if (currentState.get('currentData') !== optionName) {

				const newState = __dataSwitchRendering(state, theme, optionName);

				return state.merge(
						newState.data,
						newState.topic,
						newState.topicDepth,
						newState.taleIndex,
						newState.dropdownMenuStates,
						shoudDataBoardUpdate
					)
			}
			return state.merge(collapsedAllDropdownMenuStates, shoudDataBoardUpdate)
		}

		// Selecting the charttype which will affect the topics.
		else if (fieldsetIndex === 2) {
			
			if (currentState.get('currentChartType') !== optionName) {

				const newState = __chartTypeSwitchRendering(state, optionName, fieldsetIndex);

				return state.merge(
					newState.chartType,
					newState.topic,
					newState.taleIndex,
					newState.dropdownMenuStates,
					shoudDataBoardUpdate
					)
			}
			return state.merge(collapsedAllDropdownMenuStates, shoudDataBoardUpdate)
		} 

		// Selection the topic
		else if (fieldsetIndex === 3) {

			if (currentState.get('currentTopic') !== optionName) {

				newTopic = setState('currentTopic', optionName);
				newTopicDepth = setState('currentTopicDepth', topicDepth);

				// The tale index should be correspond to the topic.
				// We have to come up an idea to solve this.
				newTaleIndex = setState('currentTaleIndex', 0);

				return state.merge(
					newTopic, 
					newTopicDepth, 
					newTaleIndex,
					collapsedAllDropdownMenuStates, 
					shoudDataBoardUpdate)
			}
			return state.merge(collapsedAllDropdownMenuStates, shoudDataBoardUpdate);
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

		let newTaleIndex = setState('currentTaleIndex', 0);

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
			taleIndex: newTaleIndex,
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

		const newTaleIndex = setState('currentTaleIndex', 0);

		// Switch data will change the available topics
		const	newDropdownMenuStates = 
			setState(
				'filterDropdownMenus', 
				updateTopicDropdownOption(state, dataName, null));

		return {
			data: newData,
			topic: newTopic,
			topicDepth: newTopicDepth,
			taleIndex: newTaleIndex,
			dropdownMenuStates: newDropdownMenuStates
		}
	}

	function __chartTypeSwitchRendering(state, chartType, fieldsetIndex) {

		const newChartType = setState('currentChartType', optionName);

		const newTopicDepth = setState('currentTopicDepth', 0);

		const newDropdownMenuStates = setState(
					'filterDropdownMenus', 
					updateTopicDropdownOption(state, null, chartType));

		const newTaleIndex = setState('currentTaleIndex', 0);

		// Update current topic
		const newTopic = setState(
					'currentTopic', 
					newDropdownMenuStates
						.get('filterDropdownMenus')
							.get(fieldsetIndex+1)
								.get('Options').get(0));

		return {
			chartType: newChartType,
			topic: newTopic,
			taleIndex: newTaleIndex,
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
			List(DataFilterStateTree.listTopic(key, datasetIndex, dataIndex, chartIndex));

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

function rollingTales(state, topic, topicDepth, taleChain, taleIndex) {
	
	const newTaleIndex = setState('currentTaleIndex', taleIndex + 1);
	const updateDataBoard = setState('updateDataBoard', true);

	// Check up whether the next tale is the new topic's first tale.
	const nextTale = taleChain.sections[taleIndex+1];

	if (nextTale.isTopicFirstSec) {
		const newTopic = setState('currentTopic', nextTale.topicName);
		const newTopicDepth = setState('currentTopicDepth', state.get('currentTopicDepth') + 1);
		return state.merge(newTaleIndex, newTopic, newTopicDepth, updateDataBoard)
	}
	else return state.merge(newTaleIndex, updateDataBoard);
}

function selectTale(state, taleIndex, taleContext) {
	
	const newTaleIndex = setState('currentTaleIndex', taleIndex);
	const newTopic = 
		setState(
			'currentTopic', 
			taleContext.topicName ? taleContext.topicName : state.get('currentTopic'));
	
	// Find out the topic depth
	const topicList = state.get('filterDropdownMenus').get(3).get('Options').toArray();
	const topicDepth = topicList.findIndex((topic) => {
		return taleContext.topicName === topic
	});
	
	const newTopicDepth = 
		setState(
			'currentTopicDepth', 
			topicDepth > -1 ? topicDepth : state.get('currentTopicDepth'));
	const updateDataBoard = setState('updateDataBoard', true);

	return state.merge(newTaleIndex, newTopic, newTopicDepth, updateDataBoard)

}

function back2FirstTale(state, taleChain) {

	const newTaleIndex = setState('currentTaleIndex', 0);
	const newTopic = setState('currentTopic', taleChain.sections[0].topicName);
	const newTopicDepth = setState('currentTopicDepth', 0);
	const updateDataBoard = setState('updateDataBoard', true);

	return state.merge(newTaleIndex, newTopic, newTopicDepth, updateDataBoard);
}

function setTaleIndex(state, taleIndex) {
	const newTaleIndex = setState('currentTaleIndex', taleIndex);
	const updateDataBoard = setState('updateDataBoard', false);
	return state.merge(newTaleIndex, updateDataBoard)
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

/* Connect the redux's app state to IndexNavList Component. */
const mapStateToAppNavList = (state) => {
	return {
		listType: state.get('navListType'),
		listItems: state.get('navList')
	}
}
const AppNavList = RRd.connect(
	mapStateToAppNavList,
	null
	)(IndexNavList);


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
const mapDispatchToDropdownMenu = (dispatch, props) => {
	return {
		collapseMenu: (e) => {
			dispatch(dropdownMenuCollapseAC(props.menuIndex));
		}
	}
}

const StatFilterDropdownMenu = RRd.connect(
	mapStateToDropdownMenuProps,
	mapDispatchToDropdownMenu
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
			else {
				dispatch(selectDropdownOptionAC(key, props.name, props.menuIndex, props.optionIdx, 0));
			}
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
		updateDataBoard: state.get('updateDataBoard')
	}
}

const StatDataBoard = RRd.connect(
	mapStateToDataBoardProps,
	null
	)(DataBoard);

/* Connect more tale button */
const mapDispatchToNextBtn = (dispatch, props) => {
	return {
		nextTale: (e) => {
			dispatch(rollingTalesAC(props.topic, props.topicDepth, props.taleChain, props.taleIndex));
		}
	}
}

const NextTaleBtn = RRd.connect(
	null,
	mapDispatchToNextBtn
	)(TaleBtn);

const mapDispatchToEndBtn = (dispatch, props) => {
	return {
		nextTale: (e) => {
			// Back to start tale
			dispatch(back2FirstTaleAC(props.taleChain));
		}
	}
}

const EndTaleBtn = RRd.connect(
	null,
	mapDispatchToEndBtn
	)(TaleBtn);

/* Connect Indicator */
const mapDispatchToIndicators = (dispatch, props) => {

	return {
		selectTale: (e) => {
			dispatch(selectTaleAC(props.indIndex, props.context));
		}
	}	

};

const TaleIndicator = RRd.connect(
	null,
	mapDispatchToIndicators
	)(TagentalIndicator);

/* ***** Store: For handling the states of the App.***** */
let store = Re.createStore(AppReducer);

ReactDOM.render(
	<RRd.Provider store={store}>
		<RR.Router history={RR.hashHistory} >
			<RR.Route component={App} >
				<RR.Route 
					path='/' 
					getComponents={(nextState, cb) => {

						// Set the nav list for initializing index page.
						store.dispatch(
							setAppNavListAC(
								'IndexNav',
								[
									<RR.Link to='/aboutus' >
										<img src="./src/aboutus.png" />
									</RR.Link>,
									<img src="./src/see.png" onClick={ function(){ window.alert('建置中，敬請期待。'); } }/>,
									<img src="./src/issue.png" onClick={ function(){ window.alert('建置中，敬請期待。'); } }/>,
									<img src="./src/work.png" onClick={ function(){ window.alert('建置中，敬請期待。'); } }/>,
									<div className='social-group'>
										<iframe id='githubStar' className='social-btn'
											src="https://ghbtns.com/github-btn.html?user=yudazilian&repo=VisualJusticeTW&type=star&count=true" 
											frameborder="0" scrolling="0" width="170px" height="20px">
										</iframe>
									</div>,
									<div className="fb-like social-group" 
										data-href="http://vizjust.tw" data-width="20px" 
										data-layout="button_count" data-action="like" 
										data-size="small" data-show-faces="true" data-share="true">
									</div>
								]));

						/* Set up the initial index page for nav side. */
						store.dispatch(
							setAppNavAC([
								<Logo key='0'/>,
								<AppNavList key='1' />,
								<Sign key='2'/>,
								<HomeLink key='3'/>
						]));

						
						// FB.XFBML.parse();

						store.dispatch(setThemesAC());

						cb(null, { nav: AppNav, main: AppMain });
				}} />
				<RR.Route 
					path='/aboutus'
					getComponents={(nextState, cb) => {

						// Set the nav list for intro
						store.dispatch(
							setAppNavListAC(
								'IntroNav',
								[
									<a href='#VjtwTitle'><img src='./src/foundstory-125px.png' /></a>,
									<a href='#LogoTitle'><img src='./src/logointro-125px.png' /></a>,
									<a href='#MemberTitle'><img src='./src/memberintro-125px.png' /></a>,
									<a href='#VisionTitle'><img src='./src/vision-125px.png' /></a>,
									<div className='social-group'>
										<iframe id='githubStar' className='social-btn'
											src="https://ghbtns.com/github-btn.html?user=yudazilian&repo=VisualJusticeTW&type=star&count=true" 
											frameborder="0" scrolling="0" width="170px" height="20px">
										</iframe>
									</div>,
									<div className="fb-like social-group" 
										data-href="http://vizjust.tw" data-width="20px" 
										data-layout="button_count" data-action="like" 
										data-size="small" data-show-faces="true" data-share="true">
									</div>
							]));

						store.dispatch(selectIntroAC());

						// Set up the intro theme
						store.dispatch(
							setAppNavAC([
								<Logo key='0' />,
								<AppNavList key='1'/>,
								<Sign key='2'/>,
								<HomeLink key='3' />
							]));

						cb(null, { nav: AppNav, main: AppMain });


					}}
					/>
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

