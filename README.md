# conspiracyrockets
Conspiracy Rockets Game

# Build Tasks:

Run these in the background while developing and everything will update itself automatically when you safe a change to a
file.

To install the build tools, if you don't already have them somehow:

```sh
npm install react-tools
npm install statify
gem install sass # maybe with `sudo` ...
```

**React Views:**

You'll need the `jsx` tool from the `react-tools` NPM package for this.

```sh
node_modules/.bin/jsx -x jsx --watch app/views app/views/build
```

**CSS:**

You'll need the `sass` Ruby gem installed for this.

```sh
scss --style=nested --watch app/css/main.scss:app/css/main.css
```

# View the app in a browser

```sh
node_modules/.bin/statify -d app
```

Then open <http://localhost:8000/> in your browser.
