!function(t){function e(){var e=t(window).scrollTop();if(e>d){parseInt(c.data("sticky-offset")||0);c.addClass("sticked")}else c.removeClass("sticked");c.find("ul.active").removeClass("active"),c.find("li.active").removeClass("active");for(var a=0;a<v.length;a++){var n=v[a],i=v[a+1],l=a==v.length-1;if(e>=n.top-1&&(l||e<i.top-1)){n.el.addClass("active"),n.el.find("ul.level-"+(n.level+1)).addClass("active");for(var s=0;s<n.parents.length;s++)n.parents[s].addClass("active")}}f=!1}function a(){f||(f=!0,window.requestAnimationFrame?window.requestAnimationFrame(e):setTimeout(e,66))}function n(e,a,n){var i=t("<li>");i.addClass("level-"+n),i.data("anchor",e);var l=t("<a>");return l.attr("href","#"+e),l.text(a),i.append(l),i}function i(t){return t.toLowerCase().replace(/[-_\s\.]+/g,"-")}function l(){t("dt > tt.docutils").each(function(){var e=t(this),a=e.parents(".section").find("h1").text(),n=e.find("span").text()||e.text();if(n&&n.length>1){n=n.split("=")[0],n=n.split("://")[0];var l=i(a+"-"+n);e.attr("id",l);var s=t("<a>");s.attr("href","#"+l),s.addClass("anchor fa fa-link"),e.append(s)}})}function s(){t("pre.literal-block").each(function(){var e=t(this),a=e.text().split("\n"),n=/^\s+/.exec(a[0]);n=n?n[0].length:0;for(var i=0;i<a.length;i++)a[i]=a[i].slice(n);e.text(a.join("\n"))})}function r(){var e=c.data("navigation-source");if(e){var a=t(e);if(a.length){var i=[t("<ul>")];i[0].addClass("level-1"),a.find(".section").each(function(e,a){var l=t(a),s=l.attr("id"),r=t(l.find(":first-child")[0]);if(r){var o=r.text(),c=parseInt(r.prop("tagName").slice(1)),d=r.offset().top,f=n(s,o,c),p=t("<ul>");p.addClass("level-"+(c+1)),f.append(p),v.push({top:d,level:c,id:s,el:f,parents:i.slice(0,c)}),i[c-1].append(f),i[c]=p}else console.log("malformed chapter: ",s)}),c.html(i[0])}}}function o(){c=t(".sticky");var e=c.offset();e&&(l(),s(),r(),d=e.top,t(window).scroll(a),a())}var c,d,f=!1,v=[];t(o)}(Zepto);