# @arinthros/scripts

A set of common scripts for JavaScript projects. Inspired by `kcd-scripts` and `react-scripts`.

Example usage:

```json
// package.json

"scripts" {
  "reinstall": "arinthros-scripts reinstall"
}
```

### Reinstall

Deletes untracked folders like `node_modules` then runs a fresh dependency install.

Supports `--yarn` or `--npm` flags, defaults to yarn.

TODO: support a list of additional paths to clear