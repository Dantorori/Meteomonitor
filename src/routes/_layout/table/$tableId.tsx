import { createFileRoute } from "@tanstack/react-router";
import { TableComponent } from "../../../widgets/table";
import { useEffect, useState } from "react";
import { meteoReport } from "../../../shared/types/report";
import {
  ColumnFiltersState,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import AccidentCell from "../../../widgets/table/ui/AccidentCell";

export const Route = createFileRoute("/_layout/table/$tableId")({
  component: TableId,
});

const columnHelper = createColumnHelper<meteoReport>();

const columns = [
  columnHelper.accessor("pole_id", {
    header: "ID",
  }),
  columnHelper.accessor("line_name", {
    header: "Наименование линии",
  }),
  columnHelper.accessor("created_at", {
    header: "Дата",
  }),
  columnHelper.accessor("max_probability", {
    header: "Вероятность Аварии",
    cell: (info) => <AccidentCell accidentProp={info.getValue()} />,
  }),
];

function TableId() {
  const [data, setData] = useState<meteoReport[]>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const { tableId } = Route.useParams();
  useEffect(() => {
    fetch(`http://meteomonitoring.ru:8080/pole_prediction/${tableId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, [tableId]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <>
      <TableComponent table={table} />
    </>
  );
}
