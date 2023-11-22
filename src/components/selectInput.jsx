export function SelectInput({title,children, name, onChange, value}) {
  return(
    <div className="col-12 col-sm-4 form-group">
      <label htmlFor={name} className="form-label mt-4 me-3 fs-4">{title}:</label>
      <select className="form-select fs-5" id={name} name={name} onChange={onChange} value={value} required>
        { 
          children
        }
      </select>
    </div>
  )
}