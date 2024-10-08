const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "报表",
                            "删除"
                        ],
                        "menu":"老人管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    },
					{
					    "buttons":[
					        "查看",
					        "新增",
					        "修改",
					        "删除"
					    ],
					    "menu":"家属管理",
					    "menuJump":"列表",
					    "tableName":"jiashu"
					}
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "状态",
                        ],
                        "menu":"家属意见管理",
                        "menuJump":"列表",
                        "tableName":"jiashuyijian"
                    }
                ],
                "menu":"家属意见管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "报表",
			                "删除"
			            ],
			            "menu":"寝室信息管理",
			            "menuJump":"列表",
			            "tableName":"qinshi"
			        },
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"寝室分配信息管理",
			            "menuJump":"列表",
			            "tableName":"qinshifenpei"
			        }
			    ],
			    "menu":"寝室信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"老人事故信息管理",
			            "menuJump":"列表",
			            "tableName":"shigu"
			        }
			    ],
			    "menu":"安全信息管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "报表",
                            "修改",
                            "删除"
                        ],
                        "menu":"食物管理",
                        "menuJump":"列表",
                        "tableName":"meishi"
                    },
					{
					    "buttons":[
					        "查看",
					        "新增",
					        "修改",
					        "报表",
					        "删除"
					    ],
					    "menu":"饮食喜好管理",
					    "menuJump":"列表",
					    "tableName":"yinshixihao"
					}
                ],
                "menu":"饮食信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"体检管理",
                        "menuJump":"列表",
                        "tableName":"tijian"
                    }
                ],
                "menu":"体检管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"药物管理",
			            "menuJump":"列表",
			            "tableName":"yaowu"
			        }
			    ],
			    "menu":"药物管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "删除"
			            ],
			            "menu":"需求袋管理",
			            "menuJump":"列表",
			            "tableName":"xuqiudai"
			        }
			    ],
			    "menu":"需求袋管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"老人外出信息管理",
                        "menuJump":"列表",
                        "tableName":"waichu"
                    },
					{
					    "buttons":[
					        "查看",
					        "新增",
					        "修改",
					        "删除"
					    ],
					    "menu":"访客信息管理",
					    "menuJump":"列表",
					    "tableName":"fangke"
					}
                ],
                "menu":"出入信息管理"
            }
			
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
			,{
			    "child":[
			
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"健康报警管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryBaojing"
			        }
			
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"来访目的管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryFangke"
			        }
			
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"健康状态管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiankang"
			        }
			
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"家属身份管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiashu"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryJiashuyijian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"食物类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryMeishi"
			        }
			
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"公告类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"寝室类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryQinshi"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"事故类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryShigu"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"体检项目管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryTijian"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"外出目的管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryWaichu"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"严重程度管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYanzheng"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"药物类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYaowu"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"食物类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryYinshixihao"
			        }
			    ],
			    "menu":"基础数据管理"
			}
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"老人管理",
	                    "menuJump":"列表",
	                    "tableName":"yonghu"
	                }
	            ],
	            "menu":"老人管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
					        "新增",
					        "修改",
					        "删除"
	                    ],
	                    "menu":"家属意见管理",
	                    "menuJump":"列表",
	                    "tableName":"jiashuyijian"
	                }
	            ],
	            "menu":"家属意见管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"寝室信息管理",
			            "menuJump":"列表",
			            "tableName":"qinshifenpei"
			        }
			    ],
			    "menu":"寝室信息管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"老人事故信息管理",
			            "menuJump":"列表",
			            "tableName":"shigu"
			        }
			    ],
			    "menu":"安全信息管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"食物管理",
	                    "menuJump":"列表",
	                    "tableName":"meishi"
	                },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"饮食喜好管理",
					    "menuJump":"列表",
					    "tableName":"yinshixihao"
					}
	            ],
	            "menu":"饮食信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"体检管理",
	                    "menuJump":"列表",
	                    "tableName":"tijian"
	                }
	            ],
	            "menu":"体检管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"老人外出信息管理",
	                    "menuJump":"列表",
	                    "tableName":"waichu"
	                },
					{
					    "buttons":[
					        "查看"
					    ],
					    "menu":"访客信息管理",
					    "menuJump":"列表",
					    "tableName":"fangke"
					}
	            ],
	            "menu":"出入信息管理"
	        }
			
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"公告信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"公告信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"家属",
	    "tableName":"jiashu"
	},
	{
		"backMenu":[
			{
				"child":[
					{
						"buttons":[
							"查看"
						],
						"menu":"寝室信息管理",
						"menuJump":"列表",
						"tableName":"qinshifenpei"
					}
				],
				"menu":"寝室信息管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看"
						],
						"menu":"老人事故信息管理",
						"menuJump":"列表",
						"tableName":"shigu"
					}
				],
				"menu":"安全信息管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看"
						],
						"menu":"食物管理",
						"menuJump":"列表",
						"tableName":"meishi"
					},
					{
						"buttons":[
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu":"饮食喜好管理",
						"menuJump":"列表",
						"tableName":"yinshixihao"
					}
				],
				"menu":"饮食信息管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看"
						],
						"menu":"体检管理",
						"menuJump":"列表",
						"tableName":"tijian"
					}
				],
				"menu":"体检管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看",
							"添加"
						],
						"menu":"药物管理",
						"menuJump":"列表",
						"tableName":"yaowu"
					}
				],
				"menu":"药物管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看",
							"状态",
							"删除"
						],
						"menu":"需求袋管理",
						"menuJump":"列表",
						"tableName":"xuqiudai"
					}
				],
				"menu":"需求袋管理"
			}
			,{
				"child":[
					{
						"buttons":[
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu":"老人外出信息管理",
						"menuJump":"列表",
						"tableName":"waichu"
					},
					{
						"buttons":[
							"查看",
							"新增",
							"修改",
							"删除"
						],
						"menu":"访客信息管理",
						"menuJump":"列表",
						"tableName":"fangke"
					}
				],
				"menu":"出入信息管理"
			}
			
			,{
				"child":[
					{
						"buttons":[
							"查看"
						],
						"menu":"公告信息管理",
						"menuJump":"列表",
						"tableName":"news"
					}
				],
				"menu":"公告信息管理"
			}
		],
		"frontMenu":[],
		"hasBackLogin":"是",
		"hasBackRegister":"否",
		"hasFrontLogin":"否",
		"hasFrontRegister":"否",
		"roleName":"老人",
		"tableName":"yonghu"
	}
]
    }
}
export default menu;
