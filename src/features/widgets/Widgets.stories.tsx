import { configureStore } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import { createWidgetsSlice } from "./widgetsSlice";
import Widgets from "./Widgets";

const mockState = {
  activeWidget: 0,
  widgets: ["Widget1", "Widget2"],
};

export default {
  title: "Widgets",
  component: Widgets,
  decorators: [
    (story) => (
      <Provider
        store={configureStore({
          reducer: {
            widgets: createWidgetsSlice(mockState).reducer,
          },
        })}
      >
        <div style={{ padding: "1rem", width: "300px" }}>
          <div className="story-start" />
          {story()}
          <div className="story-end" />
        </div>
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
} as ComponentMeta<typeof Widgets>;

const Template: ComponentStory<typeof Widgets> = (args) => (
  <Widgets {...args} />
);

export const Default = Template.bind({});
Default.args = {};
