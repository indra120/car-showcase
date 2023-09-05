'use client'

import Image from 'next/image'

const CustomButton = (props: CustomButtonProps) => (
  <button
    disabled={props.isDisabled}
    type={props.btnType || 'button'}
    className={`custom-btn ${props.containerStyles}`}
    onClick={props.handleClick}
  >
    <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>
    {props.rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={props.rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
)

export { CustomButton }
