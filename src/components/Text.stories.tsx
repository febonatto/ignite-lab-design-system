import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
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
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm',
        children: 'Small',
    }
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        children: 'Large',
    }
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        children: (
            <p>Testing p tag</p>
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