import React from "react";

export interface TestProps {
    value: number
}

const Test: React.FC<TestProps> = (props: TestProps) => {
    return (
        <h1>{props.value}</h1>
    )
}

export default Test