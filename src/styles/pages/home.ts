import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

export const Container = styled(AppContainer)`
    ${tw`flex flex-col justify-center items-center`}
`

export const Title = styled.h1`
    ${tw`text-lg`}
`

export const Image = styled.img`
    ${tw`mt-8 rounded-full`}
`

export const Content = styled.article`
    ${tw`mt-8`}
`

export const Button = styled(AppButton)`
    ${tw`min-w-[150px]`}

    &:first-of-type {
        ${tw`mr-4`}
    }
`
