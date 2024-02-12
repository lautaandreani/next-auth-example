'use client'
import { useForm } from 'react-hook-form'

type FormValues = {
  email: string
  username: string
  password: string
  repeatPassword: string
}

const RegisterPage = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = handleSubmit(async (data) => {
    const register = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!register.ok) console.error('Error register user')
  })

  return (
    <div className='bg-zinc-900 border border-zinc-800 w-fit p-4 rounded-md mx-auto mt-4 min-w-[20rem]'>
      <h1 className='text-white text-2xl font-bold mb-2'>Register</h1>
      <form className='max-w-sm mx-auto' onSubmit={onSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='username'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Username
          </label>
          <input
            type='username'
            id='username'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='johndoe'
            {...register('username', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.username && (
            <span className='text-red-400 text-sm space-y-1'>
              {errors.username.message}
            </span>
          )}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your email
          </label>
          <input
            type='email'
            id='email'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='johndoe@example.com'
            {...register('email', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.email && (
            <span className='text-red-400 text-sm space-y-1'>
              {errors.email.message}
            </span>
          )}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Your password
          </label>
          <input
            type='password'
            id='password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='******'
            {...register('password', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.password && (
            <span className='text-red-400 text-sm space-y-1'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='mb-5'>
          <label
            htmlFor='repeat-password'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Repeat password
          </label>
          <input
            type='password'
            id='repeat-password'
            className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light'
            placeholder='******'
            {...register('repeatPassword', {
              required: {
                value: true,
                message: 'This field is required',
              },
            })}
          />
          {errors.repeatPassword && (
            <span className='text-red-400 text-sm space-y-1'>
              {errors.repeatPassword.message}
            </span>
          )}
        </div>
        <button
          type='submit'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Register new account
        </button>
      </form>
    </div>
  )
}
export default RegisterPage
