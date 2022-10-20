import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppLink} from "./AppLink";

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Link = Template.bind({});
Link.args = {
    children: 'go to home',
    color: "black"
};

