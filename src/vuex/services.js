var config = require('./services.config.json')
const _params = {}
const _state = {}
const register = (config) => {
  const mutations = {}
  // const _state = {}
  if (config && typeof config === 'object') {
    let services = (config.services && config.services instanceof Array) ? config.services : []
    services.map(service => {
      _state[`${service.FC}`] = {}
      mutations[`${service.FC}:INIT`] = (_state, obj) => {
        _state[`${service.FC}`] = obj
      }
      mutations[`${service.FC}:CONCAT`] = (_state, obj) => {
        if (obj instanceof Array) {
          if (_state[`${service.FC}`] instanceof Array) {
            _state[`${service.FC}`] = _state[`${service.FC}`].concat(obj)
          } else {
            _state[`${service.FC}`] = [].concat(obj)
          }
        }
      }
      mutations[`${service.FC}:RELOAD`] = (_state, obj) => {
        if (_state[`${service.FC}`] instanceof Array) {
          _state[`${service.FC}`] = [].concat(obj)
        } else {
          _state[`${service.FC}`] = obj
        }
      }
      mutations[`${service.FC}:RESET`] = (_state) => {
        if (_state[`${service.FC}`] instanceof Array) {
          _state[`${service.FC}`] = []
        } else {
          _state[`${service.FC}`] = {}
        }
      }
      _params[`${service.FC}`] = service.params
    })
  }
  return {mutations, state: _state}
}

export const modules = register(config)

export const params = _params

export const state = _state
