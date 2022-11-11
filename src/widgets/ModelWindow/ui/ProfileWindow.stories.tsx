import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ProfileWindow} from "./ProfileWindow";

export default {
    title: 'widgets/ModelWindow',
    component: ProfileWindow,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileWindow>;

const Template: ComponentStory<typeof ProfileWindow> = (args) => <ProfileWindow {...args} />;

export const NavbarExample = Template.bind({});
NavbarExample.args = {};


