(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document) {
		return;
	}

	if (!Prism.plugins.toolbar) {
		console.warn('Show Languages plugin loaded before Toolbar plugin.');

		return;
	}

	// The languages map is built automatically with gulp
	var Languages = /*languages_placeholder[*/{
		"html": "HTML",
		"xml": "XML",
		"svg": "SVG",
		"mathml": "MathML",
		"css": "CSS",
		"clike": "C-like",
		"js": "JavaScript",
		"abap": "ABAP",
		"abnf": "Augmented Backus–Naur form",
		"apacheconf": "Apache Configuration",
		"apl": "APL",
		"arff": "ARFF",
		"asciidoc": "AsciiDoc",
		"adoc": "AsciiDoc",
		"asm6502": "6502 Assembly",
		"aspnet": "ASP.NET (C#)",
		"autohotkey": "AutoHotkey",
		"autoit": "AutoIt",
		"shell": "Bash",
		"basic": "BASIC",
		"bnf": "Backus–Naur form",
		"rbnf": "Routing Backus–Naur form",
		"csharp": "C#",
		"cs": "C#",
		"dotnet": "C#",
		"cpp": "C++",
		"cil": "CIL",
		"coffee": "CoffeeScript",
		"cmake": "CMake",
		"csp": "Content-Security-Policy",
		"css-extras": "CSS Extras",
		"django": "Django/Jinja2",
		"jinja2": "Django/Jinja2",
		"dockerfile": "Docker",
		"ebnf": "Extended Backus–Naur form",
		"ejs": "EJS",
		"erb": "ERB",
		"fsharp": "F#",
		"gcode": "G-code",
		"gedcom": "GEDCOM",
		"glsl": "GLSL",
		"gml": "GameMaker Language",
		"gamemakerlanguage": "GameMaker Language",
		"graphql": "GraphQL",
		"hs": "Haskell",
		"hcl": "HCL",
		"http": "HTTP",
		"hpkp": "HTTP Public-Key-Pins",
		"hsts": "HTTP Strict-Transport-Security",
		"ichigojam": "IchigoJam",
		"inform7": "Inform 7",
		"javadoc": "JavaDoc",
		"javadoclike": "JavaDoc-like",
		"javastacktrace": "Java stack trace",
		"jq": "JQ",
		"jsdoc": "JSDoc",
		"js-extras": "JS Extras",
		"json": "JSON",
		"jsonp": "JSONP",
		"json5": "JSON5",
		"latex": "LaTeX",
		"tex": "TeX",
		"context": "ConTeXt",
		"emacs": "Lisp",
		"elisp": "Lisp",
		"emacs-lisp": "Lisp",
		"lolcode": "LOLCODE",
		"md": "Markdown",
		"markup-templating": "Markup templating",
		"matlab": "MATLAB",
		"mel": "MEL",
		"n1ql": "N1QL",
		"n4js": "N4JS",
		"n4jsd": "N4JS",
		"nand2tetris-hdl": "Nand To Tetris HDL",
		"nasm": "NASM",
		"nginx": "nginx",
		"nsis": "NSIS",
		"objectivec": "Objective-C",
		"ocaml": "OCaml",
		"opencl": "OpenCL",
		"parigp": "PARI/GP",
		"objectpascal": "Object Pascal",
		"pcaxis": "PC-Axis",
		"px": "PC-Axis",
		"php": "PHP",
		"phpdoc": "PHPDoc",
		"php-extras": "PHP Extras",
		"plsql": "PL/SQL",
		"powershell": "PowerShell",
		"properties": ".properties",
		"protobuf": "Protocol Buffers",
		"py": "Python",
		"q": "Q (kdb+ database)",
		"jsx": "React JSX",
		"tsx": "React TSX",
		"renpy": "Ren'py",
		"rest": "reST (reStructuredText)",
		"rb": "Ruby",
		"sas": "SAS",
		"sass": "Sass (Sass)",
		"scss": "Sass (Scss)",
		"shell-session": "Shell session",
		"sql": "SQL",
		"soy": "Soy (Closure Template)",
		"tap": "TAP",
		"toml": "TOML",
		"tt2": "Template Toolkit 2",
		"ts": "TypeScript",
		"t4-cs": "T4 Text Templates (C#)",
		"t4": "T4 Text Templates (C#)",
		"t4-vb": "T4 Text Templates (VB)",
		"t4-templating": "T4 templating",
		"vbnet": "VB.Net",
		"vhdl": "VHDL",
		"vim": "vim",
		"visual-basic": "Visual Basic",
		"vb": "Visual Basic",
		"wasm": "WebAssembly",
		"wiki": "Wiki markup",
		"xeoracube": "XeoraCube",
		"xojo": "Xojo (REALbasic)",
		"xquery": "XQuery",
		"yaml": "YAML",
		"yml": "YAML"
	}/*]*/;

	Prism.plugins.toolbar.registerButton('show-language', function (env) {
		var pre = env.element.parentNode;
		if (!pre || !/pre/i.test(pre.nodeName)) {
			return;
		}

		/**
		 * Tries to guess the name of a language given its id.
		 *
		 * @param {string} id The language id.
		 * @returns {string}
		 */
		function guessTitle(id) {
			if (!id) {
				return id;
			}
			return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(/s(?=cript)/, 'S');
		}

		var language = pre.getAttribute('data-language') || Languages[env.language] || guessTitle(env.language);

		if (!language) {
			return;
		}
		var element = document.createElement('span');
		element.textContent = language;

		return element;
	});

})();
