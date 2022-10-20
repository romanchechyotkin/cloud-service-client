import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Auth, AuthForm} from "./AuthForm";

export default {
    title: 'widgets/AuthForm',
    component: AuthForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />;

export const AuthRegistration = Template.bind({});
AuthRegistration.args = {
    type: Auth.REGISTRATION
};

export const AuthLogin = Template.bind({});
AuthLogin.args = {
    type: Auth.LOGIN
};
