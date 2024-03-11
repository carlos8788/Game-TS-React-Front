import React, { ReactNode } from 'react';

interface PlayerProps {
  children: ReactNode;
}

const Player: React.FC<PlayerProps> = ({ children }) => {
  return <main>{children}</main>;
}

export default Player;