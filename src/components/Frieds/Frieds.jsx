import React from 'react'
import PropTypes from "prop-types"
import { Friendlist, Friend, Status, Photo,Text} from './Friends.styled'

function Friends({ friends}) {
  return (
      <Friendlist>{
          friends.map(({ id, avatar, name, isOnline})=>(
            <Friend key={id}>
                <Status isOnline={isOnline }></Status>
                <Photo src={avatar}></Photo>
                <Text>{name}</Text>  
            </Friend>
  ))
      }</Friendlist>
  )
}
Friends.propTypes = {
    key: PropTypes.number,
    isOnline: PropTypes.bool,
    src: PropTypes.string
}
export default Friends