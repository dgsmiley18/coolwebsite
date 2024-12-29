---
layout: post
title:  "Archivism is the future"
date:   2024-12-08 20:02:34 -0300
excerpt:  Everything on internet is disappearing, make sure to save what you like!
categories: tech
---
Do you remember about that article or video that is gone from internet, and you can't find it even if you try? Exactly. Unfortunately niche things usually are not archived on archive.org, but there is a way to fix it, be the change you want to see and start to archive stuff!

It is actually easy and I going to show you how I do.

# Videos
for videos, I use [yt-dlp](https://github.com/yt-dlp/yt-dlp), it works with any website that has a video
```bash
# general
yt-dlp "VIDEO_URL"

# for playlist
yt-dlp -f bestaudio+bestvideo -o '%(playlist_index)s - %(title)s.%(ext)s' "PLAYLIST_URL"

# only the audio (good for music)
yt-dlp -x --audio-format mp3 --embed-thumbnail --add-metadata "VIDEO_URL"
```
there are others cool commands for yt-dlp, I recommend reading the documentation [here](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#usage-and-options)

# Images/Arts
if you're going to download single images you can use ``wget IMAGE_URL``
try downloading this image:
<img src="https://files.catbox.moe/1a7im2.jpg" alt="drawing" width="250"/>

but if you want to download a lot of images from websites like twitter, Pixiv, or Danbooru you can use [gallery-dl](https://github.com/mikf/gallery-dl)
```bash
# general (works with pictures and videos)
gallery-dl https://www.example.com/pictures

# if you need to log in (example: twitter)
gallery-dl --username yourusername --password yourpassword https://www.example.com/gallery-url

# if you want to download images/videos from websites in a txt file
gallery-dl --batch-file links.txt
```
you can find more commands in the [documentation](https://github.com/mikf/gallery-dl)

# Websites
There are simple ways to download a page, for single pages i recommend [Singlefile](https://github.com/gildas-lormeau/SingleFile), it's an extension for your browser where you can download a faithful copy of the entire page in a single HTML File.

Now if you want the real deal, not only a page but the **entire website**, hosting your own wayback machine, you can use [archivebox](https://archivebox.io/), with this little boy you can save snapshots from your websites with a lot of formats

🌐 HTML/Any websites ➡️ ``original HTML+CSS+JS, singlefile HTML, screenshot PNG, PDF, WARC, title, article text, favicon, headers``\
🎥 Social Media/News ➡️ ``post content TXT, comments, title, author, images``\
🎬 YouTube/SoundCloud/etc. ➡️ ``MP3/MP4s, subtitles, metadata, thumbnail``\
💾 GitHub/GitLab/etc. links ➡️ ``clone of GIT source code, README, images``

And there is more, after downloading the website you can upload the snapshot automatically to Wayback Machine!

You can install it in your machine or use docker if you want, make sure to read the documentation because there is a lot of cool stuff