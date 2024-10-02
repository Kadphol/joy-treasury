import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import storyDialog from "../../../.storybook/decorators/storyDialog";
import Usage from "../usage.mdx";
import CardCookiesAlert from "./CardCookiesAlert";

const meta = {
  title: "Card/Cookies/Alert",
  component: CardCookiesAlert,
  parameters: {
    layout: "centered",
    githubUsername: "", // (optional) Your github username. If provided, your avatar will be displayed in the story toolbar
  },
  decorators: [storyDialog(Usage)],
} satisfies Meta<typeof CardCookiesAlert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alert: Story = {
  render: () => (
    <div 
      style={{
        width: 340,
        padding: 20,
        maxWidth: "100%",
        resize: "horizontal",
        overflow: "auto",
      }}
    >
      <CardCookiesAlert />
    </div>
  ),
};


