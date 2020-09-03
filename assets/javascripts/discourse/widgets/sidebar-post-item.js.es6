import { createWidget } from 'discourse/widgets/widget';
import { h } from 'virtual-dom';
import getURL from "discourse-common/lib/get-url";

createWidget('sidebar-post-item', {
  tagName: 'div.sidebar-post-item',

  html(attrs) {
    var url = getURL("/t/") + attrs.slug + "/" + attrs.id;
    return [
      h('img.thumbnail', {attributes: { src: attrs.photo_url }
      }),
      h('a.item-title', {
        attributes: { href: url}
      }, attrs.title),
      h('span.like_count', {}, attrs.like_count)
      // h('span', this.attach('featured-link', {topic: attrs}))
    ]
  },
});
