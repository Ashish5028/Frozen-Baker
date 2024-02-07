import { Controller } from "react-hook-form";
import Input from "../component/input";

export default function FormInput({
  name,
  label,
  helperText,
  placeholder,
  control,
  rules,
  type,
  require,
}) {
  return (
    <Controller
      defaultValue={""}
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        formState: { errors },
      }) => (
        <Input
          errors={errors}
          label={label}
          helperText={helperText}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          require={require}
        ></Input>
      )}
    />
  );
}
