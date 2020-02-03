export default class Database<T> {
  protected data: Array<T> = []

  constructor(data: Array<T>) {
    this.data = data
  }

  public getData = (): Array<T> => this.data

  public getFilteredData = (filter: () => boolean): Array<T> => this.data.filter(filter)

  public createItem = (item: T): number => this.data.push(item)

  public getItem = (index: number): T => this.data[index]
}
