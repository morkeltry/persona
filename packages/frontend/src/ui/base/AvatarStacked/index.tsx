import { styled } from "styled-components";

const Root = styled.div<{ height: number }>`
  display: flex;
  align-items: center;
  min-height: ${({ height }) => `${height}px`};
`;
const ImageContainer = styled.div<{ width: number }>`
  position: relative;
  min-height: 24px;
  display: flex;
  align-items: center;
  width: ${({ width }) => width}px;
`;
const Image = styled.img<{
  size: number;
  index: number;
  left: number;
  circle?: boolean;
}>`
  position: absolute;
  ${({ theme: { type }, circle, index, left, size }) => `
    border-radius: ${circle ? "50%" : "4px"};
    width: ${size}px;
    height: ${size}px;
    border: 2px solid ${type === "dark" ? "#0d0d0d" : "#fff"};
    left: ${left}px;
    z-index: ${index};
  `}
`;
const StackedRemaining = styled.div<{
  size: number;
  index: number;
  left: number;
  fontSize: number;
  circle?: boolean;
}>`
  position: absolute;
  border: 1.823px solid var(--slate-300, #cbd5e1);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-700, #374151);
  font-family: Satoshi;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 29.175px; /* 182.347% */
  ${({ theme: { type }, circle, index, left, size, fontSize }) => `
    font-size: ${fontSize}px;
    border-radius: ${circle ? "50%" : "4px"};
    width: ${size}px;
    height: ${size}px;
    left: ${left}px;
    z-index: ${index};
    `}
`;
const Members = styled.div`
  font-size: 10px;
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
export interface AvatarStackedProps {
  avatars: string[];
  stackNumber: number;
  displayCount?: boolean;
  countLiteral?: string;
  memberCount: number;
  circle?: boolean;
  avatarViewSpan?: number;
  size?: number;
  stackRemaining?: boolean;
  fontSize?: number;
}
export const AvatarStacked: React.FC<AvatarStackedProps> = ({
  avatars,
  stackNumber,
  memberCount = 0,
  displayCount,
  countLiteral = "Members",
  circle,
  avatarViewSpan = 15,
  size = 24,
  stackRemaining,
  fontSize = 16,
}) => {
  avatars.splice(stackNumber);
  return (
    <Root height={size}>
      <ImageContainer width={avatarViewSpan * (avatars.length || 0) + 10}>
        {avatars?.map((item, index) => {
          return (
            <Image
              size={size}
              circle={circle}
              left={avatarViewSpan * index}
              key={`avatars-stack-${index}`}
              index={100 + index}
              src={item}
              alt={item}
            />
          );
        })}
        {stackRemaining &&
          displayCount &&
          memberCount > 0 &&
          memberCount > stackNumber && (
            <StackedRemaining
              {...{
                size,
                circle,
                left: avatarViewSpan * avatars.length,
                index: 100 + avatars.length,
                fontSize,
              }}
            >
              + {memberCount - stackNumber}
            </StackedRemaining>
          )}
      </ImageContainer>
      {!stackRemaining && displayCount && memberCount > 0 && (
        <Members>
          +{memberCount} {countLiteral}
        </Members>
      )}
    </Root>
  );
};
