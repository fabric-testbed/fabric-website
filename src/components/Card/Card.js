import styled from 'styled-components'

export const CardHeader = styled.div`
    padding: 0.25rem 1rem;
    color: var(--color-white);
    font-weight: bold;
    background-color: var(--color-primary);
`

export const CardBody = styled.div`
    padding: 1rem;
`

export const CardFooter = styled.div`
    padding: 0.5rem 1rem;
    color: var(--color-black);
    font-size: 80%;
`

export const Card = styled.div`
    overflow: hidden;
    margin: 0 auto 1rem auto;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--color-primary);
`