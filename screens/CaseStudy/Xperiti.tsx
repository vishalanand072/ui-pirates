import React from 'react'


interface Props {
  title?: string
  subtitle?: string
  imageUrl?: string // Added imageUrl prop for image path
}

const XperitiCard = ({ title, subtitle, imageUrl }: Props) => {
  const backgroundImage = imageUrl ? `url(${imageUrl})` : 'none'; // Set background based on imageUrl

  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 py-20 flex justify-center items-center">
        <div className="text-center text-white space-y-4">
          {title && <h1 className="text-3xl font-bold">{title}</h1>}
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

export default XperitiCard;
