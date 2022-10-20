import {ComponentMeta, ComponentStory} from '@storybook/react';
import {SettingsPage} from './SettingsPage'

export default {
    title: 'pages/SettingsPage',
    component: SettingsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args) => <SettingsPage />;

export const Settings = Template.bind({});
Settings.args = {};

