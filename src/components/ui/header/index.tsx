import React, { useState } from 'react'
import Logo from '@/assets/images/logo.jpg'
import {
    HeaderContainer,
    Container,
    ImageContainer,
    Image,
    Content,
    Link,
    Button,
    LineButton
} from './styles'
import SideMenu from '../side-menu'

const Header: React.FC = () => {
    const [isShowSideMenu, setIsShowSideMenu] = useState(false)
    const items = [
        { name: 'Sobre', isFillColor: false, action: () => {} },
        { name: 'Eventos', isFillColor: false, action: () => {} },
        { name: 'Mural de oração', isFillColor: false, action: () => {} },
        { name: 'Contato', isFillColor: false, action: () => {} },
        { name: 'Contribua', isFillColor: true, action: () => {} }
    ]

    return (
        <HeaderContainer>
            <Container>
                <ImageContainer>
                    <Image src={Logo} alt="V. Apocalipse" />
                </ImageContainer>

                <Content>
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            onClick={item.action}
                            isFillColor={item.isFillColor}
                        >
                            {item.name}
                        </Link>
                    ))}
                </Content>

                <Button onClick={() => setIsShowSideMenu(true)}>
                    <LineButton />
                    <LineButton />
                    <LineButton />
                </Button>
            </Container>

            <SideMenu
                items={items}
                show={isShowSideMenu}
                onClose={() => setIsShowSideMenu(false)}
            />
        </HeaderContainer>
    )
}

export default Header
