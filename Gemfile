source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', '>= 210', versions['github-pages']

gem "rake", "~> 13.0"

gem "html-proofer", "~> 3.15"
