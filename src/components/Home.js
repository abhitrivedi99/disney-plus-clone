import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../app/movieSlice'

const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		db.collection('movies').onSnapshot((snapshot) => {
			let temp = snapshot.docs.map((doc) => {
				return { id: doc.id, ...doc.data() }
			})
			// console.log(temp)
			dispatch(setMovies(temp))
		})
	}, [dispatch])

	return (
		<Container>
			<ImageSlider />
			<Viewers />
			<Movies />
		</Container>
	)
}

export default Home

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&:before {
		background: url('/images/home-background.png') center center / cover no-repeat fixed;
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 1;
		z-index: -1;
	}
`
