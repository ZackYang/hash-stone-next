import exp from 'constants';
import React from 'react';

export function Highlight({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <span className="underline">
      {
        children
      }
    </span>
  );
}

export function ReverseHighlight({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <span className="bg-white text-black rounded-md px-2 font-semibold">
      {
        children
      }
    </span>
  );
}
