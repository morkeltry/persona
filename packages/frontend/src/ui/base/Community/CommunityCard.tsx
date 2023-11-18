import { Card } from "antd";
import React from "react";
import { styled } from "styled-components";
import { AvatarStacked, AvatarStackedProps, FeaturedIcon } from "ui/base";
import { IColorScheme } from "ui/utils";

const StyledCard = styled(Card)`
  min-width: 257px;
  min-height: 273px;
  flex-shrink: 0;
  position: relative;
  border-radius: 12px;
  border: solid 1px #fff;
  background: ${({ theme: { type } }) =>
    type === "dark" ? "#0d0d0d" : "#fff"};
  box-shadow: 2.7268171310424805px -5.453634262084961px 13.634085655212402px 0px
      rgba(0, 0, 0, 0.12) inset,
    -2.7268171310424805px 5.453634262084961px 13.634085655212402px 0px rgba(
        0,
        0,
        0,
        0.12
      ) inset;
`;
const Description = styled.div<{ featured?: boolean }>`
  height: ${({ featured }) => (featured ? "40px" : "20px")};
  overflow: hidden;
  font-size: 12px;
  font-family: Satoshi;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
    color: #fff;
  `
      : `
    color: #60646d;
  `}
`;

const Text = styled.div`
  font-size: 24px;
  font-family: Satoshi;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
  ${({ theme: { type } }) =>
    type === "dark"
      ? `
    color: #fff;
  `
      : `
    color: #374151;
  `}
`;
const ImageContainer = styled.div`
  height: 157px;
  position: relative;
  background: ${({ theme: { colors } }) => (colors as IColorScheme).primary};
  border-radius: 12px 12px 0 0;
  .ant-card .ant-card-cover img {
    border-radius: 12px 12px 0 0;
  }
`;
const Image = styled.img`
  width: 100%;
  min-width: 257px;
  height: 157px;
  flex-shrink: 0;
`;

const Avatar = styled.div<{ image: string }>`
  position: absolute;
  width: 84px;
  height: 78px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1.8px solid var(--white-100, #fff);
  top: 60%;
  left: 25px;
  background: lightgray url("${({ image }) => image}") 50% / cover no-repeat;
`;
const StyledFeaturedIcon = styled(FeaturedIcon)`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
export interface CommunityCardProps
  extends Omit<AvatarStackedProps, "stackNumber" | "displayCount"> {
  name: string;
  description?: string;
  avatar: string;
  banner?: string;
  featured?: boolean;
  onClick: React.MouseEventHandler;
}
export const CommunityCard: React.FC<CommunityCardProps> = ({
  name,
  description,
  avatar,
  banner,
  onClick,
  featured,
  ...memberInfo
}) => {
  return (
    <StyledCard
      onClick={onClick}
      hoverable
      // style={{ width: 200 }}
      cover={
        <ImageContainer>
          {banner && <Image alt={banner} src={banner} />}
          {avatar && <Avatar image={avatar} />}
        </ImageContainer>
      }
    >
      <Card.Meta
        title={<Text>{name}</Text>}
        description={
          <Description featured={featured}>
            {description?.substring(0, 250)}
          </Description>
        }
      />
      <AvatarStacked stackNumber={4} {...memberInfo} displayCount />
      {featured && <StyledFeaturedIcon />}
    </StyledCard>
  );
};
