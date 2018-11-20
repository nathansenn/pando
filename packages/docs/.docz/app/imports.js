export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/architecture/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-architecture-index" */ 'src/architecture/index.mdx'),
  'src/cli/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cli-index" */ 'src/cli/index.mdx'),
  'src/components/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-alert" */ 'src/components/Alert.mdx'),
  'src/components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button" */ 'src/components/Button.mdx'),
  'src/cli/commands/initialize.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cli-commands-initialize" */ 'src/cli/commands/initialize.mdx'),
  'src/cli/commands/snapshot.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cli-commands-snapshot" */ 'src/cli/commands/snapshot.mdx'),
  'src/cli/commands/track.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cli-commands-track" */ 'src/cli/commands/track.mdx'),
  'src/cli/commands/untrack.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-cli-commands-untrack" */ 'src/cli/commands/untrack.mdx'),
}
