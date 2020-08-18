
    function download_pdf(){
		var targetDom = $("main");
		//把需要导出的pdf内容clone一份，这样对它进行转换、微调等操作时才不会影响原来界面
		var copyDom = targetDom.clone();
		//新的div宽高跟原来一样，高度设置成自适应，这样才能完整显示节点中的所有内容（比如说表格滚动条中的内容）
		copyDom.width(targetDom.width() + "px");
		copyDom.height(targetDom.height() + "px");

		$('body').append(copyDom);//ps:这里一定要先把copyDom append到body下，然后再进行后续的glyphicons2canvas处理，不然会导致图标为空

		svg2canvas(copyDom);
		html2canvas(copyDom, {
			onrendered: function (canvas) {
				var imgData = canvas.toDataURL('image/jpeg');
				var img = new Image();
				img.src = imgData;
				//根据图片的尺寸设置pdf的规格，要在图片加载成功时执行，之所以要*0.225是因为比例问题
				img.onload = function () {
					//此处需要注意，pdf横置和竖置两个属性，需要根据宽高的比例来调整，不然会出现显示不完全的问题
					if (this.width > this.height) {
						var doc = new jsPDF('l', 'mm', [this.width * 0.225, this.height * 0.225]);
					} else {
						var doc = new jsPDF('p', 'mm', [this.width * 0.225, this.height * 0.225]);
					}
					doc.addImage(imgData, 'jpeg', 0, 0, this.width * 0.225, this.height * 0.225);
					//根据下载保存成不同的文件名
					doc.save('pdf_' + new Date().getTime() + '.pdf');
				};
				//删除复制出来的div
				copyDom.remove();
			},
			background: "#fff",
			//这里给生成的图片默认背景，不然的话，如果你的html根节点没设置背景的话，会用黑色填充。
			allowTaint: true //避免一些不识别的图片干扰，默认为false，遇到不识别的图片干扰则会停止处理html2canvas
		});
    };

    function svg2canvas(targetElem) {
        var svgElem = targetElem.find('svg');
        svgElem.each(function (index, node) {
            var parentNode = node.parentNode;
            //由于现在的IE不支持直接对svg标签node取内容，所以需要在当前标签外面套一层div，通过外层div的innerHTML属性来获取
            var tempNode = document.createElement('div');
            tempNode.appendChild(node);
            var svg = tempNode.innerHTML;
            var canvas = document.createElement('canvas');
            //转换
            canvg(canvas, svg);
            parentNode.appendChild(canvas);
        });
    }

    function glyphicons2canvas(targetElem, fontClassName, fontFamilyName) {
        var iconElems = targetElem.find('.' + fontClassName);
        iconElems.each(function (index, inconNode) {
            var fontSize = $(inconNode).css("font-size");
            var iconColor = $(inconNode).css("color");
            var styleContent = $(inconNode).attr('style');
            //去掉"px"
            fontSize = fontSize.replace("px", "");
            var charCode = getCharCodeByGlyphiconsName(iconName);
            var myCanvas = document.createElement('canvas');
            //把canva宽高各增加2是为了显示图标完整
            myCanvas.width = parseInt(fontSize) + 2;
            myCanvas.height = parseInt(fontSize) + 2;
            myCanvas.style = styleContent;
            var ctx = myCanvas.getContext('2d');
            //设置绘图内容的颜色
            ctx.fillStyle = iconColor;
            //设置绘图的字体大小以及font-family的名字
            ctx.font = fontSize + 'px ' + fontFamilyName;
            ctx.fillText(String.fromCharCode(charCode), 1, parseInt(fontSize) + 1);
            $(inconNode).replaceWith(myCanvas);
        });
    }
    //根据glyphicons/glyphicon图标的类名获取到对应的char code
    function getCharCodeByGlyphiconsName(iconName) {
        switch (iconName) {
            case("glyphicons-resize-full"):
                return "0xE216";
            case ("glyphicons-chevron-left"):
                return "0xE225";
            default:
                return "";
        }
    }
