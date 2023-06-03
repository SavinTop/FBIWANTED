export interface WantedItem {
	uid: string
	title: string
	description: string
	images: [
		{
			caption: string,
			original: string,
			large: string,
			thumb: string,
		}
	]
	status: string
	sex: string
	race: string
	nationality: string
	age_min: number
	age_max: number
	build: string
	hair: string
	eyes: string
	dates_of_birth_used: string[]
	remarks: string
}
