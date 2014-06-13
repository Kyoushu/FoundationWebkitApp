# Foundation Webkit App

A template for building native Windows apps with Foundation 5.

## Getting Started

    git clone https://github.com/Kyoushu/FoundationWebkitApp.git
    cd FoundationWebkitApp
    npm install && bower install
    grunt

Open app.nw/index.html to start working on your app. When you're ready to build an .exe, run the following.

    grunt build

The app will be saved to builds/releases.

## Testing Linux Builds Under Ubuntu 14.04

Run the following command to fix the libudev shared library issue.

    sudo ln -s /lib/i386-linux-gnu/libudev.so.1.3.5 /usr/lib/libudev.so.0

Then run the following commands to build and run the app

    grunt build
    builds/releases/foundation-app/linux32/foundation-app/foundation-app