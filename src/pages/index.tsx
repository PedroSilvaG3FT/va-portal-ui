import React from 'react'
import Logo from '@/assets/images/logo.jpg'
import AppHead from '@/components/common/app-head'
import { THEME_ITEMS } from '@/contants/theme-type'
import { uiActions } from '@/store/reducers/ui.reducer'
import { Container, Image, Title, Content, Button } from '@/styles/pages/home'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Home" />

            <Container paddingHeader fullHeight>
                <Title>Vigilia Apocalipse</Title>

                <Image src={Logo} alt="logo" />

                <Content>
                    {THEME_ITEMS.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => uiActions.setTheme(item.id)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Content>
            </Container>
        </>
    )
}

export default Home
