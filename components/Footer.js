import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer">
            <div className="shop">
                <div className="shop_info">
                    <div className="shop_image">
                        <img
                            src={"/shopphoto.jpg"}
                        />
                    </div>
                    <div className="shop_address">
                        <h5>八木酒造</h5>
                        <p>地址　奈良市高畑町915番地</p>
                        <p>時間　9:00-17:00</p>
                        <p>完全予約制（1回20人まで）、無料。ご希望の方は、事前にお電話でお申込みください。</p>
                        <p>0742-26-2300</p>
                    </div>
                </div>

            </div>
            <div className="footer_button">
                <Link href="/product" className="shop_button_link">
                    <button>瀏覽商品</button>
                </Link>
            </div>
        </div>
    )
}

export default Footer
