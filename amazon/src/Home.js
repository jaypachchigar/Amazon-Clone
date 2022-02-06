import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/81pXJW9qztL._QL85_V1_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                    id="121121"
                    title="The lean startup" 
                    price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' 
                     rating={5}/>
                    <Product 
                    id="21212"
                    title="Kenwood Mix stand for mixer"
                    price={239.0}
                    image='https://greenchef.in/sites/default/files/2021-03/5.jpg'
                    rating={4}
                    />
                </div>
                <div className="home__row">
                 <Product 
                    id="31313"
                    title="Samsung Galaxy Watch Series 4"
                    price={399.99}
                    image='https://image-us.samsung.com/us/smartphones/galaxy-z-fold3-5g/wise-fresh-berry/watch4-classic-fresh/gallery/bluetooth/40mm/silver/Gallery-Watch4-40mm-BT-R-Perspective-Silver-1600x1200.jpg?$product-details-jpg$'
                    rating={3}
                    />
                <Product 
                    id="41414"
                    title="Amazon Echo Dot 4th Generation"
                    price={250.0}
                    image='https://www.reliancedigital.in/medias/Amazon-Echo-Dot-4th-Gen-Smart-Display-and-Speakers-491935954-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjIzMHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaGQ0Lzk0MTU4NDMzMTU3NDIuanBnfGE4YmNiZjkwNzNhM2M2ZGJjZmQ0MDM3YzI1ZDBhOWQzNmEyYmVhYTYzODY2NDg4MjdkMGZhZjNkYWI3NWIyYTI'
                    rating={4}
                    />
                 <Product 
                    id="51515"
                    title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Sky Blue (4th Generation)"
                    price={239.0}
                    image='https://m.media-amazon.com/images/I/71dwvdUu72L._SL1500_.jpg'
                    rating={5}
                    />
                </div>
                <div className="home__row">
                <Product 
                    id="61616"
                    title="Samsung 163 cm (65 inches) Crystal 4K Series Ultra HD Smart LED TV UA65AUE60AKLXL (Black) (2021 Model)"
                    price={1500.0}
                    image='https://www.fullspecs.net/images/products/2596_3_samsung-ua43aue60aklxl-f923f40f0bcc9d22c81a8c4c63f2c68f.jpg'
                    rating={4}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home
