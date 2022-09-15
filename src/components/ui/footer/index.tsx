import React from 'react'
import { format } from 'date-fns'
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Container, FooterContainer, Article, Icon, Text } from './styles'

const Footer: React.FC = () => {
    const socialMedia = [
        {
            title: 'Instagram',
            icon: <FaInstagram />,
            link: 'https://www.instagram.com/vigiliaapocalipse/'
        },
        {
            title: 'Facebook',
            icon: <FaFacebookF />,
            link: 'https://www.facebook.com/vigiliaapocalipseoficial/'
        },
        {
            title: 'YouTube',
            icon: <FaYoutube />,
            link: 'https://www.youtube.com/results?search_query=vigilia+apocalipse'
        }
    ]

    const currentYear = format(new Date(), 'yyyy')
    const openURL = (url: string) => window.open(url, '_blank')

    return (
        <FooterContainer>
            <Container>
                <Article>
                    {socialMedia.map((item, index) => (
                        <Icon
                            key={index}
                            title={item.title}
                            onClick={() => openURL(item.link)}
                        >
                            {item.icon}
                        </Icon>
                    ))}
                </Article>

                <Text>
                    {currentYear} © Direitos reservados a Vigília Apocalipse
                </Text>
            </Container>
        </FooterContainer>
    )
}

export default Footer
