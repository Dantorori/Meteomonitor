import { flexRender, Table } from "@tanstack/react-table";

interface TableComponentProps<T> {
  table: Table<T>;
}

export const TableComponent = <T,>({ table }: TableComponentProps<T>) => {
  return (
    <div className="mb-10">
      <table className="w-full text-left">
        <thead className="border-b-2 border-neutral-200 bg-neutral-100 text-neutral-700">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="py-3 first:pl-3"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-b-2 odd:bg-white even:bg-neutral-50 hover:bg-neutral-100"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2 first:pl-3">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};
