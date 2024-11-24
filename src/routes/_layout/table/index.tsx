import { createFileRoute } from '@tanstack/react-router'
import { TableComponent } from '../../../widgets/table'
import { useState } from 'react'
import { meteoReport } from '../../../shared/types/report'
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import AccidentCell from '../../../widgets/table/ui/AccidentCell'

export const Route = createFileRoute('/_layout/table/')({
  component: TablePage,
})

const reportData:meteoReport[] = [
  {
    id: "143",
    name: "500Кв Бал. АЭС - Куйб #1",
    date: "24-10-2018 22:23",
    accident: 73,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:9.3,
    humidity: 84,
    door:true
  },
  {
    id: "23",
    name: "500Кв Бал. АЭС - Куйб #2",
    date: "24-10-2018 22:23",
    accident: 63,
    icing: 37.2,
    windForce:5.0,
    batteryCharge:13.0,
    temp:7.9,
    humidity: 84,
    door:false
  },
  {
    id: "7",
    name: "500Кв Бал. АЭС - Куйб #1",
    date: "24-10-2018 22:23",
    accident: 73,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:7.9,
    humidity: 84,
    door:true
  },
  {
    id: "8",
    name: "500Кв Бал. АЭС - Куйб #2",
    date: "24-10-2018 22:23",
    accident: 10,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:8,
    humidity: 84,
    door:false
  },
  {
    id: "10",
    name: "500Кв Бал. АЭС - Куйб #2",
    date: "24-10-2018 22:23",
    accident: 58,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:8,
    humidity: 84,
    door:false
  },
  {
    id: "4",
    name: "500Кв Бал. АЭС - Куйб #2",
    date: "24-10-2018 22:23",
    accident: 73,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:8,
    humidity: 84,
    door:false
  },
  {
    id: "15",
    name: "500Кв Бал. АЭС - Куйб #2",
    date: "24-10-2018 22:23",
    accident: 20,
    icing: 45.2,
    windForce:5.0,
    batteryCharge:12.8,
    temp:8,
    humidity: 84,
    door:false
  },
]

const columnHelper = createColumnHelper<meteoReport>()

const columns = [
  columnHelper.accessor('id',{
    header: "ID"
  }),
  columnHelper.accessor('name',{
    header:"Наименование линии"
  }),
  columnHelper.accessor('date',{
    header:"Дата"
  }),
  columnHelper.accessor('accident',{
    header:"Вероятность Аварии",
    cell: (info)=><AccidentCell accidentProp={info.getValue()}/>
  }),
]

function TablePage(){
  const [data,setData] = useState<meteoReport[]>([...reportData])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    state:{
      columnFilters
    },
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })


  return(
    <TableComponent  table={table}/>
  )
}