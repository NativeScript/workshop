(function() {
	"use strict";

	function isMobile() {
		return $(window).width() <= 700;
	}

	// TODO: Don't do this in JS. Ugh.
	if (isMobile()) {
		$("body").addClass("no-toc");
	}

	// Build the TOC
	var toc = $("#toc-padding");
	$(".chapter").each(function(chapterNumber) {
		$(this).find("h2").each(function() {
			var valueToPrepend = chapterNumber === 0 ? "" : "<strong>" + chapterNumber + ". </strong>";
			$(this)
				.attr("id", "chapter" + chapterNumber)
				.prepend(valueToPrepend);
			toc.append("<h5><a href='#chapter" + chapterNumber + "'>" +
				$(this).html() + "</a></h5>");
		});

		$(this).find("h3").each(function(sectionNumber) {
			var hash = chapterNumber + "." + sectionNumber + "";
			$(this)
				.attr("id", "chapter" + hash)
				.prepend("<strong>" + hash + ". </strong>");
			toc.append("<h6><a href='#chapter" + chapterNumber + "." + sectionNumber + "'>" +
				$(this).html() + "</a></h6>");
		});
	});

	$("#toggle-toc").on("click", function() {
		$("body").toggleClass("no-toc");
		return false;
	});
	$("#toc").on("click", "a", function() {
		if (isMobile()) {
			$("body").addClass("no-toc");
		}
	});

	var codeSampleMapper = {
		"c#": "clike",
		"appbuilder" : "javascript",
		"javascript" : "javascript",
		"typescript" : "typescript",
		"c++" : "clike",
		"c" : "clike",
		"css" : "css",
		"objective-c" : "clike",
		"java" : "clike",
		"xml" : "markup"
	}

	// Enable Prism support by mapping the lang attributes to the language-* attribute Prim expects
	$("pre").each(function(index){
		var lang = $(this).find("code").attr("class");
		if (lang) {
			lang = lang.replace("lang-", "").toLowerCase();
		}
		var langExtension = codeSampleMapper[lang];
		$(this)
			.removeAttr("class")
			.addClass("language-" + langExtension)
			.find("code")
			.removeAttr("class")
			.addClass("language-" + langExtension);
	});
	Prism.highlightAll();

	// Build the exercise sections
	$(".exercise-start").each(function() {
		var exerciseDiv = $("<div class='exercise'></div>");
		$(this).before(exerciseDiv);
		$(this).nextUntil(".exercise-end").addBack().appendTo(exerciseDiv);
	});
	$(".exercise-end").remove();

	// Detecting clipboard support without UA sniffing is basically impossible
	// at the moment. See https://gist.github.com/jonrohan/81085b119d16cdd7868a.
	// Edge, Chrome, and Firefox support the API but Safari does not.
	// (Edge hits this if test because it has “Chrome” in its user agent string).
	if (navigator.userAgent.match(/(Chrome|Firefox)/)) {
		// Add copy buttons to all pre tags in exercises
		$(".exercise pre").each(function() {
			// Pre tags in exercises can remove the code button by including a div
			// with the no-copy-button class name before them.
			if ($(this).prev().hasClass("no-copy-button")) {
				return;
			}
			$(this).prepend("<button class='copy-button' title='Copy to clipboard'>Copy</button>");
		});
	}

	// Add copy-to-clipboard behavior to the copy buttons.
	// See https://developers.google.com/web/updates/2015/04/cut-and-copy-commands?hl=en
	$(".copy-button").on("click", function() {
		window.getSelection().removeAllRanges();
		var codeElement = $(this).parent().find("code")[0];
		var range = document.createRange();
		range.selectNode(codeElement);
		window.getSelection().addRange(range);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();
		$(this).blur();
	});

	// Make the solutions toggle-able.
	var solutionStarts = $(".solution-start")
	solutionStarts
		.each(function() {
			var $this = $(this);
			var contents = $this.nextUntil(".solution-end");
			var solutionLink = $("<a href='#'>Show solution</a>");

			contents.hide();
			$this.before(solutionLink);
			solutionLink.on("click", function() {
				contents.toggle();
				solutionLink.text(solutionLink.text().match(/Show/) ? "Hide solution" : "Show solution");
				return false;
			});
			solutionLink.wrap("<p>");
		});
}());
