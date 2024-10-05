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

export function BlackHighlight({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) {
  return (
    <span className={`${className} bg-gray-900 text-white rounded-md px-2 font-semibold`}>
      {
        children
      }
    </span>
  );
}

export function WhiteHighlight({
  className,
  children
}: {
  className?: string,
  children: React.ReactNode
}) {
  return (
    <span className={`${className} bg-gray-900 text-white rounded-md px-2 font-semibold`}>
      {
        children
      }
    </span>
  );
}
