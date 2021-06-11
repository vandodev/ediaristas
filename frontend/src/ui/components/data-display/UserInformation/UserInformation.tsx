import React from 'react';
import {
  UserInformationContainer,
  AvatarStyled,
  UserName,
  RatingStyled,
  UserDescription,
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation = () => {
  return (
    <div>
      <UserInformationContainer>
        <AvatarStyled src={'https://github.com/vandodev.png'}/>
        <UserName>Evandro</UserName>
        <RatingStyled readOnly value={3}/>
        <UserDescription>Morro Agudo</UserDescription>
      </UserInformationContainer>
    </div>
  );
}

export default UserInformation;