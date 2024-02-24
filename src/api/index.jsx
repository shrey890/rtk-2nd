import { Chance } from "chance";

const chance = Chance();
export const fakeUserData = () => {
	console.log(chance.name({ middle: false , nationality: "en"}));
	return chance.name({ nationality: "en",middle: false  });
};
