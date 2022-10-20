import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModelWindow from "./ModelWindow";

export default {
    title: 'widgets/ModelWindow',
    component: ModelWindow,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ModelWindow>;

const Template: ComponentStory<typeof ModelWindow> = (args) => <ModelWindow {...args} />;

export const NavbarExample = Template.bind({});
NavbarExample.args = {};


