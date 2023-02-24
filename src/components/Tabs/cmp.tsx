import React, { useState } from "react";
import { StyledTabsHeader, StyledTabsItem, StyledTabLabel } from "./styles";
import { TabsProps } from "./types";
import TextGradient from "../TextGradient";

const noop = () => null

const Tabs = ({
  tabs,
  defaultSelected = 0,
  onTabChange = noop
}: TabsProps) => {
  const safeDefault = (tabs[defaultSelected] && !tabs[defaultSelected].disabled) ? defaultSelected : 0
  const [selected, setSelected] = useState<number>(safeDefault)
  const handleClick = (i: number) => {
    onTabChange(selected, i)
    setSelected(i)
  }

  return (
    <>
      <StyledTabsHeader role="tablist">
        {tabs.map((tab, i) => {
          const getTabLabel = () => {
            if (tab.label !== undefined) {
              return (
                <StyledTabLabel className="tp-info">
                  {tab.label}
                </StyledTabLabel>
              )
            }
          }

          if (tab.disabled) {
            return (
              <StyledTabsItem
                isDisabled
                key={i}
                role="tab"
                aria-disabled="true"
              >
                {tab.name} {getTabLabel()}
              </StyledTabsItem>
            )
          }
          else if (i === selected) {
            return (
              <StyledTabsItem
                isSelected
                key={i}
                role="tab"
                aria-selected="true"
              >
                <TextGradient color="main0" type="body">
                  {tab.name}
                </TextGradient>
                {getTabLabel()}
              </StyledTabsItem>
            )
          }
          return (
            <StyledTabsItem
              onClick={() => handleClick(i)}
              key={i}
              role="tab"
              aria-selected="false"
            >
              {tab.name} {getTabLabel()}
            </StyledTabsItem>
          )
         })}
      </StyledTabsHeader>
      <div role="tabpanel">
        {tabs[selected].component}
      </div>
    </>
  )
}

export default Tabs;