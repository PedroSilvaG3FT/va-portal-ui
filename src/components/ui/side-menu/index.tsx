import React, { useEffect, useRef } from 'react'
import { IoIosClose } from 'react-icons/io'
import { Container, Button, Content, Link } from './styles'

interface SideMenuProps {
    items: any[]
    show: boolean
    onClose: () => void
}

const SideMenu: React.FC<SideMenuProps> = props => {
    const { items, show, onClose } = props
    const containerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (show) setAnimationIn()
    }, [show])

    const setAnimationIn = () => {
        const inAnimation = 'animation-in'
        containerRef.current?.classList.add(inAnimation)

        setTimeout(() => {
            containerRef.current?.classList.remove(inAnimation)
        }, 2100)
    }

    const handleClose = () => {
        const outAnimation = 'animation-out'
        containerRef.current?.classList.add(outAnimation)

        setTimeout(() => {
            containerRef.current?.classList.remove(outAnimation)
            onClose()
        }, 980)
    }

    if (!show) return <></>
    return (
        <Container ref={containerRef}>
            <Button onClick={handleClose}>
                <IoIosClose />
            </Button>

            <Content>
                {items.map((item, index) => (
                    <Link key={index} onClick={item.action}>
                        {item.name}
                    </Link>
                ))}
            </Content>
        </Container>
    )
}

export default SideMenu
