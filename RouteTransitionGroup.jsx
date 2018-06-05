import React from 'react'
import PropTypes from 'prop-types'
import TransitionGroup from 'react-transition-group/TransitionGroup'

import AnimatedWrapper from './AnimatedWrapper'

const RouteTranstionGroup = ({ match, render, ...rest }) => {
  const firstChild = (newProps) => {
    const childrenArray = React.Children.toArray(newProps.children)
    return childrenArray[0] || null
  }

  const AnimatedComponent = AnimatedWrapper(() => (
    render(rest)
  ))

  return (
    <TransitionGroup component={firstChild}>
      {match && (
        <AnimatedComponent {...rest} />
      )}
    </TransitionGroup>
  )
}

RouteTranstionGroup.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  render: PropTypes.func.isRequired,
}

export default RouteTranstionGroup
