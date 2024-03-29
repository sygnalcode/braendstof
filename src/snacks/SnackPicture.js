import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SnackPicture.propTypes = {
  data: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired
  }).isRequired
}

export default function SnackPicture({ data }) {
  return (
    <StyledDiv>
      <img src={data.picture} alt={data.brand} />
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  scroll-snap-align: start;
`
