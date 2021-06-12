import React from 'react'
import Image from 'next/image'

const Section = ({ imgUrl, heading, content,extraImage }) => {
    return (
        <div className="heroSection">
            <Image
                src={imgUrl}
                width={"1200"}
                height={"700"}
                layout="responsive"
            />
            <div className="heroSectionIntro">
                <div className="heroSection_text">
                    <h2>
                        {heading}
                    </h2>

                    <p>
                        {content}
                    </p>

                </div>
            </div>

            

        </div>
    )
}

export default Section
