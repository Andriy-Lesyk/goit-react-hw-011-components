import React from 'react'
import PropTypes from "prop-types"
import {Container, Description, Photo, Name, Location, Tag, StatsItems, StItem} from "./Profile.styles"

const Profile=({ avatar, tag, name, location, statis})=> {
  return (
      <Container>
            <Description>
                <Photo src={avatar}/>
                <Name>{name}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>
            <StatsItems>
                <StItem>
                    <span class="label">Followers</span>
                    <span class="quantity">{statis.followers}</span>
                </StItem>
                <StItem>
                    <span class="label">Views</span>
                    <span class="quantity">{statis.views}</span>
                </StItem>
                <StItem>
                    <span class="label">Likes</span>
                    <span class="quantity">{statis.likes}</span>
                </StItem>
            </StatsItems>
          
        </Container>
  )
}
Profile.propTypes = {
    src: PropTypes.string,
}

export default Profile