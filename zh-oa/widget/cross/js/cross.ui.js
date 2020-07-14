/* ========================================================================
 * menu-collapse
 * ======================================================================== */
+function ($) {
	$.fn.menucollapse = function (){
		var $this = $(this),
			$a = $this.find('li>a');
		if($this.is('.menu-collapse-infeed')){
			$this.on('mouseenter',"li",function(){
				$(this).addClass('curr').children('ul.sub-menu').show();
			}).on('mouseleave',"li",function(){
				$(this).removeClass('curr');
				if($(this).data('click')){
				 	$(this).addClass('curr');
				}
				$(this).children('ul.sub-menu').hide();
			}).on('click','a',function(){
				$(this).parents('.menu-li').data('click',true).siblings().removeClass('curr').data('click',false);
			});
		}else{
			$this.on('click',"li>a",function(){
				if($(this).is('.curr')){
					return false;
				}
				$this.find('a').removeClass('curr');
				$(this).addClass('curr');
				if($(this).parent().parent().parent().children('a').length>0){
					$(this).parent().parent().parent().children('a').addClass('curr');
				}

				$(this).parent('li').parent('ul').find('li').each(function(index, element) {
					$(this).children('a').find('span.arrow').html('<i class="iconfont">&#xe60f;</i>');
					$(this).find('ul.sub-menu').slideUp();
				});
				var $arrow=$(this).find('span.arrow'),
					$ul=$(this).parent().children('ul.sub-menu');
				if($ul.length>0){
					if($ul.css('display')=="none"){
						$ul.slideDown();
						$arrow.html('<i class="iconfont">&#xe60e;</i>');
					}else{
						$ul.slideUp();
						$arrow.html('<i class="iconfont">&#xe60f;</i>');
					}
				}
			});	
		}
        return this;
	};
	$('div[data-nav="menu"]').menucollapse();
}(jQuery);
/* ========================================================================
 * tabs
 * ======================================================================== */
+(function($){
    $.fn.tabs = function(options){
		if(this.length == 0) return this;
		
		if(this.length > 1){
			this.each(function(){$(this).tabs(options)});
			return this;
		}
		if($(this).data('binds')=='yes') return false;
		$(this).data('binds','yes');
		var defaults={
			"hdChildren":'a',
			"bdChildren":'div.tabs-bd-box',
			"events":'click'
		};
		var opts=$.extend(defaults,options || {});
		var $this=$(this),
            el=this,
			$hd=$this.children('div.tabs-hd').children(opts.hdChildren),
			$bd=$this.children('div.tabs-bd').children(opts.bdChildren);
		if($this.data('toggle-tabs')){
			$hd.on(opts.events,function(){
				var $el=$(this),
					index=$el.index();
				$el.addClass('curr').siblings().removeClass('curr');
				$bd.eq(0).find('iframe').attr('src',$el.data('src'));
				if(opts.callback){
					opts.callback(index,$this);
				}
			});
		}else{
			$hd.on(opts.events,function(){
				var $el=$(this),
					index=$el.index();
				$el.addClass('curr').siblings().removeClass('curr');
				$bd.eq(index).addClass('curr').siblings().removeClass('curr');
				if(opts.callback){
					opts.callback(index,$this);
				}
			});
		}


        el.goTo = function (index,toOpts){
            $hd.eq(index).addClass('curr').siblings().removeClass('curr');
            $bd.eq(index).addClass('curr').siblings().removeClass('curr');

        };
        return this;
	};
	$(document).on('mouseenter', '[data-toggle="tabs"]', function (e) {
		$(this).tabs();
	});
})(jQuery);
/* ========================================================================
 * formSelect
 * ======================================================================== */
+function ($) {
	$.fn.formSelect = function (options,downBack,selectBack,initBack){
		var defaultsettings = {
			jsonData: null,
			initialValue: null,
			jsonDataId: null,
			jsonDataText: null,
			ajax:{
				url: null,
				resultKey: null,
				type: null,
				beforeSend: null,
				error: null,
				success: null,
				complete:null
			}
		};

		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){
				$(this).formSelect(options,downBack,selectBack);
			});
			return this;
		}

		var $this   = this,
			_data   = downBack,
			setKey  = {},
			setVal  = {},
			getData = {},
			opts    = $.extend({}, defaultsettings, options),
			tempStr = '';

		function setCurr(v){
			if($this.find('a[data-value="'+ v.key +'"]').length<=0){
				return false;
			}
			$this.children('.cus-sel-chosed').find('.cus-sel-chosed-txt').text(v.val).attr('data-value', v.key).end().find('input').val(v.key);
			$this.attr('value',v.key).find('.cus-sel-list').find('a').removeClass('hover');
			$this.find('.cus-sel-list').find('a[data-value="'+v.key+'"]').addClass('hover');
		}

		function isString(str) {
			return Object.prototype.toString.call(str) === "[object String]";
		}

		function isArrayFn(value){
			if(typeof Array.isArray === "function") {
				return Array.isArray(value);
			} else {
				return Object.prototype.toString.call(value) === "[object Array]";
			}
		}

		function render(data, jsonDataId, jsonDataText) {
			var i,
				dataLength,
				tempStr = '';

			if(isArrayFn(data)) {
				for(i=0, dataLength = data.length; i<dataLength; i++) {
					if(isArrayFn(data[i])) {
						tempStr += render(data[i]);
					} else {
						if(jsonDataId && jsonDataText) {
							if(data[i][jsonDataId]==='' || data[i][jsonDataId]<=0) {
								tempStr = '<li><a href="javascript:;" title="'+ data[i][jsonDataText] +'" data-value="'+ data[i][jsonDataId] +'">'+ data[i][jsonDataText] +'</a></li>' + tempStr;
							} else {
								tempStr += '<li><a href="javascript:;" title="'+ data[i][jsonDataText] +'" data-value="'+ data[i][jsonDataId] +'">'+ data[i][jsonDataText] +'</a></li>';
							}
						} else {
							for(var key in data[i]){
								if(key==='' || key<=0) {
									tempStr = '<li><a href="javascript:;" title="'+ data[i][key] +'" data-value="'+ key +'">'+ data[i][key] +'</a></li>' + tempStr;
								} else {
									tempStr += '<li><a href="javascript:;" title="'+ data[i][key] +'" data-value="'+ key +'">'+ data[i][key] +'</a></li>';
								}
							}
						}
					}
				}
			}
			return tempStr;
		}

		function setInitialValue(initialValue, jsonDataArr) {
			var tempKey,
				tempVal;
			if(initialValue){
				if(initialValue.key == undefined && initialValue.val == undefined) {
					for(var key in initialValue){
						tempKey = key,
							tempVal = initialValue[key];

						$this.find('.cus-sel-chosed-txt').text(tempVal).attr('data-value', tempKey);
						$this.find('.cus-sel-chosed').find('input').val(tempKey);
						$this.find('.cus-sel-list').find('a[data-value="'+tempKey+'"]').addClass('hover');
						$this.attr('value', tempVal);
					}
				} else if(initialValue.key != undefined && initialValue.val != undefined) {
					tempKey = initialValue.key,
						tempVal = initialValue.val;

					$this.find('.cus-sel-chosed-txt').text(tempVal).attr('data-value', tempKey);
					$this.find('.cus-sel-chosed').find('input').val(tempKey);
					$this.find('.cus-sel-list').find('a[data-value="'+tempKey+'"]').addClass('hover');
					$this.attr('value', tempVal);
				} else if(initialValue.key != undefined) {
					tempKey = initialValue.key;
					tempVal = $this.find('.cus-sel-list').find('a[data-value="'+tempKey+'"]').addClass('hover').text();

					$this.find('.cus-sel-chosed-txt').text(tempVal).attr('data-value', tempKey);
					$this.find('.cus-sel-chosed').find('input').val(tempKey);
					$this.attr('value', tempVal);
				} else if(initialValue.val != undefined) {
					tempVal = initialValue.val;
					tempKey = $this.find('.cus-sel-list').find('a[title="'+tempVal+'"]').addClass('hover').attr('data-value');

					$this.find('.cus-sel-chosed-txt').text(tempVal).attr('data-value', tempKey);
					$this.find('.cus-sel-chosed').find('input').val(tempKey);
					$this.attr('value', tempVal);
				}

				if(selectBack){
					selectBack($this, tempVal, tempKey);
				}
			}
		}

		if(isString(options)){
			switch(options){
				case 'setDatas':
					setCurr(_data);
					break;
				case 'setDataKey':
					setKey.key = _data;
					setKey.val = $.trim($this.find('.cus-sel-list').find('a[data-value="'+_data+'"]').text());
					setCurr(setKey);
					break;
				case 'setDataVal':
					setVal.val = _data;
					$this.find('.cus-sel-list').find('a').each(function(){
						if($.trim($(this).text())==_data){
							setVal.key = $(this).data('value');
						}
					});
					setCurr(setVal);
					break;
				case 'getDatas':
					getData.key = $this.children('.cus-sel-chosed').find('input').val();
					getData.val = $.trim($this.children('.cus-sel-chosed').find('.cus-sel-chosed-txt').text());
					return getData;
					break;
				case 'getDataKey':
					return $this.children('.cus-sel-chosed').find('input').val();
					break;
				case 'getDataVal':
					return $.trim($this.children('.cus-sel-chosed').find('.cus-sel-chosed-txt').text());
					break;
				case 'resetValue':
					$this.find('.cus-sel-chosed')
						.find('.cus-sel-chosed-txt').text('-请选择-').attr('data-value', '').end()
						.find('input').val('');
					$this.attr('value','').find('.cus-sel-list').find('a.hover').removeClass('hover');
					break;
				case 'clearValue':
					$this.find('.cus-sel-chosed')
						.find('.cus-sel-chosed-txt').text('-请选择-').attr('data-value', '').end()
						.find('input').val('');
					$this.attr('value','').find('.cus-sel-list').find('ul').html('');
					break;
			}

			return false;
		}

		if(opts.ajax.url) {
			$.ajax({
				url: opts.ajax.url,
				type: opts.ajax.type?opts.ajax.type:'get',
				beforeSend: function(XHR){
					if(opts.ajax.beforeSend) {
						opts.ajax.beforeSend.call($this, {'XHR': XHR});
					} else {
						return;
					}
				},
				error: function(XHR, status, error) {
					if(opts.ajax.error) {
						opts.ajax.error.call($this, {'XHR': XHR,'textStatus': status, 'errorThrown': error});
					} else {
						return;
					}
				},
				complete: function(XHR, status){
					if(opts.ajax.complete) {
						opts.ajax.complete.call($this, {'XHR': XHR,'textStatus': status});
					} else {
						return;
					}
				},
				success: function (data, status) {
					var response = data,
						ajaxResultKey = opts.ajax.resultKey,
						tempHtml;

					if(opts.ajax.success) {
						opts.ajax.success.call($this, {'response': data,'textStatus': status});
					} else {
						if(ajaxResultKey) {
							tempHtml = render(response[ajaxResultKey], opts.jsonDataId, opts.jsonDataText);
							$this.children('.cus-sel-list').children('ul').html(tempHtml);
							setInitialValue(opts.initialValue, response[ajaxResultKey]);
						} else {
							alert('使用ajax加载数据需配置resultKey（json数组对应的key）');
						}
					}
				}
			});
		}

		if(opts.jsonData) {
			tempStr = render(opts.jsonData, opts.jsonDataId, opts.jsonDataText);
			$this.children('.cus-sel-list').children('ul').html(tempStr);
			setInitialValue(opts.initialValue, opts.jsonData);
		}

		if($this.data('bind')) {
			$this.off('click.cusSel','.cus-sel-chosed').children('.cus-sel-list').off('click.cusSel','a');
		} else {
			$this.data('bind',true);
		}

		$this.on('click.cusSel','.cus-sel-chosed',function(){
			if($this.is('.disabled') || $this.is('.active')){
				return false;
			}
			$('.cus-sel').removeClass('active').css({zIndex:1});
			$('.cus-sel-list').hide();

			var _this = $(this);

			_this.parent('.cus-sel').addClass('active').css({zIndex:1000});
			var bodyScrollTop = document.documentElement.scrollTop + document.body.scrollTop,
				domTop = $this.offset().top,
				bodyHeight = $(window).height(),
				listHeight = _this.siblings('.cus-sel-list').outerHeight(true),
				chosedHeight = _this.outerHeight(true);
			if(-(domTop+chosedHeight-bodyScrollTop-bodyHeight)<listHeight){
				_this.siblings('.cus-sel-list').slideDown('fast').css({'top':-(listHeight)+'px'});
			}else{
				_this.siblings('.cus-sel-list').slideDown('fast').css({'top':chosedHeight+'px'});
			}
			if(downBack){
				downBack($this);
			}
		});
		$this.children('.cus-sel-list').on('click.cusSel', 'a', function () {
			var _this   = $(this),
				text    = _this.text(),
				value   = _this.attr('data-value');

			$this.attr('value',value).find('.cus-sel-list').find('a').removeClass('hover');
			_this.addClass('hover').closest('.cus-sel').removeClass('active').find('.cus-sel-chosed').find('input').val(value).end().find('.cus-sel-chosed-txt').text(text).attr('data-value', value);

			_this.closest('.cus-sel-list').slideUp('fast',function(){
				$(this).closest('.cus-sel').css({zIndex:1});
			});
			if(selectBack){
				selectBack($this,text,value);
			}
			return false;
		});

		if(initBack){
			setTimeout(function(){initBack();},300);
		}

		$this.optionsData = function(data,funback){
			if(data){
				tempStr = render(data,opts.jsonDataId, opts.jsonDataText);
				$this.attr('value','');
				$this.children('.cus-sel-list').children('ul').html(tempStr);
				$this.find('.cus-sel-chosed-txt').text('-请选择-').attr('data-value', '');
				$this.find('.cus-sel-chosed').find('input').val('');
			}
			if(funback){
				funback($this);
			}
		};
		return this;
	};


	$("html,body").click(function (e) {
		var target = e.target;
		if ($(target).parents(".cus-sel").length == 0) {
			$(".cus-sel").removeClass("active").css({zIndex:1});
			$(".cus-sel-list").hide();
		}
	});

	$(document).on('mouseenter', '[data-toggle="formSelect"]', function (e) {
		if($(this).data('mouseenter')) return false;
		$(this).data('mouseenter',true);
		$(this).formSelect();
	});

}(jQuery);
/* ========================================================================
 * comboFormSelect
 * ======================================================================== */
+function ($) {
    $.fn.comboFormSelect = function (options,downBack){
		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){$(this).comboFormSelect(options,downBack)});
			return this;
		}
		var _this = $(this),
			$list = _this.children('.cus-sel-list'),
			$input = _this.children('.cus-sel-chosed').children('input[type="text"]'),
			$txt = _this.find('.cus-sel-chosed-txt'),
			el = this,
			tempStr='';

		if(typeof(options)=='string') {
			var _data = downBack,
				_tempVal = _tempName = '';

			if(_this.data('combo')=='checkbox' || _this.data('combo')=='radio'){
				switch (options)
				{
					case 'getKey':
						return _this.attr('value');
					break;
					case 'getVal':
						return $txt.html();
						break;
					case 'resetValue':
						if(_this.data('combo')=='checkbox'){
							$list.find('label.checkbox').removeClass('checked').find(':checkbox').prop({'checked':false});
						}else if(_this.data('combo')=='radio'){
							$list.find('label.radio').removeClass('checked').find(':radio').prop({'checked':false});
						}
						_this.attr('value','');
						$input.val('');
						$txt.html('-请选择-');
						return;
					break;
					case 'clearValue':
						$list.html('');
						return;
					break;
				}
			}

			switch(_this.data('combo'))
			{
				case 'checkbox':
					var $labelCheckbox = $list.find('label.checkbox');
					$labelCheckbox.removeClass('checked').find(':checkbox').prop({'checked':false});
					switch (options)
					{
						case 'setKey':
							$labelCheckbox.each(function(){
								for(var i=0; i<_data.length; i++){
									var _val = $(this).children('input').val(),
										_name = $(this).children('input').data('name');
									if(_data[i] == _val){
										_tempVal += _val+',';
										_tempName += _name+',';
										$(this).addClass('checked').find(':checkbox').prop({'checked':true});
									}
								}
							});
						break;
						case 'setVal':
							$labelCheckbox.each(function(){
								for(var i=0; i<_data.length; i++){
									var _val = $(this).children('input').val(),
										_name = $(this).children('input').data('name');
									if(_data[i] == _name){
										_tempVal += _val+',';
										_tempName += _name+',';
										$(this).addClass('checked').find(':checkbox').prop({'checked':true});
									}
								}
							});
						break;
					}
					_tempVal = _tempVal.substring(0,_tempVal.length-1);
					_tempName = _tempName.substring(0,_tempName.length-1);
					_this.attr('value',_tempVal);
					$input.val(_tempVal);
					$txt.html(_tempName);
				break;
				case 'radio':
					var $labelRadio = $list.find('label.radio');
					$labelRadio.removeClass('checked').find(':radio').prop({'checked':false});
					switch (options) {
						case 'setKey':
							$labelRadio.each(function(){
								var _val = $(this).children('input').val(),
									_name = $(this).children('input').data('name');
								if(_data == _val){
									_tempVal = _val;
									_tempName = _name;
									$(this).addClass('checked').find(':radio').prop({'checked':true});
								}
							});
						break;
						case 'setVal':
							$labelRadio.each(function(){
								var _val = $(this).children('input').val(),
									_name = $(this).children('input').data('name');
								if(_data == _name){
									_tempVal = _val;
									_tempName = _name;
									$(this).addClass('checked').find(':radio').prop({'checked':true});
								}
							});
						break;
					}
					_this.attr('value',_tempVal);
					$input.val(_tempVal);
					$txt.html(_tempName);
				break;
			}
			return false;
		}
		var defaultsettings= {
			jsonData:null,
			initialValue:null,
			jsonDataId:null,
			jsonDataText:null
		};
		var opts=$.extend(defaultsettings, options);
		var isb;
		if(_this.data('combo')=='checkbox'){
			isb = true;
		}else if(_this.data('combo')=='radio'){
			isb = false;
		}
		function createTempStr(textVal,idVal){
			var tempStrHtml = '';
			if(isb){
				tempStrHtml = '<li>'+
						'<label class="checkbox" data-toggle="checkbox">'+
							'<input type="checkbox" value="'+idVal+'" data-name="'+textVal+'">'+
							'<i class="icon-chkbox"></i>'+textVal+
						'</label>'+
					'</li>';
			}else{
				tempStrHtml = '<li>'+
						'<label class="radio demo-radio-elem">'+
							'<input type="radio" value="'+idVal+'" data-name="'+textVal+'">'+
							'<i class="icon-radio"></i>'+textVal+
						'</label>'+
					'</li>';
			}

			return tempStrHtml;
		}

		if(opts.jsonDataId && opts.jsonDataText){
			$(opts.jsonData).each(function(i,data){
				var idVal = eval('data.'+opts.jsonDataId),
					textVal = eval('data.'+opts.jsonDataText);
				if(idVal==''){
					tempStr+=createTempStr(textVal,idVal);
				}else if(idVal<=0){
					tempStr+=createTempStr(textVal,idVal);
				}
			});
			$(opts.jsonData).each(function(i,data){
				var idVal = eval('data.'+opts.jsonDataId),
					textVal = eval('data.'+opts.jsonDataText);
				if(idVal!='' && idVal>0) {
					tempStr+=createTempStr(textVal,idVal);
				}else if (isNaN(idVal*1)){
					tempStr+=createTempStr(textVal,idVal);
				}
			});
			_this.children('.cus-sel-list').find('ul').html(tempStr);
		}

		if(opts.initialValue){
			var _initVal = _initName = '';
			if(isb){
				var $labelCheckbox = $list.find('label.checkbox');
				$labelCheckbox.removeClass('checked').find(':checkbox').prop({'checked':false});
				$labelCheckbox.each(function(){
					for(var i=0; i<opts.initialValue.length; i++){
						var _val = $(this).children('input').val(),
							_name = $(this).children('input').data('name');
						if(opts.initialValue[i] == _val){
							_initVal += _val+',';
							_initName += _name+',';
							$(this).addClass('checked').find(':checkbox').prop({'checked':true});
						}
					}
				});
				_initVal = _initVal.substring(0,_initVal.length-1);
				_initName = _initName.substring(0,_initName.length-1);
				_this.attr('value',_initVal);
				$input.val(_initVal);
				$txt.html(_initName);
			}else{
				var $labelRadio = $list.find('label.radio');
				$labelRadio.removeClass('checked').find(':radio').prop({'checked':false});
				$labelRadio.each(function(){
					var _val = $(this).children('input').val(),
						_name = $(this).children('input').data('name');
					if(opts.initialValue == _val){
						_initVal = _val;
						_initName = _name;
						$(this).addClass('checked').find(':radio').prop({'checked':true});
					}
				});
				_this.attr('value',_initVal);
				$input.val(_initVal);
				$txt.html(_initName);
			}
		}




		_this.on("click",".cus-sel-chosed",function () {
			_this.removeClass("active").css({zIndex:1});
			$list.hide();
			$(this).parent(".cus-sel").addClass("active").css({zIndex:1000});
			var bodyScrollTop=document.documentElement.scrollTop+document.body.scrollTop,
				domTop=_this.offset().top,
				bodyHeight=$(window).height(),
				listHeight=$(this).siblings('.cus-sel-list').outerHeight(true),
				chosedHeight=$(this).outerHeight(true);
			if(-(domTop+chosedHeight-bodyScrollTop-bodyHeight)<listHeight){
				$(this).siblings('.cus-sel-list').slideDown("fast").css({"top":-(listHeight)+'px'});
			}else{
				$(this).siblings('.cus-sel-list').slideDown("fast").css({"top":chosedHeight+'px'});
			}
			if(downBack){
				downBack(_this);
			}
		});

		switch(_this.data('combo'))
		{
			case 'checkbox':
				$list.on('click','label.checkbox',function(){
					$checkbox = $list.find('input[type="checkbox"]');
					setTimeout(function(){
						var _val = _name = '';
						$checkbox.each(function(){
							if($(this).is(":checked")){
								_val += $(this).val()+',';
								_name += $(this).data('name')+',';
							}
						});
						_val = _val.substring(0,_val.length-1);
						_name = _name.substring(0,_name.length-1);
						_this.attr('value',_val);
						$input.val(_val);
						$txt.html(_name);
					},150);
				});
			break;
			case 'radio':
				$list.on('click','label.radio',function(){
					$radio = $list.find('input[type="radio"]');
					setTimeout(function(){
						var _val = _name = '';
						$radio.each(function(){
							if($(this).is(":checked")){
								_val += $(this).val();
								_name += $(this).data('name');
							}
						});
						_this.attr('value',_val);
						$input.val(_val);
						$txt.html(_name);
					},150);
				});
				break;
		}

		return this;

	};
	$("html,body").click(function (e) {
		var target = e.target;
		if ($(target).parents(".cus-sel").length == 0) {
			$(".cus-sel").removeClass("active"); $(".cus-sel-list").hide();
		}
	});
  	$(document).on('mouseenter', '[data-toggle="ztreeFormSelect"],[data-toggle="domFormSelect"],[data-toggle="comboFormSelect"]', function (e) {
		if($(this).data('mouseenter')) return false;
		$(this).data('mouseenter',true);
		$(this).comboFormSelect();
	});
}(jQuery);
/* ========================================================================
 * tbHover
 * ======================================================================== */
+function ($) {
    $.fn.tbHover = function (options,hoverBack){
			var defaultsettings= {
			};
			var opts=$.extend(defaultsettings, options);
			return this.each(function(){
				var _this=$(this),el=this;
				_this.on("mouseenter","td",function () {
					$(this).parent().addClass("hover");
				}).on("mouseleave","td",function () {
					$(this).parent().removeClass("hover");
				});
                return this;
			});
		};
	
  	$(document).on('mouseenter', '[data-toggle="tbHover"]', function (e) {
		if($(this).data('mouseenter')) return false;
		$(this).data('mouseenter',true);
		$(this).tbHover();
	});

}(jQuery);
/* ========================================================================
 * error-tip-box
 * ======================================================================== */
+function ($) {
  	var errorTipsDom=null;
	$(document).on('mouseenter', '[data-toggle="errorTips"]', function (e) {
		var $el=$(this);
		errorTipsDom=$('<div class="error-tip-box c-hide">'
						+'<div class="hd">'
							+'<s class="arrow arrow-l"><s></s></s>'
						+'</div>'
						+'<div class="bd c-ff8100 c-f14">'+$el.data('text')+'</div>'
					+'</div>').appendTo('body');
		errorTipsDom.css({'left':$el.offset().left+24,'top':$el.offset().top-5}).show(150);
	}).on('mouseleave', '[data-toggle="errorTips"]', function (e) {
		errorTipsDom.remove();
	});
}(jQuery);

/* ========================================================================
 * c-btn-disable
 * ======================================================================== */
+(function($){
	$(document).on("mouseenter",'[data-toggle="disableBtn"]',function (e) {
		if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
		$(this).off('click');
		if($(this).attr('onclick')){
			$(this).removeAttr('onclick');
		}
		return false;
	});
})(jQuery);
/* ========================================================================
 * checkbox , radio
 * ======================================================================== */
+(function($){
	$(document).on("click",'[data-toggle="checkbox"]',function (e) {
		if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
		if($(this).is('.disabled')||$(this).children('input').is(':disabled')){
			return false;
		}
		$(this).toggleClass('checked');
		if($(this).hasClass('checked')) {
			$(this).find(':checkbox').prop({'checked':true});
		} else {
			$(this).find(':checkbox').prop({'checked':false});
		}
	});
	
	
	$(document).on("click",'[data-toggle="radio"]',function(e){
		if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
		if($(this).is('.disabled')||$(this).children('input').is(':disabled')){
			return false;
		}
		$(this).parent().find('.radio').removeClass('checked').find(':radio').prop({'checked':false});
		$(this).addClass('checked').find(':radio').attr({'checked':"checked"});
	});
})(jQuery);
/* ========================================================================
 * checkboxGroup
 * ======================================================================== */
+(function($){
	$.fn.checkboxGroup = function (options){
		var defaultsettings= {
			operate : null,
			opreateDataKey : null,
			opreateDataOther : null,
			elemClass : '.checkbox',
			oneElemClass : '',
			allElemClass : '',
			callBack : null
		};
		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){$(this).checkboxGroup(options)});
			return this;
		}
		var opts = $.extend(defaultsettings, options),
			$this = $(this);

		if(typeof (opts.operate)=='string'){
			switch(opts.operate) {
				case 'setKey':
						$this.find(opts.elemClass).removeClass('checked').find(':checkbox').prop({'checked':false});
						$this.find(':checkbox').each(function(){
							if(typeof (opts.opreateDataKey) == 'object'){
								var $checkbox = $(this);
								$(opts.opreateDataKey).each(function(i,d){
									if ($checkbox.val()==d){
										$checkbox.parent().addClass('checked').find(':checkbox').attr({'checked':"checked"});
									}
								});
							} else if (typeof (opts.opreateDataKey) == 'number'){
								if ($(this).val()==opts.opreateDataKey){
									$(this).parent().addClass('checked').find(':checkbox').attr({'checked':"checked"});
								}
							}
						});
					return false;
					break;
				case 'getKey':
						var _val = '';
						$this.find(':checkbox').each(function(){
							if($(this).is(':checked')){
								_val+=$(this).val()+',';
							}
						});
						_val=_val.substring(0,_val.length-1);
						return _val;
					break;
				case 'other':
					var _val = '';
					$this.find(':checkbox').each(function(){
						if($(this).is(':checked')){
							_val+=$(this).attr(opts.opreateDataOther)+',';
						}
					});
					_val=_val.substring(0,_val.length-1);
					return _val;
					break;
				case 'reset':
					$this.find('label.checkbox').removeClass('checked').find(':checkbox').prop({'checked':false});
					return false;
					break;
			}
		}else if (opts.operate === true){
			//单击全选 checkbox
			$this.on('click',opts.allElemClass,function(e){
				if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
				if($(this).is('.disabled')||$(this).children('input').is(':disabled')){
					return false;
				}
				$(this).toggleClass('checked');
				if($(this).hasClass('checked')) {
					$(this).find(':checkbox').prop({'checked':true});
				} else {
					$(this).find(':checkbox').prop({'checked':false});
				}
				if($(this).find(':checkbox').is(':checked')){
					$this.find(opts.oneElemClass).each(function(){
						$(this).addClass('checked');
						$(this).find(':checkbox').prop({'checked':true});
					});
				}else{
					$this.find(opts.oneElemClass).each(function(){
						$(this).removeClass('checked');
						$(this).find(':checkbox').prop({'checked':false});
					});
				}
				if(opts.callBack){
					opts.callBack($(this));
				}
			});

			//单击单个 checkbox
			$this.on('click',opts.oneElemClass,function(e){
				if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
				if($(this).is('.disabled')||$(this).children('input').is(':disabled')){
					return false;
				}
				$(this).toggleClass('checked');
				if($(this).hasClass('checked')) {
					$(this).find(':checkbox').prop({'checked':true});
				} else {
					$(this).find(':checkbox').prop({'checked':false});
				}
				var chekboxAll=true,
					$all=$this.find(opts.allElemClass);
				$this.find(opts.oneElemClass).each(function(){
					if(!($(this).find(':checkbox').is(':checked'))){
						chekboxAll=false;
					}
				});
				if(chekboxAll){
					$all.addClass('checked');
					$all.find(':checkbox').prop({'checked':true});
				}else{
					$all.removeClass('checked');
					$all.find(':checkbox').prop({'checked':false});
				}
				if(opts.callBack){
					opts.callBack($(this));
				}
			});
		}
	};
})(jQuery);
/* ========================================================================
 * radioGroup
 * ======================================================================== */
+(function($){
	$.fn.radioGroup = function (options){
		var defaultsettings= {
			operate : null,
			opreateDataKey : null,
			opreateDataOther : null,
			elemClass : '.radio'
		};
		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){$(this).radioGroup(options)});
			return this;
		}
		var opts = $.extend(defaultsettings, options),
			$this = $(this);

		if(typeof (opts.operate)=='string'){
			switch(opts.operate) {
				case 'setKey':
					$this.find(opts.elemClass).removeClass('checked').find(':radio').prop({'checked':false});
					$this.find(':radio').each(function(){
						if($(this).val()==opts.opreateDataKey){
							$(this).parent().addClass('checked').find(':radio').attr({'checked':"checked"});
						}
					});
					return false;
				break;
				case 'getKey':
					var _val = null;
					$this.find(':radio').each(function(){
						if($(this).is(':checked')){
							_val=$(this).val();
						}
					});
					return _val;
				break;
				case 'other':
					var _val = null;
					$this.find(':radio').each(function(){
						if($(this).is(':checked')){
							_val=$(this).attr(opts.opreateDataOther);
						}
					});
					return _val;
					break;
				case 'reset':
					$this.find('label.radio').removeClass('checked').find(':radio').prop({'checked':false});
					return false;
				break;
			}
		}

		$this.on("click",opts.elemClass,function(e){
			if (e || e.preventDefault()) e.preventDefault(); else window.event.returnValue = false;
			if($(this).is('.disabled')||$(this).children('input').is(':disabled')){
				return false;
			}
			$this.find(opts.elemClass).removeClass('checked').find(':radio').prop({'checked':false});
			$(this).addClass('checked').find(':radio').attr({'checked':"checked"});
			if(opts.callBack){
				opts.callBack($(this));
			}
		});
	};
})(jQuery);
/* ========================================================================
 * panels
 * ======================================================================== */
+(function($){
	$.fn.panels = function (options){
		var defaultsettings= {
		};
		var opts=$.extend(defaultsettings, options);
		return this.each(function(){
			var _this=$(this),el=this,
				$hd=_this.parents('div.c-panel-hd'),
				$bd=$hd.next('div.c-panel-bd'),
				$panel=_this.parents('div.c-panel');
			switch (_this.data('toggle'))
			{
				case "panelCollapse":
					_this.on('click',function(){
						if($bd.css('display')=='none'){
							$bd.stop(true,false).slideDown("fast",function(){
								_this.html('<i class="iconfont">&#xe60f;</i>');
							});
						}else{
							$bd.stop(true,false).slideUp("fast",function(){
								_this.html('<i class="iconfont">&#xe60e;</i>');
							});
						}
					});
				break;
				case "panelremove":
					_this.on('click',function(){
						$panel.remove();
					});
				break;
			}
			return this;
		});
	};
	$(document).on('mouseenter', '[data-toggle="panelCollapse"],[data-toggle="panelremove"]', function (e) {
		if($(this).data('mouseenter')) return false;
		$(this).data('mouseenter',true);
		$(this).panels();
	});
})(jQuery);
/* ========================================================================
 * page-layout-menu
 * ======================================================================== */
+(function($){
	$(document).ready(function(){
		if($('div[data-toggle="pageLayoutMenu"]').length>0){
			$(".page-layout-menu").height($(window).height()).niceScroll({cursorborder:"",cursorcolor:"#cccdd1"});
		}
	});
})(jQuery);
/* ========================================================================
 * formReadonly 表单禁用、只读
 * ======================================================================== */
+(function($){
	$.fn.formReadonly = function (options,callback){
		var defaultsettings= {
			readonlys : null
		};
		var opts=$.extend(defaultsettings, options);
		return this.each(function(){
			var _this = $(this),
				el = this;
			if(opts.readonlys == true){
				_this.find('input.input-text').each(function(){
					$(this).addClass('input-text-disabled').prop('disabled','disabled');
				});
				_this.find('textarea.textarea').each(function(){
					$(this).addClass('textarea-disabled').prop('disabled','disabled');
				});
				_this.find('input.search').each(function(){
					$(this).parent().addClass('input-search-disabled');
					$(this).prop('disabled','disabled');
				});
				_this.find('.form-select').each(function(){
					$(this).addClass('form-select-disabled').find('select').prop('disabled','disabled');
				});
				_this.find('.cus-sel').each(function(){
					$(this).addClass('disabled');
				});
				_this.find('input.radio,input.checkbox').each(function(){
					$(this).prop('disabled','disabled');
				});
				_this.find('input.datetimepicker').each(function(){
					$(this).addClass('disabled');
					$(this).datetimepicker('destroy');
				});
				_this.find('label.radio,label.checkbox').each(function(){
					$(this).addClass('disabled').find('input').prop('disabled','disabled');
				});
			}else if (opts.readonlys == false){
				_this.find('input.input-text').each(function(){
					$(this).removeClass('input-text-disabled').prop('disabled','');
				});
				_this.find('textarea.textarea').each(function(){
					$(this).removeClass('textarea-disabled').prop('disabled','');
				});
				_this.find('input.search').each(function(){
					$(this).parent().removeClass('input-search-disabled');
					$(this).prop('disabled','');
				});
				_this.find('.form-select').each(function(){
					$(this).removeClass('form-select-disabled').find('select').prop('disabled','');
				});
				_this.find('.cus-sel').each(function(){
					$(this).removeClass('disabled');
				});
				_this.find('input.radio,input.checkbox').each(function(){
					$(this).prop('disabled','');
				});
				_this.find('label.radio,label.checkbox').each(function(){
					$(this).removeClass('disabled').find('input').prop('disabled','');
				});
				_this.find('input.datetimepicker').each(function(){
					$(this).removeClass('disabled');
				});
			}
			if(callback){
				callback();
			}
			return this;
		});
	};

	$(function(){
		$('[data-toggle="formReadonly"]').formReadonly({readonlys:true});
	});
})(jQuery);
//函数节流
function throttle(fn, delay){
	var timer = null;
	return function(){
		var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay);
    };
};