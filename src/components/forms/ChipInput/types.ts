import { InputHTMLAttributes } from "react";

export type ChipInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  placeholder?: string;
  label?: string;
  onAdd?: (tag: string) => void;
  onRemove?: (tag: string) => void;
  defaultValue?: string[]
  value?: string[]
  onChange?: (value: string[]) => void
}

export type ChipItemProps = {
  tag: string
  onRemove: (tag: string) => void;
}
