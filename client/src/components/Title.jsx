import React from 'react'
import clsx from 'clsx'
const Title = ({title, className}) => {
  return (
    <div>
        <h2 className={clsx("text-2xl font-semibold capitalize", className)}>
            {title}
        </h2>
      
    </div>
  )
}

export default Title
