# win-95-media-player

*This repo is a work in progress (TODO: add gif here)*

A React media player component inspired by the Media Player app that shipped with Windows 95 (one of the early versions of Windows Media Player).

Works on the web, in an Electron app, or anywhere ReactDOM will run!

Under the hood we rely on two React component libraries:

- [Cassette](https://github.com/benwiley4000/cassette), which powers the media playback itself
- [@arturbien](https://github.com/arturbien)'s [React95](https://github.com/arturbien/React95), UI components built to resemble Windows 95

## install

```console
npm install win95-media-player
```

*TODO: add script tag install*

## quick start

*TODO: add quick start code*

## api

### MediaPlayer

A fully-functional media player component. Accepts all the props accepted by `MediaPlayerUI` and Cassette's [`PlayerContextProvider`](https://benwiley4000.github.io/cassette/styleguide/#playercontextprovider)

### MediaPlayerUI

The UI component used by `MediaPlayer`. If you're building a more complex media player app with Cassette, you can render this directly inside of a React tree wrapped by a `PlayerContextProvider` to hook into the surrounding `playerContext`.

#### props

| Prop name        | Prop type | Default value                                 | Description                                                                                                                                                  |
| ---------------- | --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `getDisplayText` | Function  | `track => track.title` | Receives a [track](https://benwiley4000.github.io/cassette/styleguide/#track) object (or `undefined` if none is active) and returns a string of display text |
| `showVideo`      | Boolean   | `false`                                       | A boolean which must be set `true` to display video                                                                                                          |
| `fullscreenEnabled` |	Boolean	| `false`	| If set `true`, adds a maximize button to the title bar which will trigger fullscreen mode |
| `className` | String |  | An optional CSS class name to pass to the outer window div |
| `style` | Object |  | An optional React style object to pass to the outer window div |

## special thanks

[@felixrieseberg](https://github.com/felixrieseberg)'s [windows95](https://github.com/felixrieseberg/windows95) app allowed me to play around with the *real* Windows 95 Media Player so I could extract the concept for this project.
