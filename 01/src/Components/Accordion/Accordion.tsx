import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div><AccordionTitle title={props.title}
        onChange={props.onChange}
        />
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    console.log('AccordionBody rendering');
    return (
        <div>
            <ul>
                <li>Nick</li>
                <li>Mike</li>
                <li>Nike</li>
            </ul>
        </div>
    );

}

export default Accordion;