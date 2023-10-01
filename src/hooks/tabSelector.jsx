import { useState } from 'react'

export const useTabSelector = () => {
  const [selected, setSelected] = useState(0)

  return { selected, setSelected }
}
