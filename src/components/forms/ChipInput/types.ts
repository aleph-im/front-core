import { InputHTMLAttributes } from "react";

export type ChipInputProps = InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  label?: string;
  onAdd?: (tag: string) => void;
  onRemove?: (tag: string) => void;
}

export type ChipItemProps = {
  tag: string
  onRemove: (tag: string) => void;
}
