import React from 'react'

const user = (props) => {
  return (
    <div className="bg-black text-white w-full p-2" key={props.id}>{props.val.fullName}</div>
  )
}

export default user