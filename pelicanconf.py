AUTHOR = 'John'
SITENAME = 'homepage'
SITEURL = ''

PATH = 'content'
TIMEZONE = 'America/Sao_Paulo'
DEFAULT_LANG = 'en'

PAGE_PATHS = ['pages']
ARTICLE_PATHS = ['posts']

PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'
ARTICLE_URL = 'blog/{date:%Y}/{slug}/'
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{slug}/index.html'
TAG_URL = 'tag/{slug}/'
TAG_SAVE_AS = 'tag/{slug}/index.html'
CATEGORY_URL = 'category/{slug}/'
CATEGORY_SAVE_AS = 'category/{slug}/index.html'
AUTHOR_URL = 'author/{slug}/'
AUTHOR_SAVE_AS = 'author/{slug}/index.html'
INDEX_SAVE_AS = 'index.html'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

STATIC_PATHS = ['images', 'assets', 'fonts']

DEFAULT_PAGINATION = 10
DELETE_OUTPUT_DIRECTORY = True

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

# Use local theme folder with your custom templates
THEME = 'theme'
