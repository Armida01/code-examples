export interface IIcons {
    [key: string]: () => JSX.Element
}

export interface IIconProps {
    name: string,
    [key: string]: string
}