export default function AccidentCell({ accidentProp }: { accidentProp: number }) {
  if (accidentProp >= 70) {
    return(
      <div className="flex items-center gap-2">{accidentProp}% <div className="w-[20px] h-[20px] bg-red-500 rounded-full"></div></div>
    )
  }
  if(accidentProp >= 45) {
    return(
      <div className="flex items-center gap-2">{accidentProp}% <div className="w-[20px] h-[20px] bg-yellow-400 rounded-full"></div></div>
    )
  }
  return(
    <div className="flex items-center gap-2">{accidentProp}% <div className="w-[20px] h-[20px] bg-green-400 rounded-full"></div></div>
  )
}
