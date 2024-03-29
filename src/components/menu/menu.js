import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Match } from '@reach/router'
import { ExpandDownIcon } from '../icons'

export const MenuItem = styled.span`
    background-color: inherit;
    position: relative;
`

export const MenuLink = styled(Link)`
    display: flex;
    // justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-light);
    border: 0;
    padding: 0.5rem 1.5rem;
    margin: 0;
    background-color: transparent;
    letter-spacing: 2px;
    position: relative;
    font-weight: 400;
    transition: color 500ms, background-color 150ms;
    &:hover, &:focus {
        color: var(--color-white);
        background-color: var(--color-primary-dark);
    }
    &.active {
        color: var(--color-white);
        background-color: var(--color-primary-dark);
        &:hover, &:focus {
            color: var(--color-white);
            background-color: var(--color-primary-dark);
        }
    }
`

export const ExternalMenuLink = styled(MenuLink)`
    color: var(--color-secondary-light);
    font-weight: 600;
`

export const SubmenuHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: var(--color-light);
    border: 0;
    padding: 0.5rem 1.25rem;
    margin: 0;
    background-color: ${ props => props.active ? 'var(--color-primary-dark)' : 'transparent' };
    letter-spacing: 2px;
    position: relative;
    font-weight: 400;
    cursor: pointer;
    transition: color 500ms, background-color 250ms;
    &:hover, &:focus {
        color: var(--color-white);
        background-color: var(--color-primary-dark);
    }
    & svg {
        transition: transform 250ms;
        transform: ${ props => props.open ? 'translateY(0.25rem)' : 'translateY(0)' };
    }
`

export const Submenu = styled.nav.attrs({ className: 'submenu' })`
    position: absolute;
    left: 50%;
    font-size: 80%;
    width: calc(${ props => props.width }rem * 0.7 );
    min-width: 100%;
    border: 1px solid var(--color-primary-dark);
    background-color: var(--color-primary);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;
    z-index: -1;
    transition: transform 150ms, opacity 250ms;
    transform-origin: 50% 0%;
    transform: ${ props => props.open ? 'scaleY(1) translateY(0)' : 'scaleY(0) translateY(-2rem)' } translateX(-50%);
    opacity: ${ props => props.open ? 1.0 : 0.1 };
`

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-image: linear-gradient(140deg, var(--color-primary-dark), var(--color-primary), var(--color-primary-dark));
    min-width: 600px;
    z-index: 2;
`

export const Menu = ({ items, showBrand }) => {
    const [openSubmenu, setOpenSubmenu] = useState(-1)

    const handleOpenSubmenu = index => event => setOpenSubmenu(index)
    const handleCloseAllSubmenus = () => setOpenSubmenu(-1)

    const externalUrlPattern = new RegExp(/^https?:\/\//)
    const isExternalLink = (path) => externalUrlPattern.exec(path);

    return (
        <MenuContainer>
            {
                items.map((item, currentIndex) => {
                    return (
                        <MenuItem
                            key={ item.path }
                            onMouseOver={ item.submenu && handleOpenSubmenu(currentIndex) } onMouseOut={ item.submenu && handleCloseAllSubmenus }
                            onFocus={ item.submenu && handleOpenSubmenu(currentIndex) } onBlur={ item.submenu && handleCloseAllSubmenus }
                        >
                            {
                                item.submenu
                                    ? <Fragment>    
                                        <Match path={ item.path }>
                                            {
                                                props => {
                                                    // "active" means we're looking at a page whose route contains the submenu's root route
                                                    const thisSubmenuIsActive = props.location.pathname.includes(item.path)
                                                    // Reach Router can style _links_ that are partially active out of the box.
                                                    // However, here, we want to style the submenu header (not a Link component)
                                                    // according to whether there is a partial location match.
                                                    // This substring check is how the value of the "active" prop is determined below. 
                                                    // console.log(props.location.pathname, 'contains', item.path, ':', props.location.pathname.includes(item.path))
                                                    return (
                                                        <SubmenuHeader active={ thisSubmenuIsActive } open={ openSubmenu === currentIndex }>
                                                            { item.text } &nbsp; <ExpandDownIcon fill="white" size={ 18 } />
                                                        </SubmenuHeader>
                                                    )
                                                }
                                            }
                                        </Match>
                                        <Submenu open={ openSubmenu === currentIndex } onClick={ handleCloseAllSubmenus } width={ item.submenu.reduce((max, item) => item.text.length > max ? item.text.length : max, 0) }>
                                          { item.submenu.map(subitem => isExternalLink(subitem.path) ? 
                                              <MenuLink as="a" key={ subitem.text } activeClassName="active" partiallyActive={ true } href={ subitem.path } target="_blank" rel="noreferrer">{ subitem.text }</MenuLink> : 
                                              <MenuLink key={ subitem.text } to={ subitem.path } activeClassName="active" partiallyActive={ true }>{ subitem.text }</MenuLink>
                                          )}
                                        </Submenu>
                                    </Fragment>
                                    : (
                                        isExternalLink(item.path) ? 
                                          <ExternalMenuLink as="a" activeClassName="active" partiallyActive={ true } href={ item.path } target="_blank" rel="noreferrer">{ item.text }</ExternalMenuLink> : 
                                          <MenuLink to={ item.path } activeClassName="active" partiallyActive={ true }>{ item.text }</MenuLink>
                                      )
                            }
                        </MenuItem>
                    )}
                )
            }
        </MenuContainer>
    )
}