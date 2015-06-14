#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

THEME = 'ilbey'

AUTHOR = u'Ozan Sener'
SITENAME = u'Ozan Sener'
SITEURL = ''

STATIC_PATHS = ['images','pdfs']

PAGE_URL = '{slug}/'

SITELOGO='ozansener-typographic.png'

PATH = 'content'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'en'


# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

PLUGIN_PATHS = ["plugins"]
PLUGINS = ["pubGenerator"]
