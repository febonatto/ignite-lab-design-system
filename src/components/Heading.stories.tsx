import { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        size: 'md',
        children: 'Lorem ipsum.',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm',
        children: 'Small',
    }
};

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg',
        children: 'Large',
    }
};

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        children: (
            <h1>Heading with h1</h1>
        ),
        asChild: true,
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
};