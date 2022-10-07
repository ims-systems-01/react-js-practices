import React from "react";
import ChildofPrimary from "./ChildOfPreimary";
import ChildofSecondary from "./ChildOfSecondary";
import ChildPrimary from "./ChildPreimary";
import ChildSecondary from "./ChildSecondary";
import TopComponent from "./TopComponent";

export default function Usage() {
  return (
    <TopComponent>
      <ChildPrimary>
        <ChildofPrimary />
      </ChildPrimary>
      <ChildSecondary>
        <ChildofSecondary />
      </ChildSecondary>
    </TopComponent>
  );
}
