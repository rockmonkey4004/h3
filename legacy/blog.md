---
layout: tags
title: Blog Posts
subtitle: All
pagination:
  enabled: true
featured-image: tags/Blog-Index-Tag_iorfol.jpg
image: tags/Blog-Index-Tag_iorfol.jpg
alt: Coffee, journal, and bedsheets

---
<p>
{% capture temptags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 1000 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}
{% assign sortedtemptags = temptags | split:' ' | sort | reverse %}
{% for temptag in sortedtemptags %}
  {% assign tagitems = temptag | split: '#' %}
  {% capture tagname %}{{ tagitems[1] }}{% endcapture %}
<a href="/tag/{{ tagname }}"><code class="highligher-rouge"><nobr>{{ tagname }}</nobr></code></a>
{% endfor %}
</p>

<ul class="alt">
    {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }} </a> - {{ post.date | date_to_string }}<br>
      {{ post.excerpt }}
    </li>
    {% endfor %}
  </ul>
