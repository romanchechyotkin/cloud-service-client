import {ComponentMeta, ComponentStory} from '@storybook/react';
import AuthPage from './AuthPage'

export default {
    title: 'pages/SettingsPage',
    component: AuthPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = (args) => <AuthPage {...args} />;

export const Auth = Template.bind({});
Auth.args = {};

