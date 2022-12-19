// Types
import { IIcons, IIconProps } from './types'

import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from './icons';

const icons: IIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
};

const Icon = ({name, ...props}: IIconProps) => {
    const IconComponent = icons[name];

    return (
        <IconComponent {...props} />
    );
};

export default Icon;