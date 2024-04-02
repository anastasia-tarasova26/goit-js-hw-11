var T =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function R(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default")
    ? b.default
    : b;
}
var z = { exports: {} };
(function (b, D) {
  (function (y, w) {
    b.exports = w(y);
  })(typeof T < "u" ? T : window || T.window || T.global, function (y) {
    var w = {},
      f = "iziToast";
    document.querySelector("body");
    var O = !!/Mobi/.test(navigator.userAgent),
      P =
        /Chrome/.test(navigator.userAgent) &&
        /Google Inc/.test(navigator.vendor),
      M = typeof InstallTrigger < "u",
      N = "ontouchstart" in document.documentElement,
      X = [
        "bottomRight",
        "bottomLeft",
        "bottomCenter",
        "topRight",
        "topLeft",
        "topCenter",
        "center",
      ],
      Y = {
        info: { color: "blue", icon: "ico-info" },
        success: { color: "green", icon: "ico-success" },
        warning: { color: "orange", icon: "ico-warning" },
        error: { color: "red", icon: "ico-error" },
        question: { color: "yellow", icon: "ico-question" },
      },
      E = 568,
      v = {};
    w.children = {};
    var S = {
      id: null,
      class: "",
      title: "",
      titleColor: "",
      titleSize: "",
      titleLineHeight: "",
      message: "",
      messageColor: "",
      messageSize: "",
      messageLineHeight: "",
      backgroundColor: "",
      theme: "light",
      color: "",
      icon: "",
      iconText: "",
      iconColor: "",
      iconUrl: null,
      image: "",
      imageWidth: 50,
      maxWidth: null,
      zindex: null,
      layout: 1,
      balloon: !1,
      close: !0,
      closeOnEscape: !1,
      closeOnClick: !1,
      displayMode: 0,
      position: "bottomRight",
      target: "",
      targetFirst: !0,
      timeout: 5e3,
      rtl: !1,
      animateInside: !0,
      drag: !0,
      pauseOnHover: !0,
      resetOnHover: !1,
      progressBar: !0,
      progressBarColor: "",
      progressBarEasing: "linear",
      overlay: !1,
      overlayClose: !1,
      overlayColor: "rgba(0, 0, 0, 0.6)",
      transitionIn: "fadeInUp",
      transitionOut: "fadeOut",
      transitionInMobile: "fadeInUp",
      transitionOutMobile: "fadeOutDown",
      buttons: {},
      inputs: {},
      onOpening: function () {},
      onOpened: function () {},
      onClosing: function () {},
      onClosed: function () {},
    };
    if (
      ("remove" in Element.prototype ||
        (Element.prototype.remove = function () {
          this.parentNode && this.parentNode.removeChild(this);
        }),
      typeof window.CustomEvent != "function")
    ) {
      var A = function (a, n) {
        n = n || { bubbles: !1, cancelable: !1, detail: void 0 };
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(a, n.bubbles, n.cancelable, n.detail), e;
      };
      (A.prototype = window.Event.prototype), (window.CustomEvent = A);
    }
    var p = function (a, n, e) {
        if (Object.prototype.toString.call(a) === "[object Object]")
          for (var i in a)
            Object.prototype.hasOwnProperty.call(a, i) && n.call(e, a[i], i, a);
        else if (a)
          for (var c = 0, h = a.length; c < h; c++) n.call(e, a[c], c, a);
      },
      l = function (a, n) {
        var e = {};
        return (
          p(a, function (i, c) {
            e[c] = a[c];
          }),
          p(n, function (i, c) {
            e[c] = n[c];
          }),
          e
        );
      },
      t = function (a) {
        var n = document.createDocumentFragment(),
          e = document.createElement("div");
        for (e.innerHTML = a; e.firstChild; ) n.appendChild(e.firstChild);
        return n;
      },
      o = function (a) {
        var n = btoa(encodeURIComponent(a));
        return n.replace(/=/g, "");
      },
      s = function (a) {
        return (
          a.substring(0, 1) == "#" ||
          a.substring(0, 3) == "rgb" ||
          a.substring(0, 3) == "hsl"
        );
      },
      d = function (a) {
        try {
          return btoa(atob(a)) == a;
        } catch {
          return !1;
        }
      },
      u = (function () {
        return {
          move: function (a, n, e, i) {
            var c,
              h = 0.3,
              r = 180;
            i !== 0 &&
              (a.classList.add(f + "-dragged"),
              (a.style.transform = "translateX(" + i + "px)"),
              i > 0
                ? ((c = (r - i) / r),
                  c < h &&
                    n.hide(
                      l(e, {
                        transitionOut: "fadeOutRight",
                        transitionOutMobile: "fadeOutRight",
                      }),
                      a,
                      "drag"
                    ))
                : ((c = (r + i) / r),
                  c < h &&
                    n.hide(
                      l(e, {
                        transitionOut: "fadeOutLeft",
                        transitionOutMobile: "fadeOutLeft",
                      }),
                      a,
                      "drag"
                    )),
              (a.style.opacity = c),
              c < h &&
                ((P || M) && (a.style.left = i + "px"),
                (a.parentNode.style.opacity = h),
                this.stopMoving(a, null)));
          },
          startMoving: function (a, n, e, i) {
            i = i || window.event;
            var c = N ? i.touches[0].clientX : i.clientX,
              h = a.style.transform.replace("px)", "");
            h = h.replace("translateX(", "");
            var r = c - h;
            e.transitionIn && a.classList.remove(e.transitionIn),
              e.transitionInMobile && a.classList.remove(e.transitionInMobile),
              (a.style.transition = ""),
              N
                ? (document.ontouchmove = function (m) {
                    m.preventDefault(), (m = m || window.event);
                    var g = m.touches[0].clientX,
                      C = g - r;
                    u.move(a, n, e, C);
                  })
                : (document.onmousemove = function (m) {
                    m.preventDefault(), (m = m || window.event);
                    var g = m.clientX,
                      C = g - r;
                    u.move(a, n, e, C);
                  });
          },
          stopMoving: function (a, n) {
            N
              ? (document.ontouchmove = function () {})
              : (document.onmousemove = function () {}),
              (a.style.opacity = ""),
              (a.style.transform = ""),
              a.classList.contains(f + "-dragged") &&
                (a.classList.remove(f + "-dragged"),
                (a.style.transition = "transform 0.4s ease, opacity 0.4s ease"),
                setTimeout(function () {
                  a.style.transition = "";
                }, 400));
          },
        };
      })();
    return (
      (w.setSetting = function (a, n, e) {
        w.children[a][n] = e;
      }),
      (w.getSetting = function (a, n) {
        return w.children[a][n];
      }),
      (w.destroy = function () {
        p(document.querySelectorAll("." + f + "-overlay"), function (a, n) {
          a.remove();
        }),
          p(document.querySelectorAll("." + f + "-wrapper"), function (a, n) {
            a.remove();
          }),
          p(document.querySelectorAll("." + f), function (a, n) {
            a.remove();
          }),
          (this.children = {}),
          document.removeEventListener(f + "-opened", {}, !1),
          document.removeEventListener(f + "-opening", {}, !1),
          document.removeEventListener(f + "-closing", {}, !1),
          document.removeEventListener(f + "-closed", {}, !1),
          document.removeEventListener("keyup", {}, !1),
          (v = {});
      }),
      (w.settings = function (a) {
        w.destroy(), (v = a), (S = l(S, a || {}));
      }),
      p(Y, function (a, n) {
        w[n] = function (e) {
          var i = l(v, e || {});
          (i = l(a, i || {})), this.show(i);
        };
      }),
      (w.progress = function (a, n, e) {
        var i = this,
          c = n.getAttribute("data-iziToast-ref"),
          h = l(this.children[c], a || {}),
          r = n.querySelector("." + f + "-progressbar div");
        return {
          start: function () {
            typeof h.time.REMAINING > "u" &&
              (n.classList.remove(f + "-reseted"),
              r !== null &&
                ((r.style.transition =
                  "width " + h.timeout + "ms " + h.progressBarEasing),
                (r.style.width = "0%")),
              (h.time.START = new Date().getTime()),
              (h.time.END = h.time.START + h.timeout),
              (h.time.TIMER = setTimeout(function () {
                clearTimeout(h.time.TIMER),
                  n.classList.contains(f + "-closing") ||
                    (i.hide(h, n, "timeout"),
                    typeof e == "function" && e.apply(i));
              }, h.timeout)),
              i.setSetting(c, "time", h.time));
          },
          pause: function () {
            if (
              typeof h.time.START < "u" &&
              !n.classList.contains(f + "-paused") &&
              !n.classList.contains(f + "-reseted")
            ) {
              if (
                (n.classList.add(f + "-paused"),
                (h.time.REMAINING = h.time.END - new Date().getTime()),
                clearTimeout(h.time.TIMER),
                i.setSetting(c, "time", h.time),
                r !== null)
              ) {
                var m = window.getComputedStyle(r),
                  g = m.getPropertyValue("width");
                (r.style.transition = "none"), (r.style.width = g);
              }
              typeof e == "function" &&
                setTimeout(function () {
                  e.apply(i);
                }, 10);
            }
          },
          resume: function () {
            typeof h.time.REMAINING < "u"
              ? (n.classList.remove(f + "-paused"),
                r !== null &&
                  ((r.style.transition =
                    "width " + h.time.REMAINING + "ms " + h.progressBarEasing),
                  (r.style.width = "0%")),
                (h.time.END = new Date().getTime() + h.time.REMAINING),
                (h.time.TIMER = setTimeout(function () {
                  clearTimeout(h.time.TIMER),
                    n.classList.contains(f + "-closing") ||
                      (i.hide(h, n, "timeout"),
                      typeof e == "function" && e.apply(i));
                }, h.time.REMAINING)),
                i.setSetting(c, "time", h.time))
              : this.start();
          },
          reset: function () {
            clearTimeout(h.time.TIMER),
              delete h.time.REMAINING,
              i.setSetting(c, "time", h.time),
              n.classList.add(f + "-reseted"),
              n.classList.remove(f + "-paused"),
              r !== null &&
                ((r.style.transition = "none"), (r.style.width = "100%")),
              typeof e == "function" &&
                setTimeout(function () {
                  e.apply(i);
                }, 10);
          },
        };
      }),
      (w.hide = function (a, n, e) {
        typeof n != "object" && (n = document.querySelector(n));
        var i = this,
          c = l(this.children[n.getAttribute("data-iziToast-ref")], a || {});
        (c.closedBy = e || null),
          delete c.time.REMAINING,
          n.classList.add(f + "-closing"),
          (function () {
            var m = document.querySelector("." + f + "-overlay");
            if (m !== null) {
              var g = m.getAttribute("data-iziToast-ref");
              g = g.split(",");
              var C = g.indexOf(String(c.ref));
              C !== -1 && g.splice(C, 1),
                m.setAttribute("data-iziToast-ref", g.join()),
                g.length === 0 &&
                  (m.classList.remove("fadeIn"),
                  m.classList.add("fadeOut"),
                  setTimeout(function () {
                    m.remove();
                  }, 700));
            }
          })(),
          c.transitionIn && n.classList.remove(c.transitionIn),
          c.transitionInMobile && n.classList.remove(c.transitionInMobile),
          O || window.innerWidth <= E
            ? c.transitionOutMobile && n.classList.add(c.transitionOutMobile)
            : c.transitionOut && n.classList.add(c.transitionOut);
        var h = n.parentNode.offsetHeight;
        (n.parentNode.style.height = h + "px"),
          (n.style.pointerEvents = "none"),
          (!O || window.innerWidth > E) &&
            (n.parentNode.style.transitionDelay = "0.2s");
        try {
          var r = new CustomEvent(f + "-closing", {
            detail: c,
            bubbles: !0,
            cancelable: !0,
          });
          document.dispatchEvent(r);
        } catch (m) {
          console.warn(m);
        }
        setTimeout(function () {
          (n.parentNode.style.height = "0px"),
            (n.parentNode.style.overflow = ""),
            setTimeout(function () {
              delete i.children[c.ref], n.parentNode.remove();
              try {
                var m = new CustomEvent(f + "-closed", {
                  detail: c,
                  bubbles: !0,
                  cancelable: !0,
                });
                document.dispatchEvent(m);
              } catch (g) {
                console.warn(g);
              }
              typeof c.onClosed < "u" && c.onClosed.apply(null, [c, n, e]);
            }, 1e3);
        }, 200),
          typeof c.onClosing < "u" && c.onClosing.apply(null, [c, n, e]);
      }),
      (w.show = function (a) {
        var n = this,
          e = l(v, a || {});
        if (
          ((e = l(S, e)),
          (e.time = {}),
          e.id === null && (e.id = o(e.title + e.message + e.color)),
          e.displayMode === 1 || e.displayMode == "once")
        )
          try {
            if (document.querySelectorAll("." + f + "#" + e.id).length > 0)
              return !1;
          } catch {
            console.warn(
              "[" +
                f +
                "] Could not find an element with this selector: #" +
                e.id +
                ". Try to set an valid id."
            );
          }
        if (e.displayMode === 2 || e.displayMode == "replace")
          try {
            p(document.querySelectorAll("." + f + "#" + e.id), function (r, m) {
              n.hide(e, r, "replaced");
            });
          } catch {
            console.warn(
              "[" +
                f +
                "] Could not find an element with this selector: #" +
                e.id +
                ". Try to set an valid id."
            );
          }
        (e.ref = new Date().getTime() + Math.floor(Math.random() * 1e7 + 1)),
          (w.children[e.ref] = e);
        var i = {
          body: document.querySelector("body"),
          overlay: document.createElement("div"),
          toast: document.createElement("div"),
          toastBody: document.createElement("div"),
          toastTexts: document.createElement("div"),
          toastCapsule: document.createElement("div"),
          cover: document.createElement("div"),
          buttons: document.createElement("div"),
          inputs: document.createElement("div"),
          icon: e.iconUrl
            ? document.createElement("img")
            : document.createElement("i"),
          wrapper: null,
        };
        i.toast.setAttribute("data-iziToast-ref", e.ref),
          i.toast.appendChild(i.toastBody),
          i.toastCapsule.appendChild(i.toast),
          (function () {
            if (
              (i.toast.classList.add(f),
              i.toast.classList.add(f + "-opening"),
              i.toastCapsule.classList.add(f + "-capsule"),
              i.toastBody.classList.add(f + "-body"),
              i.toastTexts.classList.add(f + "-texts"),
              O || window.innerWidth <= E
                ? e.transitionInMobile &&
                  i.toast.classList.add(e.transitionInMobile)
                : e.transitionIn && i.toast.classList.add(e.transitionIn),
              e.class)
            ) {
              var r = e.class.split(" ");
              p(r, function (m, g) {
                i.toast.classList.add(m);
              });
            }
            e.id && (i.toast.id = e.id),
              e.rtl &&
                (i.toast.classList.add(f + "-rtl"),
                i.toast.setAttribute("dir", "rtl")),
              e.layout > 1 && i.toast.classList.add(f + "-layout" + e.layout),
              e.balloon && i.toast.classList.add(f + "-balloon"),
              e.maxWidth &&
                (isNaN(e.maxWidth)
                  ? (i.toast.style.maxWidth = e.maxWidth)
                  : (i.toast.style.maxWidth = e.maxWidth + "px")),
              (e.theme !== "" || e.theme !== "light") &&
                i.toast.classList.add(f + "-theme-" + e.theme),
              e.color &&
                (s(e.color)
                  ? (i.toast.style.background = e.color)
                  : i.toast.classList.add(f + "-color-" + e.color)),
              e.backgroundColor &&
                ((i.toast.style.background = e.backgroundColor),
                e.balloon && (i.toast.style.borderColor = e.backgroundColor));
          })(),
          (function () {
            e.image &&
              (i.cover.classList.add(f + "-cover"),
              (i.cover.style.width = e.imageWidth + "px"),
              d(e.image.replace(/ /g, ""))
                ? (i.cover.style.backgroundImage =
                    "url(data:image/png;base64," +
                    e.image.replace(/ /g, "") +
                    ")")
                : (i.cover.style.backgroundImage = "url(" + e.image + ")"),
              e.rtl
                ? (i.toastBody.style.marginRight = e.imageWidth + 10 + "px")
                : (i.toastBody.style.marginLeft = e.imageWidth + 10 + "px"),
              i.toast.appendChild(i.cover));
          })(),
          (function () {
            e.close
              ? ((i.buttonClose = document.createElement("button")),
                (i.buttonClose.type = "button"),
                i.buttonClose.classList.add(f + "-close"),
                i.buttonClose.addEventListener("click", function (r) {
                  r.target, n.hide(e, i.toast, "button");
                }),
                i.toast.appendChild(i.buttonClose))
              : e.rtl
              ? (i.toast.style.paddingLeft = "18px")
              : (i.toast.style.paddingRight = "18px");
          })(),
          (function () {
            e.progressBar &&
              ((i.progressBar = document.createElement("div")),
              (i.progressBarDiv = document.createElement("div")),
              i.progressBar.classList.add(f + "-progressbar"),
              (i.progressBarDiv.style.background = e.progressBarColor),
              i.progressBar.appendChild(i.progressBarDiv),
              i.toast.appendChild(i.progressBar)),
              e.timeout &&
                (e.pauseOnHover &&
                  !e.resetOnHover &&
                  (i.toast.addEventListener("mouseenter", function (r) {
                    n.progress(e, i.toast).pause();
                  }),
                  i.toast.addEventListener("mouseleave", function (r) {
                    n.progress(e, i.toast).resume();
                  })),
                e.resetOnHover &&
                  (i.toast.addEventListener("mouseenter", function (r) {
                    n.progress(e, i.toast).reset();
                  }),
                  i.toast.addEventListener("mouseleave", function (r) {
                    n.progress(e, i.toast).start();
                  })));
          })(),
          (function () {
            e.iconUrl
              ? (i.icon.setAttribute("class", f + "-icon"),
                i.icon.setAttribute("src", e.iconUrl))
              : e.icon &&
                (i.icon.setAttribute("class", f + "-icon " + e.icon),
                e.iconText &&
                  i.icon.appendChild(document.createTextNode(e.iconText)),
                e.iconColor && (i.icon.style.color = e.iconColor)),
              (e.icon || e.iconUrl) &&
                (e.rtl
                  ? (i.toastBody.style.paddingRight = "33px")
                  : (i.toastBody.style.paddingLeft = "33px"),
                i.toastBody.appendChild(i.icon));
          })(),
          (function () {
            e.title.length > 0 &&
              ((i.strong = document.createElement("strong")),
              i.strong.classList.add(f + "-title"),
              i.strong.appendChild(t(e.title)),
              i.toastTexts.appendChild(i.strong),
              e.titleColor && (i.strong.style.color = e.titleColor),
              e.titleSize &&
                (isNaN(e.titleSize)
                  ? (i.strong.style.fontSize = e.titleSize)
                  : (i.strong.style.fontSize = e.titleSize + "px")),
              e.titleLineHeight &&
                (isNaN(e.titleSize)
                  ? (i.strong.style.lineHeight = e.titleLineHeight)
                  : (i.strong.style.lineHeight = e.titleLineHeight + "px"))),
              e.message.length > 0 &&
                ((i.p = document.createElement("p")),
                i.p.classList.add(f + "-message"),
                i.p.appendChild(t(e.message)),
                i.toastTexts.appendChild(i.p),
                e.messageColor && (i.p.style.color = e.messageColor),
                e.messageSize &&
                  (isNaN(e.titleSize)
                    ? (i.p.style.fontSize = e.messageSize)
                    : (i.p.style.fontSize = e.messageSize + "px")),
                e.messageLineHeight &&
                  (isNaN(e.titleSize)
                    ? (i.p.style.lineHeight = e.messageLineHeight)
                    : (i.p.style.lineHeight = e.messageLineHeight + "px"))),
              e.title.length > 0 &&
                e.message.length > 0 &&
                (e.rtl
                  ? (i.strong.style.marginLeft = "10px")
                  : e.layout !== 2 &&
                    !e.rtl &&
                    (i.strong.style.marginRight = "10px"));
          })(),
          i.toastBody.appendChild(i.toastTexts);
        var c;
        (function () {
          e.inputs.length > 0 &&
            (i.inputs.classList.add(f + "-inputs"),
            p(e.inputs, function (r, m) {
              i.inputs.appendChild(t(r[0])),
                (c = i.inputs.childNodes),
                c[m].classList.add(f + "-inputs-child"),
                r[3] &&
                  setTimeout(function () {
                    c[m].focus();
                  }, 300),
                c[m].addEventListener(r[1], function (g) {
                  var C = r[2];
                  return C(n, i.toast, this, g);
                });
            }),
            i.toastBody.appendChild(i.inputs));
        })(),
          (function () {
            e.buttons.length > 0 &&
              (i.buttons.classList.add(f + "-buttons"),
              p(e.buttons, function (r, m) {
                i.buttons.appendChild(t(r[0]));
                var g = i.buttons.childNodes;
                g[m].classList.add(f + "-buttons-child"),
                  r[2] &&
                    setTimeout(function () {
                      g[m].focus();
                    }, 300),
                  g[m].addEventListener("click", function (C) {
                    C.preventDefault();
                    var I = r[1];
                    return I(n, i.toast, this, C, c);
                  });
              })),
              i.toastBody.appendChild(i.buttons);
          })(),
          e.message.length > 0 &&
            (e.inputs.length > 0 || e.buttons.length > 0) &&
            (i.p.style.marginBottom = "0"),
          (e.inputs.length > 0 || e.buttons.length > 0) &&
            (e.rtl
              ? (i.toastTexts.style.marginLeft = "10px")
              : (i.toastTexts.style.marginRight = "10px"),
            e.inputs.length > 0 &&
              e.buttons.length > 0 &&
              (e.rtl
                ? (i.inputs.style.marginLeft = "8px")
                : (i.inputs.style.marginRight = "8px"))),
          (function () {
            (i.toastCapsule.style.visibility = "hidden"),
              setTimeout(function () {
                var r = i.toast.offsetHeight,
                  m = i.toast.currentStyle || window.getComputedStyle(i.toast),
                  g = m.marginTop;
                (g = g.split("px")), (g = parseInt(g[0]));
                var C = m.marginBottom;
                (C = C.split("px")),
                  (C = parseInt(C[0])),
                  (i.toastCapsule.style.visibility = ""),
                  (i.toastCapsule.style.height = r + C + g + "px"),
                  setTimeout(function () {
                    (i.toastCapsule.style.height = "auto"),
                      e.target && (i.toastCapsule.style.overflow = "visible");
                  }, 500),
                  e.timeout && n.progress(e, i.toast).start();
              }, 100);
          })(),
          (function () {
            var r = e.position;
            if (e.target)
              (i.wrapper = document.querySelector(e.target)),
                i.wrapper.classList.add(f + "-target"),
                e.targetFirst
                  ? i.wrapper.insertBefore(i.toastCapsule, i.wrapper.firstChild)
                  : i.wrapper.appendChild(i.toastCapsule);
            else {
              if (X.indexOf(e.position) == -1) {
                console.warn(
                  "[" +
                    f +
                    `] Incorrect position.
It can be › ` +
                    X
                );
                return;
              }
              O || window.innerWidth <= E
                ? e.position == "bottomLeft" ||
                  e.position == "bottomRight" ||
                  e.position == "bottomCenter"
                  ? (r = f + "-wrapper-bottomCenter")
                  : e.position == "topLeft" ||
                    e.position == "topRight" ||
                    e.position == "topCenter"
                  ? (r = f + "-wrapper-topCenter")
                  : (r = f + "-wrapper-center")
                : (r = f + "-wrapper-" + r),
                (i.wrapper = document.querySelector("." + f + "-wrapper." + r)),
                i.wrapper ||
                  ((i.wrapper = document.createElement("div")),
                  i.wrapper.classList.add(f + "-wrapper"),
                  i.wrapper.classList.add(r),
                  document.body.appendChild(i.wrapper)),
                e.position == "topLeft" ||
                e.position == "topCenter" ||
                e.position == "topRight"
                  ? i.wrapper.insertBefore(i.toastCapsule, i.wrapper.firstChild)
                  : i.wrapper.appendChild(i.toastCapsule);
            }
            isNaN(e.zindex)
              ? console.warn("[" + f + "] Invalid zIndex.")
              : (i.wrapper.style.zIndex = e.zindex);
          })(),
          (function () {
            e.overlay &&
              (document.querySelector("." + f + "-overlay.fadeIn") !== null
                ? ((i.overlay = document.querySelector("." + f + "-overlay")),
                  i.overlay.setAttribute(
                    "data-iziToast-ref",
                    i.overlay.getAttribute("data-iziToast-ref") + "," + e.ref
                  ),
                  !isNaN(e.zindex) &&
                    e.zindex !== null &&
                    (i.overlay.style.zIndex = e.zindex - 1))
                : (i.overlay.classList.add(f + "-overlay"),
                  i.overlay.classList.add("fadeIn"),
                  (i.overlay.style.background = e.overlayColor),
                  i.overlay.setAttribute("data-iziToast-ref", e.ref),
                  !isNaN(e.zindex) &&
                    e.zindex !== null &&
                    (i.overlay.style.zIndex = e.zindex - 1),
                  document.querySelector("body").appendChild(i.overlay)),
              e.overlayClose
                ? (i.overlay.removeEventListener("click", {}),
                  i.overlay.addEventListener("click", function (r) {
                    n.hide(e, i.toast, "overlay");
                  }))
                : i.overlay.removeEventListener("click", {}));
          })(),
          (function () {
            if (e.animateInside) {
              i.toast.classList.add(f + "-animateInside");
              var r = [200, 100, 300];
              (e.transitionIn == "bounceInLeft" ||
                e.transitionIn == "bounceInRight") &&
                (r = [400, 200, 400]),
                e.title.length > 0 &&
                  setTimeout(function () {
                    i.strong.classList.add("slideIn");
                  }, r[0]),
                e.message.length > 0 &&
                  setTimeout(function () {
                    i.p.classList.add("slideIn");
                  }, r[1]),
                (e.icon || e.iconUrl) &&
                  setTimeout(function () {
                    i.icon.classList.add("revealIn");
                  }, r[2]);
              var m = 150;
              e.buttons.length > 0 &&
                i.buttons &&
                setTimeout(
                  function () {
                    p(i.buttons.childNodes, function (g, C) {
                      setTimeout(function () {
                        g.classList.add("revealIn");
                      }, m),
                        (m = m + 150);
                    });
                  },
                  e.inputs.length > 0 ? 150 : 0
                ),
                e.inputs.length > 0 &&
                  i.inputs &&
                  ((m = 150),
                  p(i.inputs.childNodes, function (g, C) {
                    setTimeout(function () {
                      g.classList.add("revealIn");
                    }, m),
                      (m = m + 150);
                  }));
            }
          })(),
          e.onOpening.apply(null, [e, i.toast]);
        try {
          var h = new CustomEvent(f + "-opening", {
            detail: e,
            bubbles: !0,
            cancelable: !0,
          });
          document.dispatchEvent(h);
        } catch (r) {
          console.warn(r);
        }
        setTimeout(function () {
          i.toast.classList.remove(f + "-opening"),
            i.toast.classList.add(f + "-opened");
          try {
            var r = new CustomEvent(f + "-opened", {
              detail: e,
              bubbles: !0,
              cancelable: !0,
            });
            document.dispatchEvent(r);
          } catch (m) {
            console.warn(m);
          }
          e.onOpened.apply(null, [e, i.toast]);
        }, 1e3),
          e.drag &&
            (N
              ? (i.toast.addEventListener(
                  "touchstart",
                  function (r) {
                    u.startMoving(this, n, e, r);
                  },
                  !1
                ),
                i.toast.addEventListener(
                  "touchend",
                  function (r) {
                    u.stopMoving(this, r);
                  },
                  !1
                ))
              : (i.toast.addEventListener(
                  "mousedown",
                  function (r) {
                    r.preventDefault(), u.startMoving(this, n, e, r);
                  },
                  !1
                ),
                i.toast.addEventListener(
                  "mouseup",
                  function (r) {
                    r.preventDefault(), u.stopMoving(this, r);
                  },
                  !1
                ))),
          e.closeOnEscape &&
            document.addEventListener("keyup", function (r) {
              (r = r || window.event),
                r.keyCode == 27 && n.hide(e, i.toast, "esc");
            }),
          e.closeOnClick &&
            i.toast.addEventListener("click", function (r) {
              n.hide(e, i.toast, "toast");
            }),
          (n.toast = i.toast);
      }),
      w
    );
  });
})(z);
var B = z.exports;
const q = R(B);
var W = {};
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.2
*/ (function (b) {
  Object.defineProperty(b, "__esModule", { value: !0 }), (b.default = void 0);
  function D(p) {
    "@babel/helpers - typeof";
    return (
      (D =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (l) {
              return typeof l;
            }
          : function (l) {
              return l &&
                typeof Symbol == "function" &&
                l.constructor === Symbol &&
                l !== Symbol.prototype
                ? "symbol"
                : typeof l;
            }),
      D(p)
    );
  }
  function y(p, l) {
    var t = (typeof Symbol < "u" && p[Symbol.iterator]) || p["@@iterator"];
    if (!t) {
      if (
        Array.isArray(p) ||
        (t = O(p)) ||
        (l && p && typeof p.length == "number")
      ) {
        t && (p = t);
        var o = 0,
          s = function () {};
        return {
          s,
          n: function () {
            return o >= p.length ? { done: !0 } : { done: !1, value: p[o++] };
          },
          e: function (e) {
            throw e;
          },
          f: s,
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var d = !0,
      u = !1,
      a;
    return {
      s: function () {
        t = t.call(p);
      },
      n: function () {
        var e = t.next();
        return (d = e.done), e;
      },
      e: function (e) {
        (u = !0), (a = e);
      },
      f: function () {
        try {
          !d && t.return != null && t.return();
        } finally {
          if (u) throw a;
        }
      },
    };
  }
  function w(p) {
    return M(p) || P(p) || O(p) || f();
  }
  function f() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function O(p, l) {
    if (p) {
      if (typeof p == "string") return N(p, l);
      var t = Object.prototype.toString.call(p).slice(8, -1);
      if (
        (t === "Object" && p.constructor && (t = p.constructor.name),
        t === "Map" || t === "Set")
      )
        return Array.from(p);
      if (
        t === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return N(p, l);
    }
  }
  function P(p) {
    if (
      (typeof Symbol < "u" && p[Symbol.iterator] != null) ||
      p["@@iterator"] != null
    )
      return Array.from(p);
  }
  function M(p) {
    if (Array.isArray(p)) return N(p);
  }
  function N(p, l) {
    (l == null || l > p.length) && (l = p.length);
    for (var t = 0, o = new Array(l); t < l; t++) o[t] = p[t];
    return o;
  }
  function X(p, l) {
    if (!(p instanceof l))
      throw new TypeError("Cannot call a class as a function");
  }
  function Y(p, l) {
    for (var t = 0; t < l.length; t++) {
      var o = l[t];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        "value" in o && (o.writable = !0),
        Object.defineProperty(p, o.key, o);
    }
  }
  function E(p, l, t) {
    return (
      l && Y(p.prototype, l),
      t && Y(p, t),
      Object.defineProperty(p, "prototype", { writable: !1 }),
      p
    );
  }
  function v(p, l, t) {
    return (
      l in p
        ? Object.defineProperty(p, l, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (p[l] = t),
      p
    );
  }
  var S = (function () {
      function p(l, t) {
        var o = this;
        if (
          (X(this, p),
          v(this, "defaultOptions", {
            sourceAttr: "href",
            overlay: !0,
            overlayOpacity: 0.7,
            spinner: !0,
            nav: !0,
            navText: ["&lsaquo;", "&rsaquo;"],
            captions: !0,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            captionHTML: !0,
            close: !0,
            closeText: "&times;",
            swipeClose: !0,
            showCounter: !0,
            fileExt: "png|jpg|jpeg|gif|webp",
            animationSlide: !0,
            animationSpeed: 250,
            preloading: !0,
            enableKeyboard: !0,
            loop: !0,
            rel: !1,
            docClose: !0,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: 0.8,
            heightRatio: 0.9,
            scaleImageToRatio: !1,
            disableRightClick: !1,
            disableScroll: !0,
            alertError: !0,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: !1,
            history: !0,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: "has-lightbox",
            rtl: !1,
            fixedClass: "sl-fixed",
            fadeSpeed: 300,
            uniqueImages: !0,
            focus: !0,
            scrollZoom: !0,
            scrollZoomFactor: 0.5,
            download: !1,
          }),
          v(this, "transitionPrefix", void 0),
          v(this, "isPassiveEventsSupported", void 0),
          v(this, "transitionCapable", !1),
          v(this, "isTouchDevice", "ontouchstart" in window),
          v(
            this,
            "isAppleDevice",
            /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
          ),
          v(this, "initialLocationHash", void 0),
          v(this, "pushStateSupport", "pushState" in history),
          v(this, "isOpen", !1),
          v(this, "isAnimating", !1),
          v(this, "isClosing", !1),
          v(this, "isFadeIn", !1),
          v(this, "urlChangedOnce", !1),
          v(this, "hashReseted", !1),
          v(this, "historyHasChanges", !1),
          v(this, "historyUpdateTimeout", null),
          v(this, "currentImage", void 0),
          v(this, "eventNamespace", "simplelightbox"),
          v(this, "domNodes", {}),
          v(this, "loadedImages", []),
          v(this, "initialImageIndex", 0),
          v(this, "currentImageIndex", 0),
          v(this, "initialSelector", null),
          v(this, "globalScrollbarWidth", 0),
          v(this, "controlCoordinates", {
            swipeDiff: 0,
            swipeYDiff: 0,
            swipeStart: 0,
            swipeEnd: 0,
            swipeYStart: 0,
            swipeYEnd: 0,
            mousedown: !1,
            imageLeft: 0,
            zoomed: !1,
            containerHeight: 0,
            containerWidth: 0,
            containerOffsetX: 0,
            containerOffsetY: 0,
            imgHeight: 0,
            imgWidth: 0,
            capture: !1,
            initialOffsetX: 0,
            initialOffsetY: 0,
            initialPointerOffsetX: 0,
            initialPointerOffsetY: 0,
            initialPointerOffsetX2: 0,
            initialPointerOffsetY2: 0,
            initialScale: 1,
            initialPinchDistance: 0,
            pointerOffsetX: 0,
            pointerOffsetY: 0,
            pointerOffsetX2: 0,
            pointerOffsetY2: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
            targetScale: 0,
            pinchOffsetX: 0,
            pinchOffsetY: 0,
            limitOffsetX: 0,
            limitOffsetY: 0,
            scaleDifference: 0,
            targetPinchDistance: 0,
            touchCount: 0,
            doubleTapped: !1,
            touchmoveCount: 0,
          }),
          (this.options = Object.assign(this.defaultOptions, t)),
          (this.isPassiveEventsSupported = this.checkPassiveEventsSupport()),
          typeof l == "string"
            ? ((this.initialSelector = l),
              (this.elements = Array.from(document.querySelectorAll(l))))
            : (this.elements =
                typeof l.length < "u" && l.length > 0 ? Array.from(l) : [l]),
          (this.relatedElements = []),
          (this.transitionPrefix = this.calculateTransitionPrefix()),
          (this.transitionCapable = this.transitionPrefix !== !1),
          (this.initialLocationHash = this.hash),
          this.options.rel &&
            (this.elements = this.getRelated(this.options.rel)),
          this.options.uniqueImages)
        ) {
          var s = [];
          this.elements = Array.from(this.elements).filter(function (d) {
            var u = d.getAttribute(o.options.sourceAttr);
            return s.indexOf(u) === -1 ? (s.push(u), !0) : !1;
          });
        }
        this.createDomNodes(),
          this.options.close &&
            this.domNodes.wrapper.appendChild(this.domNodes.closeButton),
          this.options.nav &&
            this.domNodes.wrapper.appendChild(this.domNodes.navigation),
          this.options.spinner &&
            this.domNodes.wrapper.appendChild(this.domNodes.spinner),
          this.addEventListener(
            this.elements,
            "click." + this.eventNamespace,
            function (d) {
              if (o.isValidLink(d.currentTarget)) {
                if ((d.preventDefault(), o.isAnimating)) return !1;
                (o.initialImageIndex = o.elements.indexOf(d.currentTarget)),
                  o.openImage(d.currentTarget);
              }
            }
          ),
          this.options.docClose &&
            this.addEventListener(
              this.domNodes.wrapper,
              [
                "click." + this.eventNamespace,
                "touchstart." + this.eventNamespace,
              ],
              function (d) {
                o.isOpen && d.target === d.currentTarget && o.close();
              }
            ),
          this.options.disableRightClick &&
            this.addEventListener(
              document.body,
              "contextmenu." + this.eventNamespace,
              function (d) {
                d.target.parentElement.classList.contains("sl-image") &&
                  d.preventDefault();
              }
            ),
          this.options.enableKeyboard &&
            this.addEventListener(
              document.body,
              "keyup." + this.eventNamespace,
              this.throttle(function (d) {
                if (
                  ((o.controlCoordinates.swipeDiff = 0),
                  o.isAnimating && d.key === "Escape")
                ) {
                  o.currentImage.setAttribute("src", ""),
                    (o.isAnimating = !1),
                    o.close();
                  return;
                }
                o.isOpen &&
                  (d.preventDefault(),
                  d.key === "Escape" && o.close(),
                  !o.isAnimating &&
                    ["ArrowLeft", "ArrowRight"].indexOf(d.key) > -1 &&
                    o.loadImage(d.key === "ArrowRight" ? 1 : -1));
              }, this.options.throttleInterval)
            ),
          this.addEvents();
      }
      return (
        E(p, [
          {
            key: "checkPassiveEventsSupport",
            value: function () {
              var t = !1;
              try {
                var o = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("testPassive", null, o),
                  window.removeEventListener("testPassive", null, o);
              } catch {}
              return t;
            },
          },
          {
            key: "getCaptionElement",
            value: function (t) {
              if (this.options.captionSelector.startsWith("+")) {
                var o = this.options.captionSelector
                    .replace(/^\+/, "")
                    .trimStart(),
                  s = t.nextElementSibling;
                return s && s.matches(o) ? s : !1;
              } else if (this.options.captionSelector.startsWith(">")) {
                var d = this.options.captionSelector
                  .replace(/^>/, "")
                  .trimStart();
                return t.querySelector(d);
              } else return t.querySelector(this.options.captionSelector);
            },
          },
          {
            key: "generateQuerySelector",
            value: function (t) {
              var o = t.tagName,
                s = t.id,
                d = t.className,
                u = t.parentNode;
              if (o === "HTML") return "HTML";
              var a = o;
              if (((a += s !== "" ? "#".concat(s) : ""), d))
                for (var n = d.trim().split(/\s/), e = 0; e < n.length; e++)
                  a += ".".concat(n[e]);
              for (
                var i = 1, c = t;
                c.previousElementSibling;
                c = c.previousElementSibling
              )
                i += 1;
              return (
                (a += ":nth-child(".concat(i, ")")),
                "".concat(this.generateQuerySelector(u), " > ").concat(a)
              );
            },
          },
          {
            key: "createDomNodes",
            value: function () {
              if (
                ((this.domNodes.overlay = document.createElement("div")),
                this.domNodes.overlay.classList.add("sl-overlay"),
                (this.domNodes.overlay.dataset.opacityTarget =
                  this.options.overlayOpacity),
                (this.domNodes.closeButton = document.createElement("button")),
                this.domNodes.closeButton.classList.add("sl-close"),
                (this.domNodes.closeButton.innerHTML = this.options.closeText),
                (this.domNodes.spinner = document.createElement("div")),
                this.domNodes.spinner.classList.add("sl-spinner"),
                (this.domNodes.spinner.innerHTML = "<div></div>"),
                (this.domNodes.navigation = document.createElement("div")),
                this.domNodes.navigation.classList.add("sl-navigation"),
                (this.domNodes.navigation.innerHTML = '<button class="sl-prev">'
                  .concat(
                    this.options.navText[0],
                    '</button><button class="sl-next">'
                  )
                  .concat(this.options.navText[1], "</button>")),
                (this.domNodes.counter = document.createElement("div")),
                this.domNodes.counter.classList.add("sl-counter"),
                (this.domNodes.counter.innerHTML =
                  '<span class="sl-current"></span>/<span class="sl-total"></span>'),
                (this.domNodes.download = document.createElement("div")),
                this.domNodes.download.classList.add("sl-download"),
                (this.domNodes.downloadLink = document.createElement("a")),
                this.domNodes.downloadLink.setAttribute("download", ""),
                (this.domNodes.downloadLink.textContent =
                  this.options.download),
                this.domNodes.download.appendChild(this.domNodes.downloadLink),
                (this.domNodes.caption = document.createElement("div")),
                this.domNodes.caption.classList.add(
                  "sl-caption",
                  "pos-" + this.options.captionPosition
                ),
                this.options.captionClass)
              ) {
                var t,
                  o = this.options.captionClass.split(/[\s,]+/);
                (t = this.domNodes.caption.classList).add.apply(t, w(o));
              }
              (this.domNodes.image = document.createElement("div")),
                this.domNodes.image.classList.add("sl-image"),
                (this.domNodes.wrapper = document.createElement("div")),
                this.domNodes.wrapper.classList.add("sl-wrapper"),
                this.domNodes.wrapper.setAttribute("tabindex", -1),
                this.domNodes.wrapper.setAttribute("role", "dialog"),
                this.domNodes.wrapper.setAttribute("aria-hidden", !1),
                this.options.className &&
                  this.domNodes.wrapper.classList.add(this.options.className),
                this.options.rtl &&
                  this.domNodes.wrapper.classList.add("sl-dir-rtl");
            },
          },
          {
            key: "throttle",
            value: function (t, o) {
              var s;
              return function () {
                s ||
                  (t.apply(this, arguments),
                  (s = !0),
                  setTimeout(function () {
                    return (s = !1);
                  }, o));
              };
            },
          },
          {
            key: "isValidLink",
            value: function (t) {
              return (
                !this.options.fileExt ||
                (t.getAttribute(this.options.sourceAttr) &&
                  new RegExp(
                    "(" + this.options.fileExt + ")($|\\?.*$)",
                    "i"
                  ).test(t.getAttribute(this.options.sourceAttr)))
              );
            },
          },
          {
            key: "calculateTransitionPrefix",
            value: function () {
              var t = (document.body || document.documentElement).style;
              return "transition" in t
                ? ""
                : "WebkitTransition" in t
                ? "-webkit-"
                : "MozTransition" in t
                ? "-moz-"
                : "OTransition" in t
                ? "-o"
                : !1;
            },
          },
          {
            key: "getScrollbarWidth",
            value: function () {
              var t = 0,
                o = document.createElement("div");
              return (
                o.classList.add("sl-scrollbar-measure"),
                document.body.appendChild(o),
                (t = o.offsetWidth - o.clientWidth),
                document.body.removeChild(o),
                t
              );
            },
          },
          {
            key: "toggleScrollbar",
            value: function (t) {
              var o = 0,
                s = [].slice.call(
                  document.querySelectorAll("." + this.options.fixedClass)
                );
              if (t === "hide") {
                var d = window.innerWidth;
                if (!d) {
                  var u = document.documentElement.getBoundingClientRect();
                  d = u.right - Math.abs(u.left);
                }
                if (document.body.clientWidth < d || this.isAppleDevice) {
                  var a = parseInt(
                    window.getComputedStyle(document.body).paddingRight || 0,
                    10
                  );
                  (o = this.getScrollbarWidth()),
                    (document.body.dataset.originalPaddingRight = a),
                    (o > 0 || (o == 0 && this.isAppleDevice)) &&
                      (document.body.classList.add("hidden-scroll"),
                      (document.body.style.paddingRight = a + o + "px"),
                      s.forEach(function (n) {
                        var e = n.style.paddingRight,
                          i = window.getComputedStyle(n)["padding-right"];
                        (n.dataset.originalPaddingRight = e),
                          (n.style.paddingRight = "".concat(
                            parseFloat(i) + o,
                            "px"
                          ));
                      }));
                }
              } else
                document.body.classList.remove("hidden-scroll"),
                  (document.body.style.paddingRight =
                    document.body.dataset.originalPaddingRight + "px"),
                  s.forEach(function (n) {
                    var e = n.dataset.originalPaddingRight;
                    typeof e < "u" && (n.style.paddingRight = e);
                  });
              return o;
            },
          },
          {
            key: "close",
            value: function () {
              var t = this;
              if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
              this.isClosing = !0;
              var o = this.relatedElements[this.currentImageIndex];
              o.dispatchEvent(new Event("close.simplelightbox")),
                this.options.history &&
                  ((this.historyHasChanges = !1),
                  this.hashReseted || this.resetHash()),
                this.removeEventListener(
                  document,
                  "focusin." + this.eventNamespace
                ),
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeOut(
                  document.querySelectorAll(
                    ".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"
                  ),
                  this.options.fadeSpeed,
                  function () {
                    t.options.disableScroll && t.toggleScrollbar("show"),
                      t.options.htmlClass &&
                        t.options.htmlClass !== "" &&
                        document
                          .querySelector("html")
                          .classList.remove(t.options.htmlClass),
                      document.body.removeChild(t.domNodes.wrapper),
                      t.options.overlay &&
                        document.body.removeChild(t.domNodes.overlay),
                      (t.domNodes.additionalHtml = null),
                      (t.domNodes.download = null),
                      o.dispatchEvent(new Event("closed.simplelightbox")),
                      (t.isClosing = !1);
                  }
                ),
                (this.currentImage = null),
                (this.isOpen = !1),
                (this.isAnimating = !1);
              for (var s in this.controlCoordinates)
                this.controlCoordinates[s] = 0;
              (this.controlCoordinates.mousedown = !1),
                (this.controlCoordinates.zoomed = !1),
                (this.controlCoordinates.capture = !1),
                (this.controlCoordinates.initialScale = this.minMax(
                  1,
                  1,
                  this.options.maxZoom
                )),
                (this.controlCoordinates.doubleTapped = !1);
            },
          },
          {
            key: "hash",
            get: function () {
              return window.location.hash.substring(1);
            },
          },
          {
            key: "preload",
            value: function () {
              var t = this,
                o = this.currentImageIndex,
                s = this.relatedElements.length,
                d = o + 1 < 0 ? s - 1 : o + 1 >= s - 1 ? 0 : o + 1,
                u = o - 1 < 0 ? s - 1 : o - 1 >= s - 1 ? 0 : o - 1,
                a = new Image(),
                n = new Image();
              a.addEventListener("load", function (e) {
                var i = e.target.getAttribute("src");
                t.loadedImages.indexOf(i) === -1 && t.loadedImages.push(i),
                  t.relatedElements[o].dispatchEvent(
                    new Event("nextImageLoaded." + t.eventNamespace)
                  );
              }),
                a.setAttribute(
                  "src",
                  this.relatedElements[d].getAttribute(this.options.sourceAttr)
                ),
                n.addEventListener("load", function (e) {
                  var i = e.target.getAttribute("src");
                  t.loadedImages.indexOf(i) === -1 && t.loadedImages.push(i),
                    t.relatedElements[o].dispatchEvent(
                      new Event("prevImageLoaded." + t.eventNamespace)
                    );
                }),
                n.setAttribute(
                  "src",
                  this.relatedElements[u].getAttribute(this.options.sourceAttr)
                );
            },
          },
          {
            key: "loadImage",
            value: function (t) {
              var o = this,
                s = t;
              this.options.rtl && (t = -t),
                this.relatedElements[this.currentImageIndex].dispatchEvent(
                  new Event("change." + this.eventNamespace)
                ),
                this.relatedElements[this.currentImageIndex].dispatchEvent(
                  new Event(
                    (t === 1 ? "next" : "prev") + "." + this.eventNamespace
                  )
                );
              var d = this.currentImageIndex + t;
              if (
                this.isAnimating ||
                ((d < 0 || d >= this.relatedElements.length) &&
                  this.options.loop === !1)
              )
                return !1;
              (this.currentImageIndex =
                d < 0
                  ? this.relatedElements.length - 1
                  : d > this.relatedElements.length - 1
                  ? 0
                  : d),
                (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                  this.currentImageIndex + 1),
                this.options.animationSlide &&
                  this.slide(
                    this.options.animationSpeed / 1e3,
                    -100 * s - this.controlCoordinates.swipeDiff + "px"
                  ),
                this.fadeOut(
                  this.domNodes.image,
                  this.options.fadeSpeed,
                  function () {
                    (o.isAnimating = !0),
                      o.isClosing
                        ? (o.isAnimating = !1)
                        : setTimeout(function () {
                            var u = o.relatedElements[o.currentImageIndex];
                            o.currentImage &&
                              (o.currentImage.setAttribute(
                                "src",
                                u.getAttribute(o.options.sourceAttr)
                              ),
                              o.loadedImages.indexOf(
                                u.getAttribute(o.options.sourceAttr)
                              ) === -1 && o.show(o.domNodes.spinner),
                              o.domNodes.image.contains(o.domNodes.caption) &&
                                o.domNodes.image.removeChild(
                                  o.domNodes.caption
                                ),
                              o.adjustImage(s),
                              o.options.preloading && o.preload());
                          }, 100);
                  }
                );
            },
          },
          {
            key: "adjustImage",
            value: function (t) {
              var o = this;
              if (!this.currentImage) return !1;
              var s = new Image(),
                d = window.innerWidth * this.options.widthRatio,
                u = window.innerHeight * this.options.heightRatio;
              s.setAttribute("src", this.currentImage.getAttribute("src")),
                (this.currentImage.dataset.scale = 1),
                (this.currentImage.dataset.translateX = 0),
                (this.currentImage.dataset.translateY = 0),
                this.zoomPanElement(0, 0, 1),
                s.addEventListener("error", function (a) {
                  o.relatedElements[o.currentImageIndex].dispatchEvent(
                    new Event("error." + o.eventNamespace)
                  ),
                    (o.isAnimating = !1),
                    (o.isOpen = !0),
                    (o.domNodes.spinner.style.display = "none");
                  var n = t === 1 || t === -1;
                  if (o.initialImageIndex === o.currentImageIndex && n)
                    return o.close();
                  o.options.alertError && alert(o.options.alertErrorMessage),
                    o.loadImage(n ? t : 1);
                }),
                s.addEventListener("load", function (a) {
                  typeof t < "u" &&
                    (o.relatedElements[o.currentImageIndex].dispatchEvent(
                      new Event("changed." + o.eventNamespace)
                    ),
                    o.relatedElements[o.currentImageIndex].dispatchEvent(
                      new Event(
                        (t === 1 ? "nextDone" : "prevDone") +
                          "." +
                          o.eventNamespace
                      )
                    )),
                    o.options.history && o.updateURL(),
                    o.loadedImages.indexOf(
                      o.currentImage.getAttribute("src")
                    ) === -1 &&
                      o.loadedImages.push(o.currentImage.getAttribute("src"));
                  var n = a.target.width,
                    e = a.target.height;
                  if (o.options.scaleImageToRatio || n > d || e > u) {
                    var i = n / e > d / u ? n / d : e / u;
                    (n /= i), (e /= i);
                  }
                  (o.domNodes.image.style.top =
                    (window.innerHeight - e) / 2 + "px"),
                    (o.domNodes.image.style.left =
                      (window.innerWidth - n - o.globalScrollbarWidth) / 2 +
                      "px"),
                    (o.domNodes.image.style.width = n + "px"),
                    (o.domNodes.image.style.height = e + "px"),
                    (o.domNodes.spinner.style.display = "none"),
                    o.options.focus && o.forceFocus(),
                    o.fadeIn(o.currentImage, o.options.fadeSpeed, function () {
                      o.options.focus && o.domNodes.wrapper.focus();
                    }),
                    (o.isOpen = !0);
                  var c, h;
                  typeof o.options.captionSelector == "string"
                    ? (c =
                        o.options.captionSelector === "self"
                          ? o.relatedElements[o.currentImageIndex]
                          : o.getCaptionElement(
                              o.relatedElements[o.currentImageIndex]
                            ))
                    : typeof o.options.captionSelector == "function" &&
                      (c = o.options.captionSelector(
                        o.relatedElements[o.currentImageIndex]
                      )),
                    o.options.captions &&
                      c &&
                      (o.options.captionType === "data"
                        ? (h = c.dataset[o.options.captionsData])
                        : o.options.captionType === "text"
                        ? (h = c.innerHTML)
                        : (h = c.getAttribute(o.options.captionsData))),
                    o.options.loop
                      ? o.relatedElements.length === 1
                        ? o.hide(
                            o.domNodes.navigation.querySelectorAll(
                              ".sl-prev, .sl-next"
                            )
                          )
                        : o.show(
                            o.domNodes.navigation.querySelectorAll(
                              ".sl-prev, .sl-next"
                            )
                          )
                      : (o.currentImageIndex === 0 &&
                          o.hide(
                            o.domNodes.navigation.querySelector(".sl-prev")
                          ),
                        o.currentImageIndex >= o.relatedElements.length - 1 &&
                          o.hide(
                            o.domNodes.navigation.querySelector(".sl-next")
                          ),
                        o.currentImageIndex > 0 &&
                          o.show(
                            o.domNodes.navigation.querySelector(".sl-prev")
                          ),
                        o.currentImageIndex < o.relatedElements.length - 1 &&
                          o.show(
                            o.domNodes.navigation.querySelector(".sl-next")
                          )),
                    t === 1 || t === -1
                      ? (o.options.animationSlide &&
                          (o.slide(0, 100 * t + "px"),
                          setTimeout(function () {
                            o.slide(o.options.animationSpeed / 1e3, "0px");
                          }, 50)),
                        o.fadeIn(
                          o.domNodes.image,
                          o.options.fadeSpeed,
                          function () {
                            (o.isAnimating = !1), o.setCaption(h, n);
                          }
                        ))
                      : ((o.isAnimating = !1), o.setCaption(h, n)),
                    o.options.additionalHtml &&
                      !o.domNodes.additionalHtml &&
                      ((o.domNodes.additionalHtml =
                        document.createElement("div")),
                      o.domNodes.additionalHtml.classList.add(
                        "sl-additional-html"
                      ),
                      (o.domNodes.additionalHtml.innerHTML =
                        o.options.additionalHtml),
                      o.domNodes.image.appendChild(o.domNodes.additionalHtml)),
                    o.options.download &&
                      o.domNodes.downloadLink.setAttribute(
                        "href",
                        o.currentImage.getAttribute("src")
                      );
                });
            },
          },
          {
            key: "zoomPanElement",
            value: function (t, o, s) {
              this.currentImage.style[this.transitionPrefix + "transform"] =
                "translate(" + t + "," + o + ") scale(" + s + ")";
            },
          },
          {
            key: "minMax",
            value: function (t, o, s) {
              return t < o ? o : t > s ? s : t;
            },
          },
          {
            key: "setZoomData",
            value: function (t, o, s) {
              (this.currentImage.dataset.scale = t),
                (this.currentImage.dataset.translateX = o),
                (this.currentImage.dataset.translateY = s);
            },
          },
          {
            key: "hashchangeHandler",
            value: function () {
              this.isOpen &&
                this.hash === this.initialLocationHash &&
                ((this.hashReseted = !0), this.close());
            },
          },
          {
            key: "addEvents",
            value: function () {
              var t = this;
              if (
                (this.addEventListener(
                  window,
                  "resize." + this.eventNamespace,
                  function (s) {
                    t.isOpen && t.adjustImage();
                  }
                ),
                this.addEventListener(
                  this.domNodes.closeButton,
                  [
                    "click." + this.eventNamespace,
                    "touchstart." + this.eventNamespace,
                  ],
                  this.close.bind(this)
                ),
                this.options.history &&
                  setTimeout(function () {
                    t.addEventListener(
                      window,
                      "hashchange." + t.eventNamespace,
                      function (s) {
                        t.isOpen && t.hashchangeHandler();
                      }
                    );
                  }, 40),
                this.addEventListener(
                  this.domNodes.navigation.getElementsByTagName("button"),
                  "click." + this.eventNamespace,
                  function (s) {
                    if (!s.currentTarget.tagName.match(/button/i)) return !0;
                    s.preventDefault(),
                      (t.controlCoordinates.swipeDiff = 0),
                      t.loadImage(
                        s.currentTarget.classList.contains("sl-next") ? 1 : -1
                      );
                  }
                ),
                this.options.scrollZoom)
              ) {
                var o = 1;
                this.addEventListener(
                  this.domNodes.image,
                  ["mousewheel", "DOMMouseScroll"],
                  function (s) {
                    if (
                      t.controlCoordinates.mousedown ||
                      t.isAnimating ||
                      t.isClosing ||
                      !t.isOpen
                    )
                      return !0;
                    t.controlCoordinates.containerHeight == 0 &&
                      ((t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      )));
                    var d = s.delta || s.wheelDelta;
                    d === void 0 && (d = s.detail),
                      (d = Math.max(-1, Math.min(1, d))),
                      (o += d * t.options.scrollZoomFactor * o),
                      (o = Math.max(1, Math.min(t.options.maxZoom, o))),
                      (t.controlCoordinates.targetScale = o);
                    var u =
                      document.documentElement.scrollTop ||
                      document.body.scrollTop;
                    (t.controlCoordinates.pinchOffsetX = s.pageX),
                      (t.controlCoordinates.pinchOffsetY = s.pageY - u || 0),
                      (t.controlCoordinates.limitOffsetX =
                        (t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerWidth) /
                        2),
                      (t.controlCoordinates.limitOffsetY =
                        (t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale -
                          t.controlCoordinates.containerHeight) /
                        2),
                      (t.controlCoordinates.scaleDifference =
                        t.controlCoordinates.targetScale -
                        t.controlCoordinates.initialScale),
                      (t.controlCoordinates.targetOffsetX =
                        t.controlCoordinates.imgWidth *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerWidth
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.initialOffsetX -
                                ((t.controlCoordinates.pinchOffsetX -
                                  t.controlCoordinates.containerOffsetX -
                                  t.controlCoordinates.containerWidth / 2 -
                                  t.controlCoordinates.initialOffsetX) /
                                  (t.controlCoordinates.targetScale -
                                    t.controlCoordinates.scaleDifference)) *
                                  t.controlCoordinates.scaleDifference,
                              t.controlCoordinates.limitOffsetX * -1,
                              t.controlCoordinates.limitOffsetX
                            )),
                      (t.controlCoordinates.targetOffsetY =
                        t.controlCoordinates.imgHeight *
                          t.controlCoordinates.targetScale <=
                        t.controlCoordinates.containerHeight
                          ? 0
                          : t.minMax(
                              t.controlCoordinates.initialOffsetY -
                                ((t.controlCoordinates.pinchOffsetY -
                                  t.controlCoordinates.containerOffsetY -
                                  t.controlCoordinates.containerHeight / 2 -
                                  t.controlCoordinates.initialOffsetY) /
                                  (t.controlCoordinates.targetScale -
                                    t.controlCoordinates.scaleDifference)) *
                                  t.controlCoordinates.scaleDifference,
                              t.controlCoordinates.limitOffsetY * -1,
                              t.controlCoordinates.limitOffsetY
                            )),
                      t.zoomPanElement(
                        t.controlCoordinates.targetOffsetX + "px",
                        t.controlCoordinates.targetOffsetY + "px",
                        t.controlCoordinates.targetScale
                      ),
                      t.controlCoordinates.targetScale > 1
                        ? ((t.controlCoordinates.zoomed = !0),
                          (!t.domNodes.caption.style.opacity ||
                            t.domNodes.caption.style.opacity > 0) &&
                            t.domNodes.caption.style.display !== "none" &&
                            t.fadeOut(t.domNodes.caption, t.options.fadeSpeed))
                        : (t.controlCoordinates.initialScale === 1 &&
                            ((t.controlCoordinates.zoomed = !1),
                            t.domNodes.caption.style.display === "none" &&
                              t.fadeIn(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              )),
                          (t.controlCoordinates.initialPinchDistance = null),
                          (t.controlCoordinates.capture = !1)),
                      (t.controlCoordinates.initialPinchDistance =
                        t.controlCoordinates.targetPinchDistance),
                      (t.controlCoordinates.initialScale =
                        t.controlCoordinates.targetScale),
                      (t.controlCoordinates.initialOffsetX =
                        t.controlCoordinates.targetOffsetX),
                      (t.controlCoordinates.initialOffsetY =
                        t.controlCoordinates.targetOffsetY),
                      t.setZoomData(
                        t.controlCoordinates.targetScale,
                        t.controlCoordinates.targetOffsetX,
                        t.controlCoordinates.targetOffsetY
                      ),
                      t.zoomPanElement(
                        t.controlCoordinates.targetOffsetX + "px",
                        t.controlCoordinates.targetOffsetY + "px",
                        t.controlCoordinates.targetScale
                      );
                  }
                );
              }
              this.addEventListener(
                this.domNodes.image,
                [
                  "touchstart." + this.eventNamespace,
                  "mousedown." + this.eventNamespace,
                ],
                function (s) {
                  if (s.target.tagName === "A" && s.type === "touchstart")
                    return !0;
                  if (s.type === "mousedown")
                    s.preventDefault(),
                      (t.controlCoordinates.initialPointerOffsetX = s.clientX),
                      (t.controlCoordinates.initialPointerOffsetY = s.clientY),
                      (t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                      (t.controlCoordinates.initialOffsetY = parseFloat(
                        t.currentImage.dataset.translateY
                      )),
                      (t.controlCoordinates.capture = !0);
                  else {
                    if (
                      ((t.controlCoordinates.touchCount = s.touches.length),
                      (t.controlCoordinates.initialPointerOffsetX =
                        s.touches[0].clientX),
                      (t.controlCoordinates.initialPointerOffsetY =
                        s.touches[0].clientY),
                      (t.controlCoordinates.containerHeight = t.getDimensions(
                        t.domNodes.image
                      ).height),
                      (t.controlCoordinates.containerWidth = t.getDimensions(
                        t.domNodes.image
                      ).width),
                      (t.controlCoordinates.imgHeight = t.getDimensions(
                        t.currentImage
                      ).height),
                      (t.controlCoordinates.imgWidth = t.getDimensions(
                        t.currentImage
                      ).width),
                      (t.controlCoordinates.containerOffsetX =
                        t.domNodes.image.offsetLeft),
                      (t.controlCoordinates.containerOffsetY =
                        t.domNodes.image.offsetTop),
                      t.controlCoordinates.touchCount === 1)
                    ) {
                      if (!t.controlCoordinates.doubleTapped)
                        (t.controlCoordinates.doubleTapped = !0),
                          setTimeout(function () {
                            t.controlCoordinates.doubleTapped = !1;
                          }, 300);
                      else
                        return (
                          t.currentImage.classList.add("sl-transition"),
                          t.controlCoordinates.zoomed
                            ? ((t.controlCoordinates.initialScale = 1),
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                0,
                                0
                              ),
                              t.zoomPanElement(
                                "0px",
                                "0px",
                                t.controlCoordinates.initialScale
                              ),
                              (t.controlCoordinates.zoomed = !1))
                            : ((t.controlCoordinates.initialScale =
                                t.options.doubleTapZoom),
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                0,
                                0
                              ),
                              t.zoomPanElement(
                                "0px",
                                "0px",
                                t.controlCoordinates.initialScale
                              ),
                              (!t.domNodes.caption.style.opacity ||
                                t.domNodes.caption.style.opacity > 0) &&
                                t.domNodes.caption.style.display !== "none" &&
                                t.fadeOut(
                                  t.domNodes.caption,
                                  t.options.fadeSpeed
                                ),
                              (t.controlCoordinates.zoomed = !0)),
                          setTimeout(function () {
                            t.currentImage &&
                              t.currentImage.classList.remove("sl-transition");
                          }, 200),
                          !1
                        );
                      (t.controlCoordinates.initialOffsetX = parseFloat(
                        t.currentImage.dataset.translateX
                      )),
                        (t.controlCoordinates.initialOffsetY = parseFloat(
                          t.currentImage.dataset.translateY
                        ));
                    } else
                      t.controlCoordinates.touchCount === 2 &&
                        ((t.controlCoordinates.initialPointerOffsetX2 =
                          s.touches[1].clientX),
                        (t.controlCoordinates.initialPointerOffsetY2 =
                          s.touches[1].clientY),
                        (t.controlCoordinates.initialOffsetX = parseFloat(
                          t.currentImage.dataset.translateX
                        )),
                        (t.controlCoordinates.initialOffsetY = parseFloat(
                          t.currentImage.dataset.translateY
                        )),
                        (t.controlCoordinates.pinchOffsetX =
                          (t.controlCoordinates.initialPointerOffsetX +
                            t.controlCoordinates.initialPointerOffsetX2) /
                          2),
                        (t.controlCoordinates.pinchOffsetY =
                          (t.controlCoordinates.initialPointerOffsetY +
                            t.controlCoordinates.initialPointerOffsetY2) /
                          2),
                        (t.controlCoordinates.initialPinchDistance = Math.sqrt(
                          (t.controlCoordinates.initialPointerOffsetX -
                            t.controlCoordinates.initialPointerOffsetX2) *
                            (t.controlCoordinates.initialPointerOffsetX -
                              t.controlCoordinates.initialPointerOffsetX2) +
                            (t.controlCoordinates.initialPointerOffsetY -
                              t.controlCoordinates.initialPointerOffsetY2) *
                              (t.controlCoordinates.initialPointerOffsetY -
                                t.controlCoordinates.initialPointerOffsetY2)
                        )));
                    t.controlCoordinates.capture = !0;
                  }
                  return t.controlCoordinates.mousedown
                    ? !0
                    : (t.transitionCapable &&
                        (t.controlCoordinates.imageLeft = parseInt(
                          t.domNodes.image.style.left,
                          10
                        )),
                      (t.controlCoordinates.mousedown = !0),
                      (t.controlCoordinates.swipeDiff = 0),
                      (t.controlCoordinates.swipeYDiff = 0),
                      (t.controlCoordinates.swipeStart =
                        s.pageX || s.touches[0].pageX),
                      (t.controlCoordinates.swipeYStart =
                        s.pageY || s.touches[0].pageY),
                      !1);
                }
              ),
                this.addEventListener(
                  this.domNodes.image,
                  [
                    "touchmove." + this.eventNamespace,
                    "mousemove." + this.eventNamespace,
                    "MSPointerMove",
                  ],
                  function (s) {
                    if (!t.controlCoordinates.mousedown) return !0;
                    if (s.type === "touchmove") {
                      if (t.controlCoordinates.capture === !1) return !1;
                      (t.controlCoordinates.pointerOffsetX =
                        s.touches[0].clientX),
                        (t.controlCoordinates.pointerOffsetY =
                          s.touches[0].clientY),
                        (t.controlCoordinates.touchCount = s.touches.length),
                        t.controlCoordinates.touchmoveCount++,
                        t.controlCoordinates.touchCount > 1
                          ? ((t.controlCoordinates.pointerOffsetX2 =
                              s.touches[1].clientX),
                            (t.controlCoordinates.pointerOffsetY2 =
                              s.touches[1].clientY),
                            (t.controlCoordinates.targetPinchDistance =
                              Math.sqrt(
                                (t.controlCoordinates.pointerOffsetX -
                                  t.controlCoordinates.pointerOffsetX2) *
                                  (t.controlCoordinates.pointerOffsetX -
                                    t.controlCoordinates.pointerOffsetX2) +
                                  (t.controlCoordinates.pointerOffsetY -
                                    t.controlCoordinates.pointerOffsetY2) *
                                    (t.controlCoordinates.pointerOffsetY -
                                      t.controlCoordinates.pointerOffsetY2)
                              )),
                            t.controlCoordinates.initialPinchDistance ===
                              null &&
                              (t.controlCoordinates.initialPinchDistance =
                                t.controlCoordinates.targetPinchDistance),
                            Math.abs(
                              t.controlCoordinates.initialPinchDistance -
                                t.controlCoordinates.targetPinchDistance
                            ) >= 1 &&
                              ((t.controlCoordinates.targetScale = t.minMax(
                                (t.controlCoordinates.targetPinchDistance /
                                  t.controlCoordinates.initialPinchDistance) *
                                  t.controlCoordinates.initialScale,
                                1,
                                t.options.maxZoom
                              )),
                              (t.controlCoordinates.limitOffsetX =
                                (t.controlCoordinates.imgWidth *
                                  t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerWidth) /
                                2),
                              (t.controlCoordinates.limitOffsetY =
                                (t.controlCoordinates.imgHeight *
                                  t.controlCoordinates.targetScale -
                                  t.controlCoordinates.containerHeight) /
                                2),
                              (t.controlCoordinates.scaleDifference =
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.initialScale),
                              (t.controlCoordinates.targetOffsetX =
                                t.controlCoordinates.imgWidth *
                                  t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerWidth
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.initialOffsetX -
                                        ((t.controlCoordinates.pinchOffsetX -
                                          t.controlCoordinates
                                            .containerOffsetX -
                                          t.controlCoordinates.containerWidth /
                                            2 -
                                          t.controlCoordinates.initialOffsetX) /
                                          (t.controlCoordinates.targetScale -
                                            t.controlCoordinates
                                              .scaleDifference)) *
                                          t.controlCoordinates.scaleDifference,
                                      t.controlCoordinates.limitOffsetX * -1,
                                      t.controlCoordinates.limitOffsetX
                                    )),
                              (t.controlCoordinates.targetOffsetY =
                                t.controlCoordinates.imgHeight *
                                  t.controlCoordinates.targetScale <=
                                t.controlCoordinates.containerHeight
                                  ? 0
                                  : t.minMax(
                                      t.controlCoordinates.initialOffsetY -
                                        ((t.controlCoordinates.pinchOffsetY -
                                          t.controlCoordinates
                                            .containerOffsetY -
                                          t.controlCoordinates.containerHeight /
                                            2 -
                                          t.controlCoordinates.initialOffsetY) /
                                          (t.controlCoordinates.targetScale -
                                            t.controlCoordinates
                                              .scaleDifference)) *
                                          t.controlCoordinates.scaleDifference,
                                      t.controlCoordinates.limitOffsetY * -1,
                                      t.controlCoordinates.limitOffsetY
                                    )),
                              t.zoomPanElement(
                                t.controlCoordinates.targetOffsetX + "px",
                                t.controlCoordinates.targetOffsetY + "px",
                                t.controlCoordinates.targetScale
                              ),
                              t.controlCoordinates.targetScale > 1 &&
                                ((t.controlCoordinates.zoomed = !0),
                                (!t.domNodes.caption.style.opacity ||
                                  t.domNodes.caption.style.opacity > 0) &&
                                  t.domNodes.caption.style.display !== "none" &&
                                  t.fadeOut(
                                    t.domNodes.caption,
                                    t.options.fadeSpeed
                                  )),
                              (t.controlCoordinates.initialPinchDistance =
                                t.controlCoordinates.targetPinchDistance),
                              (t.controlCoordinates.initialScale =
                                t.controlCoordinates.targetScale),
                              (t.controlCoordinates.initialOffsetX =
                                t.controlCoordinates.targetOffsetX),
                              (t.controlCoordinates.initialOffsetY =
                                t.controlCoordinates.targetOffsetY)))
                          : ((t.controlCoordinates.targetScale =
                              t.controlCoordinates.initialScale),
                            (t.controlCoordinates.limitOffsetX =
                              (t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerWidth) /
                              2),
                            (t.controlCoordinates.limitOffsetY =
                              (t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale -
                                t.controlCoordinates.containerHeight) /
                              2),
                            (t.controlCoordinates.targetOffsetX =
                              t.controlCoordinates.imgWidth *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerWidth
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.pointerOffsetX -
                                      (t.controlCoordinates
                                        .initialPointerOffsetX -
                                        t.controlCoordinates.initialOffsetX),
                                    t.controlCoordinates.limitOffsetX * -1,
                                    t.controlCoordinates.limitOffsetX
                                  )),
                            (t.controlCoordinates.targetOffsetY =
                              t.controlCoordinates.imgHeight *
                                t.controlCoordinates.targetScale <=
                              t.controlCoordinates.containerHeight
                                ? 0
                                : t.minMax(
                                    t.controlCoordinates.pointerOffsetY -
                                      (t.controlCoordinates
                                        .initialPointerOffsetY -
                                        t.controlCoordinates.initialOffsetY),
                                    t.controlCoordinates.limitOffsetY * -1,
                                    t.controlCoordinates.limitOffsetY
                                  )),
                            Math.abs(t.controlCoordinates.targetOffsetX) ===
                              Math.abs(t.controlCoordinates.limitOffsetX) &&
                              ((t.controlCoordinates.initialOffsetX =
                                t.controlCoordinates.targetOffsetX),
                              (t.controlCoordinates.initialPointerOffsetX =
                                t.controlCoordinates.pointerOffsetX)),
                            Math.abs(t.controlCoordinates.targetOffsetY) ===
                              Math.abs(t.controlCoordinates.limitOffsetY) &&
                              ((t.controlCoordinates.initialOffsetY =
                                t.controlCoordinates.targetOffsetY),
                              (t.controlCoordinates.initialPointerOffsetY =
                                t.controlCoordinates.pointerOffsetY)),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              t.controlCoordinates.targetOffsetX,
                              t.controlCoordinates.targetOffsetY
                            ),
                            t.zoomPanElement(
                              t.controlCoordinates.targetOffsetX + "px",
                              t.controlCoordinates.targetOffsetY + "px",
                              t.controlCoordinates.targetScale
                            ));
                    }
                    if (
                      s.type === "mousemove" &&
                      t.controlCoordinates.mousedown
                    ) {
                      if (s.type == "touchmove") return !0;
                      if (
                        (s.preventDefault(),
                        t.controlCoordinates.capture === !1)
                      )
                        return !1;
                      (t.controlCoordinates.pointerOffsetX = s.clientX),
                        (t.controlCoordinates.pointerOffsetY = s.clientY),
                        (t.controlCoordinates.targetScale =
                          t.controlCoordinates.initialScale),
                        (t.controlCoordinates.limitOffsetX =
                          (t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerWidth) /
                          2),
                        (t.controlCoordinates.limitOffsetY =
                          (t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale -
                            t.controlCoordinates.containerHeight) /
                          2),
                        (t.controlCoordinates.targetOffsetX =
                          t.controlCoordinates.imgWidth *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerWidth
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetX -
                                  (t.controlCoordinates.initialPointerOffsetX -
                                    t.controlCoordinates.initialOffsetX),
                                t.controlCoordinates.limitOffsetX * -1,
                                t.controlCoordinates.limitOffsetX
                              )),
                        (t.controlCoordinates.targetOffsetY =
                          t.controlCoordinates.imgHeight *
                            t.controlCoordinates.targetScale <=
                          t.controlCoordinates.containerHeight
                            ? 0
                            : t.minMax(
                                t.controlCoordinates.pointerOffsetY -
                                  (t.controlCoordinates.initialPointerOffsetY -
                                    t.controlCoordinates.initialOffsetY),
                                t.controlCoordinates.limitOffsetY * -1,
                                t.controlCoordinates.limitOffsetY
                              )),
                        Math.abs(t.controlCoordinates.targetOffsetX) ===
                          Math.abs(t.controlCoordinates.limitOffsetX) &&
                          ((t.controlCoordinates.initialOffsetX =
                            t.controlCoordinates.targetOffsetX),
                          (t.controlCoordinates.initialPointerOffsetX =
                            t.controlCoordinates.pointerOffsetX)),
                        Math.abs(t.controlCoordinates.targetOffsetY) ===
                          Math.abs(t.controlCoordinates.limitOffsetY) &&
                          ((t.controlCoordinates.initialOffsetY =
                            t.controlCoordinates.targetOffsetY),
                          (t.controlCoordinates.initialPointerOffsetY =
                            t.controlCoordinates.pointerOffsetY)),
                        t.setZoomData(
                          t.controlCoordinates.initialScale,
                          t.controlCoordinates.targetOffsetX,
                          t.controlCoordinates.targetOffsetY
                        ),
                        t.zoomPanElement(
                          t.controlCoordinates.targetOffsetX + "px",
                          t.controlCoordinates.targetOffsetY + "px",
                          t.controlCoordinates.targetScale
                        );
                    }
                    t.controlCoordinates.zoomed ||
                      ((t.controlCoordinates.swipeEnd =
                        s.pageX || s.touches[0].pageX),
                      (t.controlCoordinates.swipeYEnd =
                        s.pageY || s.touches[0].pageY),
                      (t.controlCoordinates.swipeDiff =
                        t.controlCoordinates.swipeStart -
                        t.controlCoordinates.swipeEnd),
                      (t.controlCoordinates.swipeYDiff =
                        t.controlCoordinates.swipeYStart -
                        t.controlCoordinates.swipeYEnd),
                      t.options.animationSlide &&
                        t.slide(0, -t.controlCoordinates.swipeDiff + "px"));
                  }
                ),
                this.addEventListener(
                  this.domNodes.image,
                  [
                    "touchend." + this.eventNamespace,
                    "mouseup." + this.eventNamespace,
                    "touchcancel." + this.eventNamespace,
                    "mouseleave." + this.eventNamespace,
                    "pointerup",
                    "pointercancel",
                    "MSPointerUp",
                    "MSPointerCancel",
                  ],
                  function (s) {
                    if (
                      (t.isTouchDevice &&
                        s.type === "touchend" &&
                        ((t.controlCoordinates.touchCount = s.touches.length),
                        t.controlCoordinates.touchCount === 0
                          ? (t.currentImage &&
                              t.setZoomData(
                                t.controlCoordinates.initialScale,
                                t.controlCoordinates.targetOffsetX,
                                t.controlCoordinates.targetOffsetY
                              ),
                            t.controlCoordinates.initialScale === 1 &&
                              ((t.controlCoordinates.zoomed = !1),
                              t.domNodes.caption.style.display === "none" &&
                                t.fadeIn(
                                  t.domNodes.caption,
                                  t.options.fadeSpeed
                                )),
                            (t.controlCoordinates.initialPinchDistance = null),
                            (t.controlCoordinates.capture = !1))
                          : t.controlCoordinates.touchCount === 1
                          ? ((t.controlCoordinates.initialPointerOffsetX =
                              s.touches[0].clientX),
                            (t.controlCoordinates.initialPointerOffsetY =
                              s.touches[0].clientY))
                          : t.controlCoordinates.touchCount > 1 &&
                            (t.controlCoordinates.initialPinchDistance = null)),
                      t.controlCoordinates.mousedown)
                    ) {
                      t.controlCoordinates.mousedown = !1;
                      var d = !0;
                      t.options.loop ||
                        (t.currentImageIndex === 0 &&
                          t.controlCoordinates.swipeDiff < 0 &&
                          (d = !1),
                        t.currentImageIndex >= t.relatedElements.length - 1 &&
                          t.controlCoordinates.swipeDiff > 0 &&
                          (d = !1)),
                        Math.abs(t.controlCoordinates.swipeDiff) >
                          t.options.swipeTolerance && d
                          ? t.loadImage(
                              t.controlCoordinates.swipeDiff > 0 ? 1 : -1
                            )
                          : t.options.animationSlide &&
                            t.slide(t.options.animationSpeed / 1e3, "0px"),
                        t.options.swipeClose &&
                          Math.abs(t.controlCoordinates.swipeYDiff) > 50 &&
                          Math.abs(t.controlCoordinates.swipeDiff) <
                            t.options.swipeTolerance &&
                          t.close();
                    }
                  }
                ),
                this.addEventListener(
                  this.domNodes.image,
                  ["dblclick"],
                  function (s) {
                    if (!t.isTouchDevice)
                      return (
                        (t.controlCoordinates.initialPointerOffsetX =
                          s.clientX),
                        (t.controlCoordinates.initialPointerOffsetY =
                          s.clientY),
                        (t.controlCoordinates.containerHeight = t.getDimensions(
                          t.domNodes.image
                        ).height),
                        (t.controlCoordinates.containerWidth = t.getDimensions(
                          t.domNodes.image
                        ).width),
                        (t.controlCoordinates.imgHeight = t.getDimensions(
                          t.currentImage
                        ).height),
                        (t.controlCoordinates.imgWidth = t.getDimensions(
                          t.currentImage
                        ).width),
                        (t.controlCoordinates.containerOffsetX =
                          t.domNodes.image.offsetLeft),
                        (t.controlCoordinates.containerOffsetY =
                          t.domNodes.image.offsetTop),
                        t.currentImage.classList.add("sl-transition"),
                        t.controlCoordinates.zoomed
                          ? ((t.controlCoordinates.initialScale = 1),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (t.controlCoordinates.zoomed = !1),
                            t.domNodes.caption.style.display === "none" &&
                              t.fadeIn(t.domNodes.caption, t.options.fadeSpeed))
                          : ((t.controlCoordinates.initialScale =
                              t.options.doubleTapZoom),
                            t.setZoomData(
                              t.controlCoordinates.initialScale,
                              0,
                              0
                            ),
                            t.zoomPanElement(
                              "0px",
                              "0px",
                              t.controlCoordinates.initialScale
                            ),
                            (!t.domNodes.caption.style.opacity ||
                              t.domNodes.caption.style.opacity > 0) &&
                              t.domNodes.caption.style.display !== "none" &&
                              t.fadeOut(
                                t.domNodes.caption,
                                t.options.fadeSpeed
                              ),
                            (t.controlCoordinates.zoomed = !0)),
                        setTimeout(function () {
                          t.currentImage &&
                            (t.currentImage.classList.remove("sl-transition"),
                            (t.currentImage.style[
                              t.transitionPrefix + "transform-origin"
                            ] = null));
                        }, 200),
                        (t.controlCoordinates.capture = !0),
                        !1
                      );
                  }
                );
            },
          },
          {
            key: "getDimensions",
            value: function (t) {
              var o = window.getComputedStyle(t),
                s = t.offsetHeight,
                d = t.offsetWidth,
                u = parseFloat(o.borderTopWidth),
                a = parseFloat(o.borderBottomWidth),
                n = parseFloat(o.paddingTop),
                e = parseFloat(o.paddingBottom),
                i = parseFloat(o.borderLeftWidth),
                c = parseFloat(o.borderRightWidth),
                h = parseFloat(o.paddingLeft),
                r = parseFloat(o.paddingRight);
              return { height: s - a - u - n - e, width: d - i - c - h - r };
            },
          },
          {
            key: "updateHash",
            value: function () {
              var t = "pid=" + (this.currentImageIndex + 1),
                o = window.location.href.split("#")[0] + "#" + t;
              (this.hashReseted = !1),
                this.pushStateSupport
                  ? window.history[
                      this.historyHasChanges ? "replaceState" : "pushState"
                    ]("", document.title, o)
                  : this.historyHasChanges
                  ? window.location.replace(o)
                  : (window.location.hash = t),
                this.historyHasChanges || (this.urlChangedOnce = !0),
                (this.historyHasChanges = !0);
            },
          },
          {
            key: "resetHash",
            value: function () {
              (this.hashReseted = !0),
                this.urlChangedOnce
                  ? history.back()
                  : this.pushStateSupport
                  ? history.pushState(
                      "",
                      document.title,
                      window.location.pathname + window.location.search
                    )
                  : (window.location.hash = ""),
                clearTimeout(this.historyUpdateTimeout);
            },
          },
          {
            key: "updateURL",
            value: function () {
              clearTimeout(this.historyUpdateTimeout),
                this.historyHasChanges
                  ? (this.historyUpdateTimeout = setTimeout(
                      this.updateHash.bind(this),
                      800
                    ))
                  : this.updateHash();
            },
          },
          {
            key: "setCaption",
            value: function (t, o, s) {
              var d = this;
              if (this.options.captions && t && t !== "" && typeof t < "u") {
                var u,
                  a =
                    !(
                      (u = s ?? this.options.captionHTML) !== null &&
                      u !== void 0
                    ) || u
                      ? "innerHTML"
                      : "innerText";
                this.hide(this.domNodes.caption),
                  (this.domNodes.caption.style.width = o + "px"),
                  (this.domNodes.caption[a] = t),
                  this.domNodes.image.appendChild(this.domNodes.caption),
                  setTimeout(function () {
                    d.fadeIn(d.domNodes.caption, d.options.fadeSpeed);
                  }, this.options.captionDelay);
              }
            },
          },
          {
            key: "slide",
            value: function (t, o) {
              if (!this.transitionCapable)
                return (this.domNodes.image.style.left = o);
              (this.domNodes.image.style[this.transitionPrefix + "transform"] =
                "translateX(" + o + ")"),
                (this.domNodes.image.style[
                  this.transitionPrefix + "transition"
                ] = this.transitionPrefix + "transform " + t + "s linear");
            },
          },
          {
            key: "getRelated",
            value: function (t) {
              var o;
              return (
                t && t !== !1 && t !== "nofollow"
                  ? (o = Array.from(this.elements).filter(function (s) {
                      return s.getAttribute("rel") === t;
                    }))
                  : (o = this.elements),
                o
              );
            },
          },
          {
            key: "openImage",
            value: function (t) {
              var o = this;
              t.dispatchEvent(new Event("show." + this.eventNamespace)),
                (this.globalScrollbarWidth = this.getScrollbarWidth()),
                this.options.disableScroll &&
                  (this.toggleScrollbar("hide"),
                  (this.globalScrollbarWidth = 0)),
                this.options.htmlClass &&
                  this.options.htmlClass !== "" &&
                  document
                    .querySelector("html")
                    .classList.add(this.options.htmlClass),
                document.body.appendChild(this.domNodes.wrapper),
                this.domNodes.wrapper.appendChild(this.domNodes.image),
                this.options.overlay &&
                  document.body.appendChild(this.domNodes.overlay),
                (this.relatedElements = this.getRelated(t.rel)),
                this.options.showCounter &&
                  (this.relatedElements.length == 1 &&
                  this.domNodes.wrapper.contains(this.domNodes.counter)
                    ? this.domNodes.wrapper.removeChild(this.domNodes.counter)
                    : this.relatedElements.length > 1 &&
                      !this.domNodes.wrapper.contains(this.domNodes.counter) &&
                      this.domNodes.wrapper.appendChild(this.domNodes.counter)),
                this.options.download &&
                  this.domNodes.download &&
                  this.domNodes.wrapper.appendChild(this.domNodes.download),
                (this.isAnimating = !0),
                (this.currentImageIndex = this.relatedElements.indexOf(t));
              var s = t.getAttribute(this.options.sourceAttr);
              (this.currentImage = document.createElement("img")),
                (this.currentImage.style.display = "none"),
                this.currentImage.setAttribute("src", s),
                (this.currentImage.dataset.scale = 1),
                (this.currentImage.dataset.translateX = 0),
                (this.currentImage.dataset.translateY = 0),
                this.loadedImages.indexOf(s) === -1 &&
                  this.loadedImages.push(s),
                (this.domNodes.image.innerHTML = ""),
                this.domNodes.image.setAttribute("style", ""),
                this.domNodes.image.appendChild(this.currentImage),
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed),
                this.fadeIn(
                  [
                    this.domNodes.counter,
                    this.domNodes.navigation,
                    this.domNodes.closeButton,
                    this.domNodes.download,
                  ],
                  this.options.fadeSpeed
                ),
                this.show(this.domNodes.spinner),
                (this.domNodes.counter.querySelector(".sl-current").innerHTML =
                  this.currentImageIndex + 1),
                (this.domNodes.counter.querySelector(".sl-total").innerHTML =
                  this.relatedElements.length),
                this.adjustImage(),
                this.options.preloading && this.preload(),
                setTimeout(function () {
                  t.dispatchEvent(new Event("shown." + o.eventNamespace));
                }, this.options.animationSpeed);
            },
          },
          {
            key: "forceFocus",
            value: function () {
              var t = this;
              this.removeEventListener(
                document,
                "focusin." + this.eventNamespace
              ),
                this.addEventListener(
                  document,
                  "focusin." + this.eventNamespace,
                  function (o) {
                    document !== o.target &&
                      t.domNodes.wrapper !== o.target &&
                      !t.domNodes.wrapper.contains(o.target) &&
                      t.domNodes.wrapper.focus();
                  }
                );
            },
          },
          {
            key: "addEventListener",
            value: function (t, o, s, d) {
              (t = this.wrap(t)), (o = this.wrap(o));
              var u = y(t),
                a;
              try {
                for (u.s(); !(a = u.n()).done; ) {
                  var n = a.value;
                  n.namespaces || (n.namespaces = {});
                  var e = y(o),
                    i;
                  try {
                    for (e.s(); !(i = e.n()).done; ) {
                      var c = i.value,
                        h = d || !1,
                        r =
                          [
                            "touchstart",
                            "touchmove",
                            "mousewheel",
                            "DOMMouseScroll",
                          ].indexOf(c.split(".")[0]) >= 0;
                      r &&
                        this.isPassiveEventsSupported &&
                        (D(h) === "object"
                          ? (h.passive = !0)
                          : (h = { passive: !0 })),
                        (n.namespaces[c] = s),
                        n.addEventListener(c.split(".")[0], s, h);
                    }
                  } catch (m) {
                    e.e(m);
                  } finally {
                    e.f();
                  }
                }
              } catch (m) {
                u.e(m);
              } finally {
                u.f();
              }
            },
          },
          {
            key: "removeEventListener",
            value: function (t, o) {
              (t = this.wrap(t)), (o = this.wrap(o));
              var s = y(t),
                d;
              try {
                for (s.s(); !(d = s.n()).done; ) {
                  var u = d.value,
                    a = y(o),
                    n;
                  try {
                    for (a.s(); !(n = a.n()).done; ) {
                      var e = n.value;
                      u.namespaces &&
                        u.namespaces[e] &&
                        (u.removeEventListener(
                          e.split(".")[0],
                          u.namespaces[e]
                        ),
                        delete u.namespaces[e]);
                    }
                  } catch (i) {
                    a.e(i);
                  } finally {
                    a.f();
                  }
                }
              } catch (i) {
                s.e(i);
              } finally {
                s.f();
              }
            },
          },
          {
            key: "fadeOut",
            value: function (t, o, s) {
              var d = this;
              t = this.wrap(t);
              var u = y(t),
                a;
              try {
                for (u.s(); !(a = u.n()).done; ) {
                  var n = a.value;
                  n.style.opacity =
                    parseFloat(n) ||
                    window.getComputedStyle(n).getPropertyValue("opacity");
                }
              } catch (c) {
                u.e(c);
              } finally {
                u.f();
              }
              this.isFadeIn = !1;
              var e = 16.66666 / (o || this.options.fadeSpeed),
                i = function c() {
                  var h = parseFloat(t[0].style.opacity);
                  if ((h -= e) < 0) {
                    var r = y(t),
                      m;
                    try {
                      for (r.s(); !(m = r.n()).done; ) {
                        var g = m.value;
                        (g.style.display = "none"), (g.style.opacity = 1);
                      }
                    } catch (L) {
                      r.e(L);
                    } finally {
                      r.f();
                    }
                    s && s.call(d, t);
                  } else {
                    var C = y(t),
                      I;
                    try {
                      for (C.s(); !(I = C.n()).done; ) {
                        var x = I.value;
                        x.style.opacity = h;
                      }
                    } catch (L) {
                      C.e(L);
                    } finally {
                      C.f();
                    }
                    requestAnimationFrame(c);
                  }
                };
              i();
            },
          },
          {
            key: "fadeIn",
            value: function (t, o, s, d) {
              var u = this;
              t = this.wrap(t);
              var a = y(t),
                n;
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var e = n.value;
                  e &&
                    ((e.style.opacity = 0), (e.style.display = d || "block"));
                }
              } catch (r) {
                a.e(r);
              } finally {
                a.f();
              }
              this.isFadeIn = !0;
              var i = parseFloat(t[0].dataset.opacityTarget || 1),
                c = (16.66666 * i) / (o || this.options.fadeSpeed),
                h = function r() {
                  var m = parseFloat(t[0].style.opacity);
                  if ((m += c) > i) {
                    var x = y(t),
                      L;
                    try {
                      for (x.s(); !(L = x.n()).done; ) {
                        var k = L.value;
                        k && (k.style.opacity = i);
                      }
                    } catch (H) {
                      x.e(H);
                    } finally {
                      x.f();
                    }
                    s && s.call(u, t);
                  } else {
                    var g = y(t),
                      C;
                    try {
                      for (g.s(); !(C = g.n()).done; ) {
                        var I = C.value;
                        I && (I.style.opacity = m);
                      }
                    } catch (H) {
                      g.e(H);
                    } finally {
                      g.f();
                    }
                    if (!u.isFadeIn) return;
                    requestAnimationFrame(r);
                  }
                };
              h();
            },
          },
          {
            key: "hide",
            value: function (t) {
              t = this.wrap(t);
              var o = y(t),
                s;
              try {
                for (o.s(); !(s = o.n()).done; ) {
                  var d = s.value;
                  d.style.display != "none" &&
                    (d.dataset.initialDisplay = d.style.display),
                    (d.style.display = "none");
                }
              } catch (u) {
                o.e(u);
              } finally {
                o.f();
              }
            },
          },
          {
            key: "show",
            value: function (t, o) {
              t = this.wrap(t);
              var s = y(t),
                d;
              try {
                for (s.s(); !(d = s.n()).done; ) {
                  var u = d.value;
                  u.style.display = u.dataset.initialDisplay || o || "block";
                }
              } catch (a) {
                s.e(a);
              } finally {
                s.f();
              }
            },
          },
          {
            key: "wrap",
            value: function (t) {
              return typeof t[Symbol.iterator] == "function" &&
                typeof t != "string"
                ? t
                : [t];
            },
          },
          {
            key: "on",
            value: function (t, o) {
              t = this.wrap(t);
              var s = y(this.elements),
                d;
              try {
                for (s.s(); !(d = s.n()).done; ) {
                  var u = d.value;
                  u.fullyNamespacedEvents || (u.fullyNamespacedEvents = {});
                  var a = y(t),
                    n;
                  try {
                    for (a.s(); !(n = a.n()).done; ) {
                      var e = n.value;
                      (u.fullyNamespacedEvents[e] = o),
                        u.addEventListener(e, o);
                    }
                  } catch (i) {
                    a.e(i);
                  } finally {
                    a.f();
                  }
                }
              } catch (i) {
                s.e(i);
              } finally {
                s.f();
              }
              return this;
            },
          },
          {
            key: "off",
            value: function (t) {
              t = this.wrap(t);
              var o = y(this.elements),
                s;
              try {
                for (o.s(); !(s = o.n()).done; ) {
                  var d = s.value,
                    u = y(t),
                    a;
                  try {
                    for (u.s(); !(a = u.n()).done; ) {
                      var n = a.value;
                      typeof d.fullyNamespacedEvents < "u" &&
                        n in d.fullyNamespacedEvents &&
                        d.removeEventListener(n, d.fullyNamespacedEvents[n]);
                    }
                  } catch (e) {
                    u.e(e);
                  } finally {
                    u.f();
                  }
                }
              } catch (e) {
                o.e(e);
              } finally {
                o.f();
              }
              return this;
            },
          },
          {
            key: "open",
            value: function (t) {
              var o =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0;
              (t = t || this.elements[0]),
                typeof jQuery < "u" && t instanceof jQuery && (t = t.get(0)),
                o > 0 && (t = this.elements[o]),
                (this.initialImageIndex = this.elements.indexOf(t)),
                this.initialImageIndex > -1 && this.openImage(t);
            },
          },
          {
            key: "openPosition",
            value: function (t) {
              var o = this.elements[t];
              this.open(o, t);
            },
          },
          {
            key: "next",
            value: function () {
              this.loadImage(1);
            },
          },
          {
            key: "prev",
            value: function () {
              this.loadImage(-1);
            },
          },
          {
            key: "getLighboxData",
            value: function () {
              return {
                currentImageIndex: this.currentImageIndex,
                currentImage: this.currentImage,
                globalScrollbarWidth: this.globalScrollbarWidth,
              };
            },
          },
          {
            key: "destroy",
            value: function () {
              this.off([
                "close." + this.eventNamespace,
                "closed." + this.eventNamespace,
                "nextImageLoaded." + this.eventNamespace,
                "prevImageLoaded." + this.eventNamespace,
                "change." + this.eventNamespace,
                "nextDone." + this.eventNamespace,
                "prevDone." + this.eventNamespace,
                "error." + this.eventNamespace,
                "changed." + this.eventNamespace,
                "next." + this.eventNamespace,
                "prev." + this.eventNamespace,
                "show." + this.eventNamespace,
                "shown." + this.eventNamespace,
              ]),
                this.removeEventListener(
                  this.elements,
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  document,
                  "focusin." + this.eventNamespace
                ),
                this.removeEventListener(
                  document.body,
                  "contextmenu." + this.eventNamespace
                ),
                this.removeEventListener(
                  document.body,
                  "keyup." + this.eventNamespace
                ),
                this.removeEventListener(
                  this.domNodes.navigation.getElementsByTagName("button"),
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  this.domNodes.closeButton,
                  "click." + this.eventNamespace
                ),
                this.removeEventListener(
                  window,
                  "resize." + this.eventNamespace
                ),
                this.removeEventListener(
                  window,
                  "hashchange." + this.eventNamespace
                ),
                this.close(),
                this.isOpen &&
                  (document.body.removeChild(this.domNodes.wrapper),
                  document.body.removeChild(this.domNodes.overlay)),
                (this.elements = null);
            },
          },
          {
            key: "refresh",
            value: function () {
              if (!this.initialSelector)
                throw "refreshing only works when you initialize using a selector!";
              var t = this.options,
                o = this.initialSelector;
              return this.destroy(), this.constructor(o, t), this;
            },
          },
        ]),
        p
      );
    })(),
    A = S;
  (b.default = A), (T.SimpleLightbox = S);
})(W);
const F = R(W);
export { F as S, q as i };
//# sourceMappingURL=vendor-5b791d57.js.map
