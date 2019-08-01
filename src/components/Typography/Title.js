import styled from 'styled-components'
import PropTypes from 'prop-types'

// 

export const Title = styled.h2`
    font-family: var(--font-accent-thin);
    color: var(--color-dark);
    text-align: left;
    ${ props => props.center && 'text-align: center;' }
    ${ props => props.right && 'text-align: right;' }
`

Title.propTypes = {
    children: PropTypes.node.isRequired,
}
