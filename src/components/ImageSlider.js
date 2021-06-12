import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageSlider = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}
	return (
		<Carousel {...settings}>
			<Wrap>
				<img src="/images/slider-badging.jpg" alt="slider-badging" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-badag.jpg" alt="slider-badag" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-scale.jpg" alt="slider-scale" />
			</Wrap>
			<Wrap>
				<img src="/images/slider-scales.jpg" alt="slider-scales" />
			</Wrap>
		</Carousel>
	)
}

export default ImageSlider

const Carousel = styled(Slider)`
	margin-top: 20px;

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button:before {
		color: white;
	}

	.slick-list {
		overflow: initial;
	}

	.slick-prev {
		left: -75px;
	}

	.slick-next {
		right: -75px;
	}

	button {
		z-index: 1;
	}
`

const Wrap = styled.div`
	cursor: pointer;

	img {
		border: 4px solid transparent;
		width: 100%;
		height: 100%;
		border-radius: 4px;

		transition-duration: 300ms;
		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`
