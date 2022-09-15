import tw from 'twin.macro'
import styled from 'styled-components'

interface AppContainerProps {
    fullHeight?: boolean
    paddingHeader?: boolean
    preventAnimation?: boolean
}

export const AppContainer = styled.section<AppContainerProps>`
    ${tw`container mx-auto p-4`}
    height: ${({ fullHeight }) => (fullHeight ? `100vh` : '')};
    padding-top: ${({ paddingHeader, theme }) => {
        return paddingHeader
            ? `calc(${theme.spacing.headerHeight} + 12px)`
            : '1rem'
    }};

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`
