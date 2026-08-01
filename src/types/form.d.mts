export interface IFields {
    label: string;
    type: string;
    required: boolean;
    placeholder?: string;
    options?: Array<string>;
}
export interface MForm {
    uid: string;
    project: string;
    title: string;
    description: string;
}
