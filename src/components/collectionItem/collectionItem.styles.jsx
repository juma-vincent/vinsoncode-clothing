import styled from "styled-components";
import CustomButton from "./../customButton/customButton";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    button {
      opacity: 0.85;
      display: flex;
      height: 40px;
    }
    height: 200px;
    width: 40vw;
  }
`;
export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and (max-width: 800px) {
    top: 120px;
    width: 30vw;
    font-size: 12px;
  }
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;
