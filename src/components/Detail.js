import React from 'react'
import styled from 'styled-components'

const Detail = () => {
	return (
		<Container>
			<Background>
				<img
					alt="img"
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B409C2A425D58C32D822EB633C7CAE3DC910DC2FC62D2B1807A0BB092C531E9A/scale?width=1440&aspectRatio=1.78&format=jpeg"
				/>
			</Background>
			<ImageTitle>
				<img
					alt="logo"
					src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2041CE26663867FC4EF20377B8625BD629E619452E23BCDB1AB259DD475C2EA1/scale?width=1440&aspectRatio=1.78"
				/>
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
			<SubTitle>2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure</SubTitle>
			<Description>
				While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the
				day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose
				superpowers are about to be discovered. Their mission is derailed, however, when a new
				villain emerges with a brilliant and dangerous plot that threatens everything. But with
				Frozone by their side, the Parrs can take on anything.
			</Description>
		</Container>
	)
}

export default Detail

const Container = styled.div`
	min-height: calc(100vh-70px);
	padding: 0px calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;
	display: block;
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

    @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

	&:hover {
		background: rgb(198, 198, 198);
	}

    img {
      width: 25px;
    }
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
