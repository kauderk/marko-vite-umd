Marko Vite UMD Starter
==================================

## Why?
Marko 5 is a great library for building web applications, but there are few examples about how to use it in client only environments. This starter is a demonstration.
Potential use cases would be: Chrome Extension, Browser Extension, Electron App, Tauri App, etc.

## Development (SRR)

Terminal: `npm install && npm run dev`

VsCode: Launch the `Marko App (Launch)` debug configuration or press `F5`.
> Note: Set a breakpoint in any `src/*.marko` file to test the debugger.

## Build (UMD)

Terminal: `npm run build`

> Note: To prove it is an UMD. Go to any browser page, create a html element `<div id="markoApp"></div>`, open the console and paste the `dist/extension.js` content. The Marko app should be rendered in the browser.

## TODO
- remove server logic from build (umd) output
- correctly match launch.json > serverReadyAction > pattern