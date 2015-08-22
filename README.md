# conspiracyrockets
Conspiracy Rockets Game

# Build Tasks:

Run these in the background while developing and everything will update itself automatically when you safe a change to a
file.

**React Views:**

You'll need the `jsx` tool from the `react-tools` NPM package for this.

```sh
jsx -x jsx --watch app/views app/views/build
```

**CSS:**

You'll need the `sass` Ruby gem installed for this.

```sh
scss --style=nested --watch app/css/main.scss:app/css/main.css
```
