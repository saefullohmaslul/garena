import React from 'react'
import ReactDOM from 'react-dom'

import '@/index.scss'

import ContainerRedux from './container.redux'

const Index = () => {
  return <ContainerRedux />
}

ReactDOM.render(<Index />, document.getElementById('root'))
