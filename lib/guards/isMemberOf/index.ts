export type IsMemberOfF = (options: Array<string>) => (value: string) => boolean

const isMemberOf: IsMemberOfF = options => value => options.includes(value)

export default isMemberOf
