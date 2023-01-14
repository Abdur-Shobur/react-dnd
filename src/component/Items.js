import React from 'react'

function Items({ item: e }) {
  return (
    <li
      className={`p-4 shadow mt-2 rounded text-xl cursor-move ${e.color.bg} ${e.color.text}`}
    >
      List{' '}
    </li>
  )
}

export default Items
