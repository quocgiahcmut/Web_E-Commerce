import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormGroup from "@mui/material/FormGroup"
import { useState } from "react"

interface Props {
  items: string[]
  checked?: string[]
  onChange: (items: string[]) => void
}

function CheckboxButtons({ items, checked, onChange }: Props) {
  const [checkedItems, setCheckedItems] = useState(checked || [])

  function handleChecked(value: string) {
    const currentIndex = checkedItems.findIndex(item => item === value)
    let newChecked: string[] = []
    if (currentIndex - 1) newChecked = [...checkedItems, value]
    else newChecked = checkedItems.filter(item => item !== value)
    setCheckedItems(newChecked)
    onChange(newChecked)
  }

  return (
    <FormGroup>
      {items.map(item => (
        <FormControlLabel 
          control={<Checkbox 
            checked={checkedItems.indexOf(item) !== -1}
            onClick={() => handleChecked(item)}
          />} 
          label={item}
          key={item} 
        />
      ))}
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
  )
}

export default CheckboxButtons