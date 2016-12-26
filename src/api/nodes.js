var config = require('./nodes.config.json')

const registServers = (config) => {
  let _nodes = {}
  if (config && typeof config === 'object') {
    config.map((node) => {
      _nodes[node.id] = node.server
    })
  }

  return {
    nodes: _nodes
  }
}

const servers = registServers(config)

export default servers.nodes
