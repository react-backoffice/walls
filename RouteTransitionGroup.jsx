import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const RouteTransitionGroup = ({
  location,
  children,
}) => (
  <TransitionGroup
    className="walls-wrapper"
  >
    <CSSTransition key={location.key} classNames="walls-element" timeout={300}>
      {children}
    </CSSTransition>
  </TransitionGroup>
)

RouteTransitionGroup.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export default RouteTransitionGroup
