var _d = document;
function get(id) {
    return _d.getElementById(id);
}
function create(el) {
    return _d.createElement(el);
}

function initStyle() {
    var tag_css = create('link');
    tag_css.rel = 'stylesheet';
    tag_css.href = './style/main.css';
    tag_css.type = 'text/css';
    var tag_head = _d.getElementsByTagName('head');
    tag_head[0].appendChild(tag_css);
}
initStyle();

function Widget(style) {

    this.setStyle = function (style) {
        if (typeof style === "string") {
            this.element.setAttribute("class", style);
        }
        else {
            for (var property in style) {
                this.element.style[property] = style[property];
            }
        }
    };
}

function Panel(id) {
    this.id = id;
    this.element = create("div");
    this.element.setAttribute("id", id);
    this.childs = {};

    this.Add = function (w) {
        this.childs[w.id] = w;
        this.element.appendChild(w.element);
    };

    this.build = function () {
        _d.body.appendChild(this.element);
    };

    this.content = function (text) {
        var t = _d.createTextNode(text);
        this.element.appendChild(t);
    };
}
Panel.prototype = new Widget;

function MenuLink(text, link) {
    this.text = text;
    this.link = link || "#";
    this.element = create("a");
    this.element.setAttribute("href", this.link);
    this.element.setAttribute("class", "menu-link");
    this.element.appendChild(_d.createTextNode(this.text));
}
MenuLink.prototype = new Widget;

function MenuPanel(id) {
    this.id = id;
    this.element = create("menu");
    this.element.setAttribute("id", id);
    this.menuLinks = {};

    this.AddMenuLink = function (ml) {
        this.menuLinks[ml.text] = ml;
        this.element.appendChild(ml.element);
    };
}
MenuPanel.prototype = new Widget;