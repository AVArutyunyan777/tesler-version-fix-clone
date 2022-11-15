import * as React from 'react';
import { IFormilySchema } from '@designable/formily-transformer';
export interface FormViewComponentProps {
    initialJson: IFormilySchema;
    style?: React.CSSProperties;
}
declare const Preview: React.FC<FormViewComponentProps>;
export default Preview;
