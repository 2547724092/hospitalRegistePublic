package com.entity.view;

import org.apache.tools.ant.util.DateUtils;
import com.annotation.ColumnInfo;
import com.entity.JiashuyijianEntity;
import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;
import com.utils.DateUtil;

/**
* 家属意见
* 后端返回视图实体辅助类
* （通常后端关联的表或者自定义的字段需要返回使用）
*/
@TableName("jiashuyijian")
public class JiashuyijianView extends JiashuyijianEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	//当前表
	/**
	* 类型 -的值
	*/
	@ColumnInfo(comment="类型 -的字典表值",type="varchar(200)")
	private String jiashuyijianValue;

	//级联表 家属
		/**
		* 家属名称
		*/

		@ColumnInfo(comment="家属名称",type="varchar(200)")
		private String jiashuName;
		/**
		* 家属照片
		*/

		@ColumnInfo(comment="家属照片",type="varchar(200)")
		private String jiashuPhoto;
		/**
		* 联系电话
		*/

		@ColumnInfo(comment="联系电话",type="varchar(200)")
		private String jiashuPhone;
		/**
		* 邮箱
		*/

		@ColumnInfo(comment="邮箱",type="varchar(200)")
		private String jiashuEmail;
		/**
		* 身份
		*/
		@ColumnInfo(comment="身份",type="int(11)")
		private Integer jiashuTypes;
			/**
			* 身份的值
			*/
			@ColumnInfo(comment="身份的字典表值",type="varchar(200)")
			private String jiashuValue;
		/**
		* 逻辑删除
		*/

		@ColumnInfo(comment="逻辑删除",type="int(11)")
		private Integer jiashuDelete;



	public JiashuyijianView() {

	}

	public JiashuyijianView(JiashuyijianEntity jiashuyijianEntity) {
		try {
			BeanUtils.copyProperties(this, jiashuyijianEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	//当前表的
	/**
	* 获取： 类型 -的值
	*/
	public String getJiashuyijianValue() {
		return jiashuyijianValue;
	}
	/**
	* 设置： 类型 -的值
	*/
	public void setJiashuyijianValue(String jiashuyijianValue) {
		this.jiashuyijianValue = jiashuyijianValue;
	}


	//级联表的get和set 家属

		/**
		* 获取： 家属名称
		*/
		public String getJiashuName() {
			return jiashuName;
		}
		/**
		* 设置： 家属名称
		*/
		public void setJiashuName(String jiashuName) {
			this.jiashuName = jiashuName;
		}

		/**
		* 获取： 家属照片
		*/
		public String getJiashuPhoto() {
			return jiashuPhoto;
		}
		/**
		* 设置： 家属照片
		*/
		public void setJiashuPhoto(String jiashuPhoto) {
			this.jiashuPhoto = jiashuPhoto;
		}

		/**
		* 获取： 联系电话
		*/
		public String getJiashuPhone() {
			return jiashuPhone;
		}
		/**
		* 设置： 联系电话
		*/
		public void setJiashuPhone(String jiashuPhone) {
			this.jiashuPhone = jiashuPhone;
		}

		/**
		* 获取： 邮箱
		*/
		public String getJiashuEmail() {
			return jiashuEmail;
		}
		/**
		* 设置： 邮箱
		*/
		public void setJiashuEmail(String jiashuEmail) {
			this.jiashuEmail = jiashuEmail;
		}
		/**
		* 获取： 身份
		*/
		public Integer getJiashuTypes() {
			return jiashuTypes;
		}
		/**
		* 设置： 身份
		*/
		public void setJiashuTypes(Integer jiashuTypes) {
			this.jiashuTypes = jiashuTypes;
		}


			/**
			* 获取： 身份的值
			*/
			public String getJiashuValue() {
				return jiashuValue;
			}
			/**
			* 设置： 身份的值
			*/
			public void setJiashuValue(String jiashuValue) {
				this.jiashuValue = jiashuValue;
			}

		/**
		* 获取： 逻辑删除
		*/
		public Integer getJiashuDelete() {
			return jiashuDelete;
		}
		/**
		* 设置： 逻辑删除
		*/
		public void setJiashuDelete(Integer jiashuDelete) {
			this.jiashuDelete = jiashuDelete;
		}


	@Override
	public String toString() {
		return "JiashuyijianView{" +
			", jiashuyijianValue=" + jiashuyijianValue +
			", jiashuName=" + jiashuName +
			", jiashuPhoto=" + jiashuPhoto +
			", jiashuPhone=" + jiashuPhone +
			", jiashuEmail=" + jiashuEmail +
			", jiashuDelete=" + jiashuDelete +
			"} " + super.toString();
	}
}
