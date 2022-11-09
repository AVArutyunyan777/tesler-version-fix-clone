import React, { CSSProperties } from 'react';
import 'antd/dist/antd.min.css';
import { IFormilySchema } from '@designable/formily-transformer';
export interface PreviewWidgetProps {
    tree: IFormilySchema;
}
export declare const PreviewWidget: React.FC<PreviewWidgetProps>;
export interface FormViewComponentProps {
    initialJson: IFormilySchema;
    style?: CSSProperties;
}
declare const Preview: React.FC;
export default Preview;
