import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons/lib';

export interface IFieldProps {
	error?: FieldError;
	Icon?: IconType;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}
