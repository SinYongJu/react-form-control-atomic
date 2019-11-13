import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchListItem from "./SearchListItem";

const STORY_TITLE = "Test SearchListItem";
const story = storiesOf("SearchListItem", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const SearchLi = {
  title: STORY_TITLE,
  name: "SearchListItem",
  datetime: "2019010102020",
  url: "https://www.daum.net",
  contents: "depending value on your Description"
};

story
  .addDecorator(divDecorator)
  .add("default", () => <SearchListItem {...SearchLi} />);
