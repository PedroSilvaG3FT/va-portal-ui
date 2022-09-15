import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'

export const HeaderContainer = styled.header`
    ${tw`fixed w-full`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`

export const Container = styled(AppContainer)`
    ${tw`flex justify-between items-center`}
`

export const ImageContainer = styled.figure``

export const Image = styled.img.attrs(fadeIn.left)`
    ${tw`w-16 h-16 object-cover rounded-full sm:w-12 sm:h-12`}
`

export const Content = styled.article.attrs(fadeIn.down)`
    ${tw`flex items-center md:hidden`}
`

interface LinkProps {
    isFillColor?: boolean
}
export const Link = styled.a<LinkProps>`
    ${tw`mr-4 pt-0.5 flex flex-col items-center uppercase cursor-pointer`}
    ${({ isFillColor }) => (isFillColor ? tw`rounded-md px-3` : tw``)}

    background: ${({ isFillColor, theme }) =>
        isFillColor ? theme.colors.primary : 'transparent'};

    &:after {
        content: '';
        ${tw`w-full mt-0.5 h-0.5 bg-transparent`}
    }

    &:hover {
        color: ${({ isFillColor, theme }) =>
            isFillColor ? '' : theme.colors.primary};

        &:after {
            content: '';
            animation: underline 500ms ease;
            background: ${({ theme }) => theme.colors.primary};
        }
    }

    @keyframes underline {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
`

export const Button = styled(AppButton).attrs(fadeIn.right)`
    ${tw`w-10 h-10 p-1 px-2 flex-col justify-evenly rounded-md hidden md:flex`}
`

export const LineButton = styled.span`
    ${tw`w-full h-1 rounded-md`}
    background: ${({ theme }) => theme.colors.bgSecondary};
`
