import React from "react";
import styled from "styled-components";
import playbutton1 from "../images/play-icon-black.png";
import playbutton2 from "../images/play-icon-white.png";
import groupWatchbtn from "../images/group-icon.png";
const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://pixarplanet.com/blog/wp-content/uploads/2019/01/bao.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1FFF42ED12C8E524BC75E9EAFF60146142FB93317CC1D2081A0F2A51CEB6B981/scale?width=1440&aspectRatio=1.78&format=png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src={playbutton1} />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={playbutton2} />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatcButton>
          <img src={groupWatchbtn} />
        </GroupWatcButton>
      </Controls>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opactity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  backgrounf: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  bordewr: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatcButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;
