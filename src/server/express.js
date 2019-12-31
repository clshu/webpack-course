import express from 'express'
import webpack from 'webpack'
import config from '../../config/webpack.dev'
import webpackDev from 'webpack-dev-middleware'
import webpackHot from 'webpack-hot-middleware'

const server = express()
const compiler = webpack(config)

const webpackDevMiddleware = webpackDev(compiler, config.devServer)
server.use(webpackDevMiddleware)

const webpackHotMiddleware = webpackHot(compiler)
server.use(webpackHotMiddleware)

const staticMiddleware = express.static('dist')
server.use(staticMiddleware)

server.listen(8080, () => {
  console.log('Server is listening')
})
