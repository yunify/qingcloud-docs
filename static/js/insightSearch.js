jQuery.extend({
  highlight: function (node, re, nodeName, className) {
    if (node.nodeType === 3) {
      var match = node.data.match(re);
      if (match) {
        var highlight = document.createElement(nodeName || "span");
        highlight.className = className || "highlight";
        var wordNode = node.splitText(match.index);
        wordNode.splitText(match[0].length);
        var wordClone = wordNode.cloneNode(true);
        highlight.appendChild(wordClone);
        wordNode.parentNode.replaceChild(highlight, wordNode);
        return 1; //skip added node in parent
      }
    } else if (
      node.nodeType === 1 &&
      node.childNodes && // only element nodes that have children
      !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
      !(node.tagName === nodeName.toUpperCase() && node.className === className)
    ) {
      // skip if already highlighted
      for (var i = 0; i < node.childNodes.length; i++) {
        i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
      }
    }
    return 0;
  },
});

jQuery.fn.unhighlight = function (options) {
  var settings = { className: "highlight", element: "span" };
  jQuery.extend(settings, options);

  return this.find(settings.element + "." + settings.className)
    .each(function () {
      var parent = this.parentNode;
      parent.replaceChild(this.firstChild, this);
      parent.normalize();
    })
    .end();
};

jQuery.fn.highlight = function (words, options) {
  var settings = {
    className: "highlight",
    element: "span",
    caseSensitive: false,
    wordsOnly: false,
  };
  jQuery.extend(settings, options);

  if (words.constructor === String) {
    words = [words];
  }
  words = jQuery.grep(words, function (word, i) {
    return word != "";
  });
  words = jQuery.map(words, function (word, i) {
    return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  });
  if (words.length == 0) {
    return this;
  }

  var flag = settings.caseSensitive ? "" : "i";
  var pattern = "(" + words.join("|") + ")";
  if (settings.wordsOnly) {
    pattern = "\\b" + pattern + "\\b";
  }
  var re = new RegExp(pattern, flag);

  return this.each(function () {
    jQuery.highlight(this, re, settings.element, settings.className);
  });
};
const CONFIG = JSON.parse(JSON.stringify(window.INSIGHT_CONFIG));
var $main = $(".ins-search");
var $input = $main.find(".ins-search-input");
var $wrapper = $main.find(".ins-section-wrapper");
var $container = $main.find(".ins-section-container");
var summaryInclude = 60;

function section(title) {
  return $("<section>")
    .addClass("ins-section")
    .append($("<a>").addClass("ins-section-header").text(title));
}

function searchItem(icon, title, slug, preview, url) {
  return $("<div>")
    .addClass("ins-selectable")
    .addClass("ins-search-item")
    .append(
      $("<a>")
        .append(
          $("<i>")
            .addClass("fa")
            .addClass("fa-" + icon)
        )
        .append(
          title != null && title != "" ? title : CONFIG.TRANSLATION["UNTITLED"]
        )
        .append(slug ? $("<span>").addClass("ins-slug").text(slug) : null)
    )
    .append(
      preview ? $("<p>").addClass("ins-search-preview").text(preview) : null
    )
    .attr("data-url", url);
}

function sectionFactory(type, array) {
  var sectionTitle;
  var $searchItems;
  if (array.length === 0) return null;
  sectionTitle = `结果(${array?.length})`;
  switch (type) {
    case "POSTS":
    case "PAGES":
      $searchItems = array.map(function (item) {
        return searchItem(
          "file",
          item.title,
          null,
          item.text.slice(0, 200),
          CONFIG.ROOT_URL + item.permalink
        );
      });
      break;
    case "CATEGORIES":
    case "TAGS":
      $searchItems = array.map(function (item) {
        return searchItem(
          type === "CATEGORIES" ? "folder" : "tag",
          item.name,
          item.slug,
          null,
          item.permalink
        );
      });
      break;
    default:
      return null;
  }

  return section(sectionTitle).append($searchItems);
}

function extractToSet(json, key) {
  var values = {};
  var entries = json?.posts || [];
  entries.forEach(function (entry) {
    if (entry[key]) {
      entry[key].forEach(function (value) {
        values[value.name] = value;
      });
    }
  });
  var result = [];
  for (var key in values) {
    result.push(values[key]);
  }
  return result;
}

function parseKeywords(keywords) {
  return keywords
    .split(" ")
    .filter(function (keyword) {
      return !!keyword;
    })
    .map(function (keyword) {
      return keyword.toUpperCase();
    });
}

function filter(keywords, obj, fields) {
  var result = false;
  var keywordArray = parseKeywords(keywords);
  var containKeywords = keywordArray.filter(function (keyword) {
    var containFields = fields.filter(function (field) {
      if (!obj.hasOwnProperty(field)) return false;
      if (obj[field].toUpperCase().indexOf(keyword) > -1) return true;
    });
    if (containFields.length > 0) return true;
    return false;
  });
  return containKeywords.length === keywordArray.length;
}

function filterFactory(keywords) {
  return {
    POST: function (obj) {
      return filter(keywords, obj, ["title", "text"]);
    },
    PAGE: function (obj) {
      return filter(keywords, obj, ["title", "text"]);
    },
    CATEGORY: function (obj) {
      return filter(keywords, obj, ["name", "slug"]);
    },
    TAG: function (obj) {
      return filter(keywords, obj, ["name", "slug"]);
    },
  };
}

function weight(keywords, obj, fields, weights) {
  var value = 0;
  parseKeywords(keywords).forEach(function (keyword) {
    var pattern = new RegExp(keyword, "img"); // Global, Multi-line, Case-insensitive
    fields.forEach(function (field, index) {
      if (obj.hasOwnProperty(field)) {
        var matches = obj[field].match(pattern);
        value += matches ? matches.length * weights[index] : 0;
      }
    });
  });
  return value;
}

function weightFactory(keywords) {
  return {
    POST: function (obj) {
      return weight(keywords, obj, ["title", "text"], [3, 1]);
    },
    PAGE: function (obj) {
      return weight(keywords, obj, ["title", "text"], [3, 1]);
    },
    CATEGORY: function (obj) {
      return weight(keywords, obj, ["name", "slug"], [1, 1]);
    },
    TAG: function (obj) {
      return weight(keywords, obj, ["name", "slug"], [1, 1]);
    },
  };
}

function search(json, keywords) {
  var WEIGHTS = weightFactory(keywords);
  var FILTERS = filterFactory(keywords);
  var posts = JSON.parse(JSON.stringify(json?.posts || json));
  // var pages = json.pages;
  var tags = extractToSet(json, "tags");
  var categories = extractToSet(json, "categories");
  return {
    posts: posts.filter(FILTERS.POST).sort(function (a, b) {
      return WEIGHTS.POST(b) - WEIGHTS.POST(a);
    }),
    // pages: pages.filter(FILTERS.PAGE).sort(function (a, b) { return WEIGHTS.PAGE(b) - WEIGHTS.PAGE(a); }).slice(0, 5),
    categories: categories
      .filter(FILTERS.CATEGORY)
      .sort(function (a, b) {
        return WEIGHTS.CATEGORY(b) - WEIGHTS.CATEGORY(a);
      })
      .slice(0, 5),
    tags: tags
      .filter(FILTERS.TAG)
      .sort(function (a, b) {
        return WEIGHTS.TAG(b) - WEIGHTS.TAG(a);
      })
      .slice(0, 5),
  };
}

function searchResultToDOM(searchResult, keywords) {
  if (!searchResult.posts?.length) {
    sectionTitle = `结果(0)`;
    return $container.html(section(sectionTitle));
  }
  $container.empty();
  for (var key in searchResult) {
    $container.append(sectionFactory(key.toUpperCase(), searchResult[key]));
  }
  setTimeout(() => {
    $container.unhighlight();
    $container.highlight(keywords);
  }, 300);
}

function scrollTo($item) {
  if ($item.length === 0) return;
  var wrapperHeight = $wrapper[0].clientHeight;
  var itemTop = $item.position().top - $wrapper.scrollTop();
  var itemBottom = $item[0].clientHeight + $item.position().top;
  if (itemBottom > wrapperHeight + $wrapper.scrollTop()) {
    $wrapper.scrollTop(itemBottom - $wrapper[0].clientHeight);
  }
  if (itemTop < 0) {
    $wrapper.scrollTop($item.position().top);
  }
}

function selectItemByDiff(value) {
  var $items = $.makeArray($container.find(".ins-selectable"));
  var prevPosition = -1;
  $items.forEach(function (item, index) {
    if ($(item).hasClass("active")) {
      prevPosition = index;
      return;
    }
  });
  var nextPosition = ($items.length + prevPosition + value) % $items.length;
  $($items[prevPosition]).removeClass("active");
  $($items[nextPosition]).addClass("active");
  scrollTo($($items[nextPosition]));
}

function gotoLink($item) {
  if ($item && $item.length) {
    location.href = $item.attr("data-url");
  }
}

$(function () {
  $.getJSON("/index.json", (json) => {
    var jsonTemp = JSON.parse(JSON.stringify(json));
    if (location.hash.trim() === "#ins-search") {
      $main.addClass("show");
    }
    if (isConsole()) {
      $("#console-search-btn").on("click", () => {
        const keywords = $input.val();
        searchResultToDOM(search(jsonTemp, keywords), keywords);
      });
      $(document).on("keydown", function (e) {
        if (e.keyCode === 13) {
          const keywords = $input.val();
          $container.addClass("show");
          searchResultToDOM(search(jsonTemp, keywords), keywords);
        }
      });
    } else {
      $input.on(
        "input",
        debounce(function () {
          const keywords = $(this).val();
          searchResultToDOM(search(jsonTemp, keywords), keywords);
        }, 300)
      );
    }
    $input.trigger("input");
  });
});

function debounce(fn, delay) {
  var timer;
  return function () {
    var _this = this;
    var args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(_this, args);
    }, delay);
  };
}

$(document)
  .on("click focus", ".search-field", function () {
    if (!isConsole()) {
      $container.addClass("show");
      $main.find(".ins-search-input").focus();
    }
  })
  .on("click focus", ".search-form-submit", function () {
    $container.addClass("show");
    $main.find(".ins-search-input").focus();
  })
  .on("click", ".ins-search-item", function () {
    gotoLink($(this));
  })
  .on("click", ".ins-close", function () {
    $container.removeClass("show");
  })
  .on("click", ".search-button", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $container.addClass("show");
  })

  .on("keydown", function (e) {
    if (!isConsole()) {
      $container.addClass("show");
    }
    if (!$container.hasClass("show") || isConsole()) return;
    switch (e.keyCode) {
      case 27: // ESC
        $container.removeClass("show");
        break;
      case 38: // UP
        selectItemByDiff(-1);
        break;
      case 40: // DOWN
        selectItemByDiff(1);
        break;
      case 13: //ENTER
        gotoLink($container.find(".ins-selectable.active").eq(0));
        break;
    }
  });
// $("#console-search-btn").on("click", () => {
//   gotoLink($container.find(".ins-selectable.active").eq(0));
// });

function isConsole() {
  var isConsole = $(".console-search-block");
  return isConsole.length;
}

$(document).on("click", (e) => {
  if ($container.hasClass("show")) {
    $container.removeClass("show");
  }
});
// })(jQuery, window.INSIGHT_CONFIG);
