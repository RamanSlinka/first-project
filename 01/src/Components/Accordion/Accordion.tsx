import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div><AccordionTitle title={props.title}
        onChange={props.onChange}
        />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.onChange}>{props.title}</h3>
        </div>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType ) {
    console.log('AccordionBody rendering');


    return (
        <div>
            <ul>
                {props.items.map((i, index) =>
                    <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    )
}

export default Accordion;