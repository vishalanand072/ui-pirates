import React from 'react';

const XperitiCard: React.FC = () => {
  const backgroundImageUrl = 'https://www.figma.com/design/0PiY8LYUZG9LxqI948IWaf/UI-Pirates?node-id=1429-1823&t=EwUe7ZgKEuRc0ZNZ-4'; // Replace this with the actual path to your image

  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-16 left-16 text-white p-6">
        <h1 className="text-5xl font-bold mb-4">Xperiti</h1>
        <p className="text-2xl">An Ipsos Company</p>
      </div>
    </div>
  );
};

export default XperitiCard;
