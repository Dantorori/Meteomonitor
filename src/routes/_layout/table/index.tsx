import { createFileRoute } from '@tanstack/react-router'
import { TableComponent } from '../../../widgets/table'
import { useState } from 'react'
import { meteoReport } from '../../../shared/types/report'
import { ColumnFiltersState, createColumnHelper, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'

export const Route = createFileRoute('/_layout/table/')({
  component: TablePage,
})

const reportData:meteoReport[] = [
  {
    id: "asdfwer",
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
    id: "asdfwer",
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
    id: "asdfwer",
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
    id: "asdfwer",
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
]

const columnHelper = createColumnHelper<meteoReport>()

const columns = [
  columnHelper.accessor('name',{
    header:"Наименование линии"
  }),
  columnHelper.accessor('date',{
    header:"Дата"
  }),
  columnHelper.accessor('accident',{
    header:"Вероятность Аварии",
    cell: (info)=>{return(
      <span>{info.getValue()}%</span>
    )}
  }),
  columnHelper.accessor('icing',{
    header:"Гололёд",
    cell: (info)=>{return(
      <span>{info.getValue()}кг</span>
    )}
  }),
  columnHelper.accessor('windForce',{
    header:'Сила ветра',
    cell: (info)=>{return(
      <span>{info.getValue()}м/с</span>
    )}
  }),
  columnHelper.accessor('batteryCharge',{
    header:"Заряд АКБ",
    cell: (info)=>{return(
      <span>{info.getValue()}V</span>
    )}
  }),
  columnHelper.accessor('humidity',{
    header:"Влажность",
    cell: (info)=>{return(
      <span>{info.getValue()}%</span>
    )}
  }),
  columnHelper.accessor('door',{
    header:'Дверца',
    cell: (info)=>{return(
      <span>{info.getValue()?"Открыта":"Закрыта"}</span>
    )}
  })
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