/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+coffeescript+scss+ruby&plugins=line-numbers */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*="language-"],
pre[class*="language-"] {
  color: black;
  text-shadow: 0 1px white;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace;
  font-size: 12px;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  padding: 0.5em 1em;
  margin: .5em 0;
  overflow: hidden;
  overflow-x: auto;
  margin: 0;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #fff;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: .1em;
  border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #999988;
  font-style: italic;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #a67f59;
  background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function {
  color: #DD4A68;
}

.token.regex,
.token.important {
  color: #e90;
}

.token.important {
  font-weight: bold;
}

.token.entity {
  cursor: help;
}

pre.line-numbers {
  position: relative;
  padding-left: 4.8em;
  counter-reset: linenumber;
}

pre.line-numbers > code {
  position: relative;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  font-size: 100%;
  left: -4.8em;
  width: 4em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #eee;
  padding-top: 1em;
  top: -1em;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}

.line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #b7b7b7;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
