import {useEffect, useState} from "react";

type PropsType = {

}
const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

 export const Clock = (props: PropsType) => {
    const [date, setDate] = useState(new Date())

     useEffect(() => {
         const intervalID = setInterval(() => {
             setDate(new Date())
         }, 1000)
         return () => {
             clearInterval(intervalID)
         }

     }, [])



     const hoursString = get2DigitsString(date.getHours())
     const minutesString = get2DigitsString(date.getMinutes())
     const secondsString = get2DigitsString(date.getSeconds())

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}