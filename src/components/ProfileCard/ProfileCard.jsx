import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const ProfileCard = ({ image, name, title, description, link }) => {
  return (
    <div className="p-5 h-[550px] md:h-[580px]">
      <div className="flex justify-center pb-3">
        <img src={image} alt={name} width="50%" />
      </div>
      <div>
        <h2 className="font-bold text-2xl text-center">{name}</h2>
        <h3 className="font-bold text-xl text-center text-[#06B13D] pt-2 pb-3">{title}</h3>
        <p className='text-xl'>{description}</p>
      </div>
      <div className="flex justify-center">
        <Link to={link}>
          <Button children="Read More" className="px-3 py-2 mt-2 md:mt-3 lg:mt-5 text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
