import { Link, linkOptions } from "@tanstack/react-router";

const options = [
  linkOptions({
    to:'/',
    label:"Домашняя страница",
    activeOptions:{ exact: true }
  }),
  linkOptions({
    to:'/table',
    label:"Таблица",
    activeOptions:{ exact: true }
  }),
  linkOptions({
    to:'/chart',
    label:"График",
    activeOptions:{ exact: true }
  }),
]

export default function Header() {
  return (
    <div className="flex gap-5 border-b bg-neutral-700 text-white">
      {options.map((option)=>{
        return(
          <Link 
          {...option}
          key={option.to}
          className="[&.active]:font-bold p-3 hover:bg-neutral-200 hover:text-black"
          >{option.label}</Link>
        )
      })}
    </div>
  )
}
