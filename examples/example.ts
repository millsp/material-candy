export class Candy<Flavor, Color> {
	/**
	 * Creates some Candy
	 * @param flavor your favorite taste
	 * @param color your preferred color
	 */
	public constructor(flavor: Flavor, color: Color) {
		console.log({ foo: flavor, bar: color });
	}

	iInstall(iLove: boolean) {
		if (iLove) {
			return "ext install material-candy";
		}

		return undefined;
	}

	iLove() {
		console.log("I ❤️ Candy");
	}
}
