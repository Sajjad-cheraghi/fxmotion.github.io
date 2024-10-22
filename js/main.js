class Controll {
    constructor(obj, pages) {
        this.obj = obj;
        this.pages = pages;
    }

    create() {
        for (let i in this.obj) {
            let template = this.obj[i]["template"]
            let target = i
            $(document).ready(function () {
                $.ajax({
                        url: template,
                        context: document.body
                    })
                    .done(function (data) {
                        $(target).html(data)
                    });
            });
        }
        this.create_categories()
    }
    create_categories() {
        let str = ""
        let pages = this.pages
        let cat_item_template = "/templates/category_01.html"
        let make_template = this.make_template

        $(document).ready(function () {
            let cat = $("#articles").attr("category")
            if (cat != "") {
                $.ajax({
                        url: cat_item_template,
                        context: document.body
                    })
                    .done(function (data) {
                        for (let i in pages) {

                            if (pages[i]["tags"].indexOf(cat) != -1) {
                                str += make_template(pages[i], data)
                            }
                        }
                        $('#title').html("Category: " + cat.toUpperCase())
                        $(document).prop('title', `Motiontill ${cat}`);
                        $("#articles").addClass("grid-container")
                        $("#articles").html(str)


                    });
            } else {
                $(document).prop('title', $("#title").html());
            }

            $('head').append('<link rel="shortcut icon" href="/images/icons/icon.png" />')
            $('head').append('<link rel="icon" href="/images/icons/icon.png" />')

        });
    }
    make_template(obj, template) {
        for (let i in obj) {
            template = template.replaceAll("[[" + i + "]]", obj[i])
        }
        return template;
    }

}

const obj = {
    "header": {
        "template": "/templates/header_01.html"
    },
    "aside": {
        "template": "/templates/aside_01.html"
    },
    "nav": {
        "template": "/templates/nav_01.html"
    },
    "footer": {
        "template": "/templates/footer_01.html"
    }
}
const pages = {
    "01": {
        "title": "Motiontill Liveview",
        "excerept": "Motiontill Liveview Organize, preview, and publish assets for After Effects, Premiere Pro. Access free market items and boost project efficiency.",
        "url": "/live-view",
        "img-url": "/images/posts/Motion-till-live-view-video-preview-5.jpg",
        "tags": "live view,free-download,all"
    },
    "02": {
        "title": "How to Install ZXP Adobe’s Extension File",
        "excerept": "4 ways Easily Install ZXP files for Adobe Creative Cloud with various methods, including third-party ZXP installer apps and problems.",
        "url": "/how-to-install-zxp-file/",
        "img-url": "/images/posts/how-to-install-zxp-file.png",
        "tags": "live view,all,tutorials"
    },
    "03": {
        "title": "How To Use Motiontill Liveview",
        "excerept": "Easily use Motiontill LiveView and organize assets for Premiere Pro, After Effects, Illustrator, and Photoshop. Import files, create folders, add previews, and export packages with ease.",
        "url": "/how-to-use-motiontill-liveview/",
        "img-url": "/images/posts/how-to-use-motiontill-live-view-extension.jpg",
        "tags": "live view,all,tutorials"
    },
    "04": {
        "title": "How To Create Motiontill Liveview Package",
        "excerept": "how to create Package n exporting After Effects and Premiere Pro packages with Motiontill LiveView",
        "url": "/how-to-create-motiontill-liveview-package/",
        "img-url": "/images/posts/Motiontill-Liveview-Picture.jpg",
        "tags": "live view,all,tutorials"
    },
    "05": {
        "title": "Common Way To Run Script On Adobe Applications",
        "excerept": "Run Script like JSX and JSXBIN are custom programs written to automate tasks, learn how to Run After effects Script and Run Premiere Pro Script",
        "url": "/common-mistake-loading-scripts-on-adobe/",
        "img-url": "/images/posts/Run-Script-On-Adobe-Applications.jpg",
        "tags": "live view,all,tutorials"
    },
    "06": {
        "title": "Export Comps As Project Files",
        "excerept": "export all aftereffects comps to individual projects files ,with one click",
        "url": "/export-comps-as-project-file-ae-file-script",
        "img-url": "/images/posts/how-to-create-motiontill-liveview-package.png",
        "tags": "live view,all,tutorials,free-download"
    },
}
const controll = new Controll(obj, pages)
controll.create();