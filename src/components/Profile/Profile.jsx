import React from 'react'
import {Container, Description, Photo, Name, Location, Tag} from "./Profile.styles"

const Profile=({ avatar, tag, name, location, statis})=> {
  return (
      <Container>
            <Description>
              <Photo src={avatar}/>
              <Name>{name}</Name>
              <Tag>{tag}</Tag>
              <Location>{location}</Location>
            </Description>
          
        </Container>
  )
}

export default Profile