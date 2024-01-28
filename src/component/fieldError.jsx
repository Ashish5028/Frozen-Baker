export default function FieldError({ name, errors }) {
  return (
    <>
      {errors && errors[name]?.type === "required" && (
        <div className="text-xs text-rose-600 py-1">
          {errors[name]?.message}
        </div>
      )}
      {errors && errors[name]?.type === "minLength" && (
        <div className="text-xs text-rose-600 py-1">
          {errors[name]?.message}
        </div>
      )}
      {errors && errors[name]?.type === "maxLength" && (
        <div className="text-xs text-rose-600 py-1">
          {errors[name]?.message}
        </div>
      )}
    </>
  );
}
