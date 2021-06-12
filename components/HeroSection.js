import Image from 'next/image'
import React from 'react'
import {Carousel} from "react-bootstrap"

const HeroSection = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <Image
                    src="/carosuel1.jpg"
                    alt="herosection"
                    layout="responsive"
                    objectFit="cover"
                    width={1000}
                    height={500}
                />

            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="/carosuel2.jpg"
                    alt="herosection"
                    layout="responsive"
                    objectFit="cover"
                    width={1000}
                    height={500}
                />

            </Carousel.Item>
            <Carousel.Item>
                <Image
                    src="/carosuel3.jpg"
                    alt="herosection"
                    layout="responsive"
                    objectFit="cover"
                    width={1000}
                    height={500}
                />


            </Carousel.Item>
        </Carousel>
    )
}

export default HeroSection
