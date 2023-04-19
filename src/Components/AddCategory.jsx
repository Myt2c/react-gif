import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChangeInput = (e) =>{
      setInputValue(e.target.value)

    }
    const onSubmitForm = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;

        // setCategories( categories => [...categories,inputValue])
        setInputValue('');
        onNewCategory(inputValue.trim());
        
        
    }

    return (
      <form onSubmit={onSubmitForm}>
        <input

          type="text"
          placeholder="Buscar"
          value={inputValue}
          onChange={handleChangeInput}

        />

      </form>
      
    )
}

export default AddCategory