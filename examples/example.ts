/**
 * Example JSDoc
 * 
 * @class Candy
 */
export class Candy {
	/**
	 * Creates an instance of Candy.
	 *
	 * @param {string} flavor
	 * @param {string} color
	 */
	public constructor(flavor: string, color: string) {
		console.log({ foo: flavor, bar: color });
	}

	iInstall(iLove: boolean) {
		if (iLove) {
			return "ext install material-candy"
		};

		return undefined
	}

	iLove() {
		console.log("I ❤️ Candy");
	}
}
