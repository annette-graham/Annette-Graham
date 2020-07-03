import React from 'react'

const Input = ({
		className,
    label, 
    name,
    onChange,
    placeholder,
    tag,
    type,
    value
}) => {

    const Tag = tag

    return (
			<div className='field'>
				<label className='form-label'>{label}</label>
				<Tag 
					className={className}
					type={type}
					name={name} 
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
		</div>
  )
}

export default Input