import React from 'react'
import SnackPicturesList from './SnackPicturesList'
import SnackInfos from './SnackInfos'

export default function SnackPage({
  snacksData,
  setScrollYPosition,
  scrollYPosition
}) {
  return (
    <>
      <SnackPicturesList
        snacksData={snacksData}
        setScrollYPosition={setScrollYPosition}
      />
      <SnackInfos snacksData={snacksData} scrollYPosition={scrollYPosition} />
    </>
  )
}
