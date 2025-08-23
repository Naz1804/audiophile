
const Input = ({ name, id, place, type, widthsize, autocomplete}) => {
  return (
    <div className={`flex flex-col ${widthsize}`}>
      <label htmlFor={id} className="pb-1">{name}</label>
      <input type={type} name={name} id={id} placeholder={place} autoComplete={autocomplete} required/>
    </div>
  )
}

export default Input