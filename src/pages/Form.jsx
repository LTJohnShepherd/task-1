import React from 'react'
import { useForm } from 'react-hook-form'

export default function Form() {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const onSub = (bodyData) => {
    delete bodyData.email2;
    delete bodyData.check;
    console.log(bodyData);

  }

  return (
    <div className='container'>
      <h3>Order form</h3>
      <form onSubmit={handleSubmit(onSub)} className='col-md-5'>
        <label>Name:</label>
        <input {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
        {errors.name && <div className='text-danger'>* Name invalid (min 2 chars)</div>}
        <label>Email:</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
        {errors.email && <div className='text-danger'>* Email invalid</div>}
        <label>Email again:</label>
        <input {...register("email2", { required: true, validate: val => val == getValues("email") })} type="text" className='form-control' />
        {errors.email2 && <div className='text-danger'>* Emails not match</div>}
        <input {...register("check", { required: true })} type="checkbox" className='' />
        <label className='p-2'>I confirm my order</label>
        {errors.check && <div className='text-danger'>* Please check the box</div>}
        <div className='mt-3'>
          <button className='btn btn-dark mt-3'>Order</button>
        </div>
      </form>
    </div>
  )
}
