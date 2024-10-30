import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/chart/')({
  component: ChartPage,
})

function ChartPage() {
  return(
    <div>Графики</div>
  )
}