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
import Charts from "../../../widgets/charts";

export const Route = createFileRoute("/_layout/table/")({
  component: TablePage,
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

function TablePage() {
  const [data, setData] = useState<meteoReport[]>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  useEffect(() => {
    fetch("http://meteomonitoring.ru:8080/pole_prediction/1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);

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
      <Charts />
    </>
  );
}
