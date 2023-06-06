import "bootstrap/dist/css/bootstrap.css";
export default function Selector(props) {
  return (
    <>
      <label className="form-label" htmlFor={props.name}>
        {props.label}:{" "}
      </label>
      <select
        name={props.name}
        data-testid={"selector"}
        className="form-select form-select-lg"
        value={props.value}
        onChange={(event) => {
          console.log("select");
          props.onChange(event.target.value);
        }}
      >
        {props.options.map((option) => {
          return (
            <option
              value={option.value}
              key={option.label}
              data-testid={`option-${option.value}`}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
