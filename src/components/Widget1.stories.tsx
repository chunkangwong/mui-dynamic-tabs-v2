import { ComponentMeta, ComponentStory } from "@storybook/react";
import Widget1 from "./Widget1";

export default {
  title: "Widget1",
  component: Widget1,
  decorators: [
    (story) => (
      <div style={{ padding: "1rem", width: "300px" }}>
        <div className="story-start" />
        {story()}
        <div className="story-end" />
      </div>
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
} as ComponentMeta<typeof Widget1>;

const Template: ComponentStory<typeof Widget1> = (args) => (
  <Widget1 {...args} />
);

export const Default = Template.bind({});
Default.args = {};
