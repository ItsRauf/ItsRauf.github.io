import { h } from 'preact';
import type { RoutableProps } from 'preact-router';

function NotFound(props: RoutableProps) {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="font-sans text-6xl font-extrabold leading-none text-justify text-purple-400">
          404
        </p>
      </div>
    </div>
  );
}

export default NotFound;
