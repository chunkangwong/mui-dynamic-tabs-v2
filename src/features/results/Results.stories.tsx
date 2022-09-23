import { configureStore } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import Results from "./Results";
import { createResultsSlice } from "./resultsSlice";

const mockState = {
  activeResult: 0,
  results: [
    {
      label: "Search Result",
      content: "Search Result",
    },
  ],
};

export default {
  title: "Results",
  component: Results,
  decorators: [
    (story) => (
      <>
        <div className="story-start" />
        {story()}
        <div className="story-end" />
      </>
    ),
    (story) => (
      <Provider
        store={configureStore({
          reducer: {
            results: createResultsSlice(mockState).reducer,
          },
        })}
      >
        {story()}
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      transformSource: (source: string) => {
        const regexRes = source.match(
          /<div className="story-start" \/>([\s\S]*?)<div className="story-end" \/>/
        );
        return regexRes ? regexRes[1] : source;
      },
    },
  },
} as ComponentMeta<typeof Results>;

const Template: ComponentStory<typeof Results> = (args) => (
  <Results {...args} />
);

export const Default = Template.bind({});
Default.args = {};
