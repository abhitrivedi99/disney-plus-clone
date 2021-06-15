import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'

import db from '../firebase'

const Detail = () => {
	const { id } = useParams()
	const [movie, setMovie] = useState()

	useEffect(() => {
		db.collection('movies')
			.doc(id)
			.get()
			.then((doc) => {
				if (doc) {
					setMovie(doc.data())
				} else {
				}
			})
	}, [id])

	return (
		<Container>
			{movie && (
				<>
					<Background>
						<img alt="img" src={movie.backgroundImg} />
					</Background>
					<ImageTitle>
						<img alt="logo" src={movie.titleImg} />
					</ImageTitle>
					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="play" />
							<span>PLAY</span>
						</PlayButton>
						<TrailerButton>
							<img src="/images/play-icon-white.png" alt="play" />
							<span>TRAILER</span>
						</TrailerButton>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButton>
							<img src="/images/group-icon.png" alt="group" />
						</GroupWatchButton>
					</Controls>
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
		</Container>
	)
}

export default Detail

const Container = styled.div`
	min-height: calc(100 vh-70px);
	padding: 0px calc(3.5vw + 5px);
	position: relative;
`
const Background = styled.div`
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;
	position: fixed;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;
	margin-top: 20px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`
const Controls = styled.div`
	display: flex;
	align-items: center;
`
const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	background: rgb(249, 249, 249);
	border: none;
	padding: 0px 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
		background: rgb(198, 198, 198);
	}

	img{
		width: 25px;
	}

  @media (max-width: 768px) {
	  height: 45px;
	  padding: 0px 12px;
	  font-size: 12px;
	  margin: 0px 10px 0px 0px;
`
const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`
const AddButton = styled.button`
	margin-right: 16px;
	height: 44px;
	width: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50px;
	cursor: pointer;
	border: 2px solid white;
	background-color: rgba(0, 0, 0, 0.6);

	span {
		font-size: 30px;
		color: white;
	}
`
const GroupWatchButton = styled(AddButton)`
	background-color: rgb(0, 0, 0);

	img {
		width: 100%;
	}
`
const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	margin-top: 26px;
	font-size: 15px;
	min-height: 20px;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`
const Description = styled.p`
	line-height: 1.4;
	font-size: 20px;
	padding: 16px 0px;
	color: rgb(249, 249, 249);
	max-width: 760px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`
