import * as React from "react";
import { storiesOf } from "@storybook/react";
import { InfoText } from "../../components/common/InfoText";

storiesOf("InfoText", module).addWithJSX("InfoText", () => {
  return (
    <InfoText text="Bank Offer10% Instant Discount with HDFC Bank Credit Cards and Credit/Debit EMI Transactions" />
  );
});
