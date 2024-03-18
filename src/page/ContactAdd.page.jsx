import React, { useState } from 'react'
import FormComponents from '../components/Form.components';
import ButtonComponents from '../components/Button.components';

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  })
  const handleChange = (e) => {
    setFormData(pre => ({...pre, [e.target.name]: e.target.value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className=' h-full w-full flex items-center justify-center'>
      <div className=' border bg-slate-50 shadow-md p-10 rounded-lg w-3/5 h-auto'>
        <h1 className=' text-center text-xl'>Create Your Contact</h1>
        <form onSubmit={handleSubmit} className=' space-y-5'>
          <FormComponents onChange={handleChange} value={formData.name} label={"Name"} type="text" name="name" />
          <FormComponents onChange={handleChange} value={formData.phone} label={"Phone"} type="text" name="phone" />
          <FormComponents onChange={handleChange} value={formData.email} label={"Email"} type="text" name="email" />
          <FormComponents onChange={handleChange} value={formData.address} label={"Address"} type="text" name="address" />
          <ButtonComponents >Create</ButtonComponents>
        </form>
      </div>
    </div>
  )
}

export default ContactAddPage