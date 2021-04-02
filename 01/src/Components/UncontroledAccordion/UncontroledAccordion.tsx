import React, {useReducer} from "react";
import {reducer} from "./Reducer";

type AccordionPropsType = {
    title: string
}


function UncontrolledAccordion(props: AccordionPropsType) {
    //let [collapsed,setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            {/* <AccordionTitle title={ props.title }
                               onClick={() => { setCollapsed(!collapsed) }}/>
            { !collapsed && <AccordionBody/>}*/}
            <AccordionTitle title={props.title}
                            onClick={() => {
                                dispatch({type: 'TOGGLE-COLLAPSED'} as const)
                            }}/>
            {!state.collapsed && <AccordionBody/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={() => {
                props.onClick()
            }}>{props.title}</h3>
        </div>
    );
}

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );

}

export default UncontrolledAccordion;