import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Card} from "react-bootstrap"

const WineCard = ({ imgUrl, title, content, path}) => {
    return (
        <>
            <Card>
                <Link href={path}>
                    <a>
                        <Image
                        src={imgUrl}
                        width={"600px"}
                        height={"700px"}
                        layout="responsive"
                        />
                    <Card.Body>
                        <Card.Text >
                                <h5>{title}</h5>
                        </Card.Text>
                        <div className="price">
                            <h4>${content}</h4>
                        </div>
                    </Card.Body>
                    </a>
                </Link>
            </Card>
        </>
    )
}

export default WineCard
