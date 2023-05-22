export function LinkBook({ value, column, row }) {
  console.log("aqu esta: "+row.original[column.urlAccessor])
  return (
       <a href={row.original[column.urlAccessor]} className="no-underline hover:underline ...">Link</a>
       
  );
}