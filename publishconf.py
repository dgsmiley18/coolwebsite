from pathlib import Path
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))

from pelicanconf import *

SITEURL = "https://johntitorr.org"
RELATIVE_URLS = True

FEED_ALL_ATOM = "feeds/all.atom.xml"
CATEGORY_FEED_ATOM = "feeds/%s.atom.xml"

DELETE_OUTPUT_DIRECTORY = True
