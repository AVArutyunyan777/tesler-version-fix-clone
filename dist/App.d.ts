import React from 'react';
import 'antd/dist/antd.less';
import '@formily/antd/esm/style.less';
import { IFormilySchema } from '@designable/formily-transformer';
export interface PreviewWidgetProps {
    tree: IFormilySchema;
}
export declare const PreviewWidget: React.FC<PreviewWidgetProps>;
export interface FormViewComponentProps {
    initialJson: any;
    style?: React.CSSProperties;
}
declare const Preview: React.FC<FormViewComponentProps>;
export default Preview;
