import { ReactElement } from "react";
import { Reasons, ReasonsImg, ReasonsWrapper } from "./ReasonsSection.styled";

export const ReasonsSection = (): ReactElement => {
  return (
    <ReasonsWrapper id="reasons">
      <ReasonsImg>
        <img alt="reasons" src="./assets/reasons.svg" />
      </ReasonsImg>
      <Reasons>
        <span>REASONS</span>
        <h2>
          Why would you start learning{" "}
          <span>
            English? <img alt="circle" src="./assets/circle.svg" />
          </span>
        </h2>
        <p>
          <span>1</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>2</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>3</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
        <p>
          <span>4</span>
          Lorem ipsum dolor sit amet, consectetur ad Lorem ipsum dolor sit amet
        </p>
      </Reasons>
    </ReasonsWrapper>
  );
};
