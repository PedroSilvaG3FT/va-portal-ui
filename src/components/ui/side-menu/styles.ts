import { AppButton, AppContainer } from '@/styles/css/ts/components'
import { fadeIn } from '@/styles/animation'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(AppContainer)`
    ${tw`fixed top-0 right-0 h-screen w-full`}
    background: ${({ theme }) => theme.colors.gradientPrimary};

    &.animation-in {
        animation: animation-in 1s ease-in-out both;

        @keyframes animation-in {
            0% {
                ${tw`w-44 h-44 top-[-20vh] right-[-20vw] rounded-bl-full`}
            }
            100% {
                ${tw`rounded-bl-none`}
            }
        }
    }

    &.animation-out {
        animation: animation-out 1s ease-in-out both;

        > button,
        > article {
            ${tw`hidden`}
        }

        @keyframes animation-out {
            100% {
                top: -20vh;
                right: -20vw;
                ${tw`w-20 h-0 opacity-0 rounded-bl-full`}
            }
        }
    }
`

export const Button = styled(AppButton)`
    ${tw`p-0 mt-4 flex items-center float-right bg-transparent`}

    > svg {
        ${tw`text-xl font-bold mb-0.5 mr-2`}
        color: ${({ theme }) => theme.colors.text};
    }
`

export const Content = styled.article.attrs(fadeIn.right)`
    animation-delay: 900ms;
    ${tw`flex flex-col mt-48`}
`

export const Link = styled.a`
    ${tw`text-lg pb-3 mb-3`}
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};

    &:last-of-type {
        border-bottom: none;
    }
`
