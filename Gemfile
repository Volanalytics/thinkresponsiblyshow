source "https://rubygems.org"

# Use GitHub Pages gem for consistent environment
gem "github-pages", group: :jekyll_plugins

# If you have specific Jekyll version requirements, uncomment this line
# gem "jekyll", "~> 3.9.0"

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15.0"
  # Add other plugins as needed
end

# Windows and JRuby specific gems
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock kramdown version for security
gem "kramdown", ">= 2.3.0"
