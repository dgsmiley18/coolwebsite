---
layout: about
title: homepage
permalink: /
excerpt: "Welcome to my cyberspace! this is where i talk about stuff"
---
# Johnblog

<div style="display: flex; justify-content: space-between; align-items: center;">
  <div style="flex: 1; font-size: 1.1rem; text-align: left;">

    <p>Hello, my name is John and welcome to my blog!</p>

<a href="{{ site.baseurl }}/donate" target="_blank"><img src="/images/litecoin-ltc-icon.webp" alt="ltc icon" width="50"/></a>
<a href="{{ site.baseurl }}/donate" target="_blank"><img src="/images/btc_icon.webp" alt="btc icon" width="50"/></a>
<a href="{{ site.baseurl }}/donate" target="_blank"><img src="/images/monero_icon.webp" alt="monero icon" width="50"/></a>
  </div>
  <div style="flex: 1; display: inline-block; text-align: right;">
      <p>Photo of the month</p>
      <img src="/images/girl_knife.jpg" alt="a girl with knife" style="max-width: 40%; height: auto;">
  </div>
</div>
<div style="text-align: left;">
  <h2 style="margin: 0;">Last posts</h2>
</div>
<hr color="red" style="margin: 0;">

<ul>
  {% for post in site.posts limit: 3 %}
    <li style="flex: 1; text-align: left;">
    {{ post.date | date: "%B %d, %Y" }}  - <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

