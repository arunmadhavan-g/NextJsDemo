import * as React from "react";
import { storiesOf } from "@storybook/react";
import Breadcrumbs from "../../components/common/Breadcrumbs";

storiesOf("BreadCrumbs", module).addWithJSX("BreadCrumb Heirarchy", () => {
  return <Breadcrumbs hierarchy={["Home", "Mobiles", "Vivo", "Vivo Z1x"]} />;
});
