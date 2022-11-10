
import * as React from 'react'
import 'antd/dist/antd.min.css';
import '@formily/antd/dist/antd.css';
import {
    Form,
    FormItem,
    DatePicker,
    Checkbox,
    Cascader,
    Editable,
    Input,
    NumberPicker,
    Switch,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    Space,
    Submit,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
    FormGrid,
    FormLayout,
    FormTab,
    FormCollapse,
    ArrayTable,
    ArrayCards,
} from '@formily/antd';
import {IFormilySchema} from '@designable/formily-transformer';
import {createForm} from '@formily/core';
import {createSchemaField} from '@formily/react';
import { Card, Slider, Rate } from 'antd';


export interface PreviewWidgetProps {
    tree: IFormilySchema
}

const Text: React.FC<{
    value?: string;
    content?: string;
    mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p';
}> = ({ value, mode, content, ...props }) => {
    const tagName = mode === 'normal' || !mode ? 'div' : mode;
    return React.createElement(tagName, props, value || content);
};

const SchemaField = createSchemaField({
    components: {
        Space,
        FormGrid,
        FormLayout,
        FormTab,
        FormCollapse,
        ArrayTable,
        ArrayCards,
        FormItem,
        DatePicker,
        Checkbox,
        Cascader,
        Editable,
        Input,
        NumberPicker,
        Switch,
        Password,
        PreviewText,
        Radio,
        Reset,
        Select,
        Submit,
        TimePicker,
        Transfer,
        TreeSelect,
        Upload,
        Card,
        Slider,
        Rate,
        Text
    },
})

export const PreviewWidget: React.FC<PreviewWidgetProps> = (props) => {
    const form = React.useMemo(() => createForm(), []);
    const { form: formProps, schema } = props.tree
    return (
        <div>
            <Form
                {...formProps}
                form={form}
            >
                <SchemaField schema={schema} />
            </Form>
        </div>
    )
}

export interface FormViewComponentProps {
    initialJson: IFormilySchema
    style?: React.CSSProperties
}

const Preview: React.FC<FormViewComponentProps> = (data: FormViewComponentProps) => {

    return (
        <div>
            <PreviewWidget tree={data.initialJson} />
        </div>
    )
};

export default Preview;
