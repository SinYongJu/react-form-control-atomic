import React from "react";
import { storiesOf } from "@storybook/react";

import SeachReult from "./SeachReult";
const STORY_TITLE = "Test SeachReult";
const story = storiesOf("SeachReult", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

const STORY_LI_TITLE = "Test SearchListItem";

export const SearchLi = {
  title: STORY_LI_TITLE,
  name: "SearchListItem",
  datetime: "2019010102020",
  url: "https://www.daum.net",
  contents: "depending value on your Description"
};

export const searchResult = [
  { ...SearchLi },
  { ...SearchLi },
  { ...SearchLi },
  { ...SearchLi }
];

story
  .addDecorator(divDecorator)
  .add("default", () => <SeachReult result={[...searchResult]} />);
