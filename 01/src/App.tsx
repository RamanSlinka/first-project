import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontroledAccordion/UncontroledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/OnOff";
import {UncontrolledInput, UncontrolledInputWithButton} from "./Components/Uncontrolled_Input/UncontrolledInput";


function App () {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={'App'}>
            <PageTitle title={'This is APP components'}/>
            {/* <PageTitle title={'Hello my friends'}/>*/}
            <OnOff/>
            <UncontrolledRating/>
            <UncontrolledAccordion title={'Menu :  (click)'}/>



            <Accordion title={'Users :  (click)'}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)} } />

            <UncontrolledOnOff on={!accordionCollapsed} onChange={(on) => {setAccordionCollapsed(on)}}/>
            {/*<UncontrolledOnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledInput/>
            <UncontrolledInputWithButton/>
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
