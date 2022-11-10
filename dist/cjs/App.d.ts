import * as React from 'react';
import 'antd/dist/antd.min.css';
import '@formily/antd/dist/antd.css';
import { IFormilySchema } from '@designable/formily-transformer';
export interface PreviewWidgetProps {
    tree: IFormilySchema;
}
export interface FormViewComponentProps {
    initialJson: IFormilySchema;
    style?: React.CSSProperties;
}
declare function Preview(data: FormViewComponentProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Preview>;
export default _default;
