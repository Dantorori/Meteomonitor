import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from '../widgets/header'

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
})

function LayoutComponent() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}