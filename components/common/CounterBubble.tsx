import React from "react"
import styled from "styled-components";

export interface CounterBubbleProps {
    count: number
}

const Container = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #4d4d4d;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 12px;
    right: 13px;
`

export const CounterBubble: React.FC<CounterBubbleProps> = ({count}: CounterBubbleProps) =>
    <>
        {count > 0 && <Container>{count}</Container>}
    </>
