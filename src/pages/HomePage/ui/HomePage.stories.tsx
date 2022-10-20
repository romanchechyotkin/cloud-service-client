import {ComponentMeta, ComponentStory} from '@storybook/react';
import HomePage from './HomePage'

export default {
    title: 'pages/SettingsPage',
    component: HomePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage />;

export const Home = Template.bind({});
Home.args = {};

