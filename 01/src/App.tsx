import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontroledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/OnOff";
import {UncontrolledInput, UncontrolledInputWithButton} from "./Components/Uncontrolled_Input/UncontrolledInput";
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./Components/controlled_input/ControledInput";
import Factorial from "./Components/Factorial/Factorial";
import ReactMemo from "./Components/ReactMemo";
import LikeUseCallback from "./Components/UseCallback";
import {UseStateComponent} from "./Components/UseState";
import {UseEffectComponent} from "./Components/UseEffect";
import {Clock} from "./Components/Clock/Clock";
import {ResetUseEffect} from "./Components/ResetUseEffect/ResetUseEffect";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    /* const onClickCallback = () => { (value) => {console.log(value)}}*/

    return (
        <div className={'App'}>

            <PageTitle title={'This is APP components for study'}/>
            {/* <PageTitle title={'Hello my friends'}/>*/}
            <OnOff/>
            <UncontrolledRating/>
            <UncontrolledAccordion title={'Menu :  (click)'}/>


            <Accordion
                items={
                    [
                        {title: 'Raman', value: 1},
                        {title: 'Anna', value: 2},
                        {title: 'Sofia', value: 3},
                        {title: 'Robert', value: 4}
                    ]
                }
                onClick={(title) => {
                    console.log(title)
                }}
                title={'Users :  (click)'}
                collapsed={accordionCollapsed}
                onChange={() => {
                    setAccordionCollapsed(!accordionCollapsed)
                }}/>

            <UncontrolledOnOff on={!accordionCollapsed} onChange={(on) => {
                setAccordionCollapsed(on)
            }}/>
            {/*<UncontrolledOnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <UncontrolledInput/>
            <UncontrolledInputWithButton/>
            <hr/>
            <p>Inputs controlled (for state)</p>
            <ControlledSelect/>
            <ControlledCheckbox/>
            <ControlledInput/>
            <hr/>
            <ReactMemo/>
            <hr/>
            <Factorial/>
            <hr/>
            <LikeUseCallback/>
            <hr/>
            <UseStateComponent/>
            <hr/>
            <UseEffectComponent/>
            <hr/>
            <Clock/>
            <hr/>
            <ResetUseEffect/>
        </div>

    );
}


type PagePropsTitle = {
    title: string
}

function PageTitle(props: PagePropsTitle) {

    return (
        <h1>{props.title}</h1>
    );
}


export default App;
