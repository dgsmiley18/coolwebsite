---
layout: about
title: homepage
permalink: /
excerpt: "Welcome to my cyberspace! this is where i talk about stuff"
---
# Johnblog

<div style="display: flex; justify-content: space-between; align-items: center;">
  <div style="flex: 1; font-size: 1.1rem; text-align: left;">
      Welcome to my comfy cyberspace, Currently the world is ending, people are working to separate people
      and spread chaos and disorder, in this place i document what i can about life, tech, and other stuffs.
  </div>
  <div style="flex: 1; display: inline-block; text-align: right;">
      <p>Photo of the month</p>
      <img src="/images/girl_knife.jpg" alt="a girl with knife" style="max-width: 40%; height: auto;">
  </div>
</div>
<div style="text-align: left;">
  <h3 style="margin: 0;">Last posts</h3>
</div>
<hr color="red" style="margin: 0;">

<ul>
  {% for post in site.posts limit: 3 %}
    <li style="flex: 1; text-align: left;">
    {{ post.date | date: "%B %d, %Y" }}  - <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

