'use client'
import React from 'react';

interface TopBarProps {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const TopBar = ({ left, center, right }: TopBarProps) => {
  return (
    <div className="w-full h-12 bg-gray-800 text-white flex items-center px-4">
      <div className="flex-1 flex items-center">{left}</div>
      <div className="flex-1 text-center">{center}</div>
      <div className="flex-1 flex justify-end items-center">{right}</div>
    </div>
  );
};

export default TopBar;
