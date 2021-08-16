# pantry-of-plants

The making of a new vegan cooking/baking blog with a focus on simplicity and legibility.

## Development Setup

We suggest using [chruby](https://github.com/postmodern/chruby) and [ruby-install](https://github.com/postmodern/ruby-install):

```sh
ruby-install ruby-$(cat .ruby-version)
chruby $(cat .ruby-version)
ruby --version # 2.7.4
```

Then install the required gems:

```sh
bundle install
```

and finally generate the blog!

```sh
sh build_website.sh
open output/index.html
```


