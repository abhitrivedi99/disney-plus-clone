/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { auth, provider } from '../firebase'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../app/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Header = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const userName = useSelector(selectUserName)
	const userPhoto = useSelector(selectUserPhoto)

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				dispatch(
					setUserLogin({
						name: user.displayName,
						photo: user.photoURL,
						email: user.email,
					}),
				)
				history.push('/')
			}
		})
	}, [history, dispatch])

	const signIn = () => {
		auth.signInWithPopup(provider).then((result) => {
			dispatch(
				setUserLogin({
					name: result.user.displayName,
					photo: result.user.photoURL,
					email: result.user.email,
				}),
			)
			history.push('/')
		})
	}

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut())
			history.push('/login')
		})
	}

	return (
		<Nav>
			<Link to="/">
				<Logo src="/images/logo.svg" />
			</Link>
			{!userName ? (
				<LoginContainer>
					<Login onClick={signIn}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<Link to="/">
							<img src="/images/home-icon.svg" alt="home-icon" />
							<span>HOME</span>
						</Link>
						<a>
							<img src="/images/search-icon.svg" alt="search-icon" />
							<span>SEARCH</span>
						</a>
						<a>
							<img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src="/images/original-icon.svg" alt="original-icon" />
							<span>ORIGINALS</span>
						</a>
						<a>
							<img src="/images/movie-icon.svg" alt="movie-icon" />
							<span>MOVIES</span>
						</a>
						<a>
							<img src="/images/series-icon.svg" alt="series-icon" />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<UserImg onClick={signOut} src={userPhoto ? userPhoto : '/images/avtar.png'} />
				</>
			)}
		</Nav>
	)
}

export default Header

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	color: white;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`

const Logo = styled.img`
	width: 80px;
`

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 30px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: '';
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}
`

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`

const Login = styled.div`
	border: 1px solid #f9f9f9;
	padding: 8px 18px;
	border-radius: 4px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 250ms ease 0s;

	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transperent;
	}
`
const LoginContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
`
