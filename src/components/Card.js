import React from "react";
import styled from "styled-components";
import Button from "./Button";
const CardDivider = styled.span`
  background-color: #e0e0e0;
  width: 40%;
`;

const BtnBodyHeaderContainer = styled.div`
  margin: 5px 0px 20px 20px;
`;

const Body = styled.p`
  letter-spacing: 0.5px;
  font-size: 18px;
  line-height: 28px;
`;

const ButtonsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const renderButtons = (label, variant, onClickHandler) => {
  return (
    <Button
      label={label ? label : "Button"}
      variant={variant}
      onClick={onClickHandler ? onClickHandler : () => {}}
    />
  );
};
const Card = props => {
  const {
    divider,
    src,
    leftButtonLabel,
    rightButtonLabel,
    leftButtonOnClickHandler,
    rightButtonOnClickHandler,
  } = props;
  return (
    <article className={props.className} style={props.style}>
      {divider && (
        <CardDivider>
          <img src={src ? src : ""} style={{ width: "100%" }} />
        </CardDivider>
      )}
      <BtnBodyHeaderContainer className={props.btnBodyHeaderContainer}>
        <h1>{props.title}</h1>
        <Body>{props.body}</Body>
        <ButtonsContainer className={props.buttonsContainerClass}>
          {renderButtons(
            leftButtonLabel,
            "btnPrimaryOutlined",
            leftButtonOnClickHandler
          )}
          {renderButtons(
            rightButtonLabel,
            "btnPrimaryOutlined",
            rightButtonOnClickHandler
          )}
        </ButtonsContainer>
      </BtnBodyHeaderContainer>
    </article>
  );
};

export default Card;
