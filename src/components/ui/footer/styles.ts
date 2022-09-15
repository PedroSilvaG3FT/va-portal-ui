import tw from 'twin.macro'
import styled from 'styled-components'
import { AppContainer } from '@/styles/css/ts/components'

export const FooterContainer = styled.footer`
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Container = styled(AppContainer)`
    ${tw`flex flex-col items-center`}
`

export const Text = styled.p`
    ${tw`text-sm`}
`

export const Article = styled.article`
    ${tw`flex mb-2`}
`

export const Icon = styled.i`
    ${tw`w-10 h-10 mx-2 text-lg rounded-full flex items-center justify-center cursor-pointer transition-transform duration-700`}
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:hover {
        transform: scale(1.2);
    }
`
