interface Props {
  label: string;
  name: string;
  defaultValue?: string;
  errors?: string[];
}

export function InputField(props: Props) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.name}
        name={props.name}
        defaultValue={props.defaultValue}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      {props.errors && props.errors.length > 0 && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {props.errors}
        </p>
      )}
    </div>
  );
}
