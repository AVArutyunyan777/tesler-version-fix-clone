import React, { CSSProperties } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import { IFormilySchema } from '@designable/formily-transformer';
export interface Props {
    tree: any;
}
export declare const PreviewWidget: React.FC<Props>;
export interface FormViewComponentProps {
    initialJson: IFormilySchema;
    style?: CSSProperties;
}
declare const Preview: React.FC;
export default Preview;
