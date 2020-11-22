import React from 'react'
import {Carousel} from 'react-bootstrap'
export default function Coursel() {
    return (
        <div>
            <Carousel className='carousel-fade'>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 "
                        src="https://source.unsplash.com/1400x400/?books,blogs"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1400x400/?blogs,books"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://source.unsplash.com/1400x400/?blog,story"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}
