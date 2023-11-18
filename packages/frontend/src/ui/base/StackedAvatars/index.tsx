import React from "react";
import Avatar, { ReactAvatarProps } from "react-avatar";
import { ITheme } from "ui/types";
import { colorScheme } from "ui/utils";

const DEFAULT_MAX_AVATARS = 5;

function renderRemaining(props: StackedAvatarProps) {
  const {
    avatars = [],
    maxAvatars = DEFAULT_MAX_AVATARS,
    size,
    ...other
  } = props;
  const remaining = avatars.length - maxAvatars;

  if (remaining < 1) return null;

  return (
    <Avatar
      {...other}
      size={size.toString()}
      value={`+${remaining}`}
      color="gray"
    />
  );
}
/*

const avatars = [
    { githubHandle: "SoorajSethumadhavan", name: "SoorajSethumadhavan" },
    { twitterHandle: "JorgenEvens", name: "Jorgen Evens" },
    { twitterHandle: "sitebase", name: "Wim Mostmans" }
  ];
  */
export interface StackedAvatarProps {
  avatars: ReactAvatarProps[];
  theme: ITheme;
  maxAvatars?: number;
  style?: React.CSSProperties;
  size: number;
  round?: boolean;
}
export function StackedAvatar(props: StackedAvatarProps) {
  const {
    avatars = [],
    maxAvatars = DEFAULT_MAX_AVATARS,
    size,
    theme,
    ...others
  } = props;
  const style = {
    border: `2px solid ${colorScheme[theme].primary}`,
    ...props.style,
    marginLeft: -(props.size / 2) + "px",
    color: colorScheme[theme].primary,
  };

  return (
    <div style={{ marginLeft: props.size / 2 }}>
      {avatars.slice(0, maxAvatars).map((avatar, idx) => (
        <Avatar
          {...avatar}
          {...others}
          key={idx}
          size={size.toString()}
          style={style}
        />
      ))}
      {renderRemaining({ ...props, style })}
    </div>
  );
}
