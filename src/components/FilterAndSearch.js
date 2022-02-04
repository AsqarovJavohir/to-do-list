import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

function FilterAndSearch({filter, setFilter}) {
    return (
        <div className="d-flex justify-content-between my-2">
        <MyInput
          placeholder="Search..."
          className="form-control"
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
        /> 
        <MySelect
          value={filter.sort}
          onChange={selected => setFilter({...filter, sort: selected})}
          defaultValue="Sorted by"
          options={[
            {value: "title", name: "Programming"},
            {value: "stack", name: "Jobs"}
          ]}
        />
      </div>
    );
}
export default FilterAndSearch;