import React from 'react'

type TitleProps = {
    title: string
}

const Title = ({title}: TitleProps) => {
  return (
    <h1 className="text-center md:text-6xl text-2xl py-10 mb-10 font-bold">{title}</h1>
  )
}

export default Title