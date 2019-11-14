import React from "react";
import { storiesOf } from "@storybook/react";

import SeachReult from "./SeachReult";
import { SearchLi } from "../../atoms/SearchListItem/SearchListItem.stories"
const STORY_TITLE = "Test SeachReult";
const story = storiesOf("SeachReult", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

export const SearchResult = [
    {...SearchLi},
    {...SearchLi},
    {...SearchLi},
    {...SearchLi},
]

story
  .addDecorator(divDecorator)
  .add("default", () => <SeachReult result={[...SearchResult]} />);
