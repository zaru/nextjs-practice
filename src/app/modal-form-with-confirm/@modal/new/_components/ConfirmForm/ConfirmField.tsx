interface Props {
  label: string;
  name: string;
  defaultValue: string;
}
export function ConfirmField(props: Props) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type="hidden"
        id={props.name}
        name={props.name}
        defaultValue={props.defaultValue}
      />
      <p>{props.defaultValue}</p>
    </div>
  );
}
