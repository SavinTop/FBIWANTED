import {WantedItem} from "./wanted-item"

export interface WantedList {
	total: number
	page: number
	items: WantedItem[]
}
