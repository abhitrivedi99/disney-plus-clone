import React from 'react'
import styled from 'styled-components'

const Movies = () => {
    return (
        <Container>
            <h3>Recommended for You</h3>
            <Content>
                <Wrap>
                    <img
                        alt="fwe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/WarOfThePlanetOfApes_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fdfwe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/GreysAnatomy_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fwfeawe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/Deadpool2_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fwefeasfe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/StarWars_RiseOfTheSkywalker_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fwgrthgrte"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/Kingsman_TheGoldenCircle_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fdwe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/Frozen2_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fwhrthrtwe"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/AvengersEndgame_MLP_en-SG.jpg"
                    />
                </Wrap>
                <Wrap>
                    <img
                        alt="fwhrtee"
                        src="https://cannonball-cdn.bamgrid.com/assets/originals/Soul_EN.jpg"
                    />
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div``
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  }
`
