import {Pressable} from 'react-native'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Button = ({children, className, ...props}) => {
  return (
    <Pressable className={twMerge("justify-center items-center w-[330px] h-14 rounded-lg p-3", className)} {...props}>
        {children}
    </Pressable>
  )
}

export default Button