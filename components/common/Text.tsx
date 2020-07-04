import React, {ReactNode} from "react"
import styled from "styled-components";

export interface TextProps {
    children: ReactNode
    type: "secondary" | "primary"
    form: "small" | "h1" | "h2" | "h3" | "h4"
}

const types = {
    secondary: {color: "grey"},
    primary: {color: "black"}
}

const forms = {
    small: {fontsize: "small", fontWeight: "normal"},
    h2: {fontsize: "24px", fontWeight: "bold"},
    h4: {fontsize: "16px", fontWeight: "bold"}
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
  color: ${props => types[props.type].color};
  font-size: ${props => forms[props.form].fontsize};
  font-weight: ${props => forms[props.form].fontWeight};
`

const Text: React.FC<TextProps> = ({children, type, form}: TextProps) => <Container type={type}
                                                                                    form={form}> {children}</Container>

export default Text;
