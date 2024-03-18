import React from 'react'

const FormComponents = ({type, name, label, placeholder="", ...rest}) => {
  return (
    <div className='flex flex-col space-y-2'>
        <label className=' text-md' htmlFor={name}>{label}</label>
        <input {...rest} className= {`px-4 py-2  border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none  text-sm rounded-lg`} type={name} name={name} placeholder={placeholder}  />
    </div>
  )
}

export default FormComponents