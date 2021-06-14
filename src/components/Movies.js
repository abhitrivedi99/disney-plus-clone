import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectMovies } from '../app/movieSlice'

const Movies = () => {
	const movies = useSelector(selectMovies)

	const renderMoviesList = movies.map((movie) => {
		return (
			<Wrap key={movie.id}>
				<Link to={`/detail/${movie.id}`}>
					<img alt={movie.title} src={movie.cardImg} />
				</Link>
			</Wrap>
		)
	})

	return (
		<Container>
			<h3>Recommended for You</h3>
			<Content>{movies && renderMoviesList}</Content>
		</Container>
	)
}

export default Movies

const Container = styled.div`
	padding: 0 0 26px;
`
const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`
const Wrap = styled.div`
	border-radius: 10px;
	overflow: hidden;
	border: 3px solid rgba(249, 249, 249, 0.1);
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

	&:hover {
		border-color: rgba(249, 249, 249, 0.8);
		transform: scale(1.05);
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	}

	img {
		top: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: inline-block;
		opacity: 1;
	}
`
