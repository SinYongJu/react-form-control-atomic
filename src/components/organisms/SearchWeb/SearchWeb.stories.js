import React from "react";
import { storiesOf } from "@storybook/react";

import SearchWeb from "./SearchWeb";
import { searchResult } from "../../molecule/SeachReult/SeachReult.stories";
import {
  SEARCH_INIT,
  SEARCH_PENDING,
  SEARCH_RESULT
} from "../../constants/search_api";
import { BUTTON_THEME } from "../../atoms/SimpleButton/SimpleButton";

const story = storiesOf("SearchWeb", module);
const divDecorator = story => <div style={{ padding: "3rem" }}>{story()}</div>;

const searchProps = {
  searchResult: [...searchResult],
  button: { themeClass: BUTTON_THEME.YELLOW },
  status: SEARCH_INIT
};
console.log(searchProps);

story
  .addDecorator(divDecorator)
  .add("default--init", () => <SearchWeb searchProps={{ ...searchProps }} />)
  .add("default--pending", () => (
    <SearchWeb searchProps={{ ...searchProps, status: SEARCH_PENDING }} />
  ))
  .add("default--no result", () => (
    <SearchWeb
      searchProps={{ ...searchProps, searchResult: [], status: SEARCH_RESULT }}
    />
  ))
  .add("default--result", () => (
    <SearchWeb searchProps={{ ...searchProps, status: SEARCH_RESULT }} />
  ));
