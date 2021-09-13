(function() {
    'use strict';
  
    if(!document.queryCommandSupported('copy')) {
      return;
    }

  
    function flashCopyMessage(el, msg) {
      el.textContent = msg;
      setTimeout(function() {
        el.textContent = "Copy";
      }, 1000);
    }
  
    function selectText(node) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      return selection;
    }
  
    function addCopyButton(containerEl) {
      var copyBtn = document.createElement("button");
      copyBtn.className = "highlight-copy-btn";
      copyBtn.textContent = "Copy";

      if (!containerEl.getAttribute('data-lang')) {
        
        copyBtn.className = "highlight-copy-btn";
  
        var spanTxt = document.createElement("span");
        spanTxt.textContent = containerEl.textContent
        containerEl.innerHTML = ''
        containerEl.appendChild(spanTxt)
      containerEl.parentNode.className = 'highlight';
      }


      copyBtn.addEventListener('click', function() {
  
        try {
          
          var selection = selectText(containerEl);
          document.execCommand('copy');
          selection.removeAllRanges();
      
          flashCopyMessage(copyBtn, 'Copied!')
        } catch(e) {
          console && console.log(e);
          flashCopyMessage(copyBtn, 'Failed :\'(')
        }
      });
      containerEl.parentNode.append(copyBtn);
    }
 
    var normalCodeBlock = $("pre code");
    if (normalCodeBlock) {
      Array.prototype.forEach.call(normalCodeBlock, addCopyButton);
    }
  })();
  
