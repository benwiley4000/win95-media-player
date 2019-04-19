# win-95-media-player

*This repo is a work in progress*

A React media player component inspired by Windows 95's included Media Player application (one of the early versions of Windows Media Player).

Under the hood we rely on two React component libraries:

- [Cassette](https://github.com/benwiley4000/cassette), which powers the media playback itself
- [@arturbien](https://github.com/arturbien)'s [React95](https://github.com/arturbien/React95), UI components built to resemble Windows 95

## install

```console
npm install win95-media-player
```

## api

### Win95MediaPlayer

A fully-functional media player component. Accepts all the props accepted by `Win95MediaPlayerUI` and Cassette's [`PlayerContextProvider`](https://benwiley4000.github.io/cassette/styleguide/#playercontextprovider)

### Win95MediaPlayerUI

The UI component used by `Win95MediaPlayer`. If you're building a more complex media player app with Cassette, you can render this directly inside of a React tree wrapped by a `PlayerContextProvider` to hook into the surrounding `playerContext`.

#### props

| Prop name        | Prop type | Default value                                 | Description                                                                                                                                                  |
| ---------------- | --------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `getDisplayText` | Function  | `track => track.artist + ' - ' + track.title` | Receives a [track](https://benwiley4000.github.io/cassette/styleguide/#track) object (or `undefined` if none is active) and returns a string of display text |
| `showVideo`      | Boolean   | `false`                                       | A boolean which must be set `true` to display video                                                                                                          |
