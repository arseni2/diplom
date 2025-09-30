import {roleSeeder} from "./Role.seed";
import {userSeeder} from "./User.seed";

const main = async () => {
    await roleSeeder.run()
    await userSeeder.run()
}
main()