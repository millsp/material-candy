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

	saySomething() {
		console.log("I ❤️ Candy")
	}
}
