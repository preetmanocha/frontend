export default {
  define: {
    'process.env.contextPath': process.env.contextPath,
  },
  extraResolveExtensions: ['.jsx', '.js', '.json'],
  extraBabelPlugins: [
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'es', 'style': true }],
  ],
  theme: {
    'primary-color': '#73d13d',
    '@link-color': '#73d13d',
  },
  alias: {
    components: `${__dirname}/src/components`,
  }
}
