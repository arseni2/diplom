import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {HousesService} from '../services/houses.service';
import {House} from "../../../generated/graphql/house/house.model";
import {AuthGuard} from "../../auth/guards/Auth.guard";
import {UseGuards} from "@nestjs/common";
import {GetUserDecorator} from "../../auth/decorators/GetUser.decorator";
import {type IPayload} from "../../auth/interfaces/payload.interface";
import {HouseCreateDto} from "../dto/HouseCreate.dto";


@Resolver(() => House)
export class HousesResolver {
    constructor(private readonly housesService: HousesService) {
    }

    @UseGuards(AuthGuard)
    @Mutation(() => House)
    createHouse(@GetUserDecorator() user: IPayload, @Args('createHouseInput') createHouseInput: HouseCreateDto) {
        return this.housesService.create(user, createHouseInput);
    }

    @Query(() => [House], {name: 'housesRent'})
    findRent() {
        return this.housesService.findRent();
    }

    @Query(() => [House], {name: 'housesAll'})
    @UseGuards(AuthGuard)
    findAll(@GetUserDecorator() user: IPayload) {
        return this.housesService.findAll(user);
    }

    @Query(() => [House], {name: 'housesSell'})
    findSell() {
        return this.housesService.findSell();
    }

    @Query(() => House, {name: 'house'})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.housesService.findOne(id);
    }

    @Query(() => [House], {name: 'housesRealtor'})
    findAllByRealtorId(@Args('id', {type: () => Int}) id: number) {
        return this.housesService.findAllByRealtorId(id)
    }

    @Query(() => [House], {name: 'housesFilter'})
    filterHouses(
        @Args('address', {type: () => String, nullable: true}) address?: string,
        @Args('minPrice', {type: () => Number, nullable: true}) minPrice?: number,
        @Args('maxPrice', {type: () => Number, nullable: true}) maxPrice?: number,
        @Args('isRent', {type: () => Boolean, nullable: true}) isRent?: boolean,
    ) {
        return this.housesService.housesFilter(address, minPrice, maxPrice, isRent);
    }
    // @Mutation(() => House)
    // updateHouse(@Args('updateHouseInput') updateHouseInput: UpdateHouseInput) {
    //   return this.housesService.update(updateHouseInput.id, updateHouseInput);
    // }

    @Mutation(() => House)
    @UseGuards(AuthGuard)
    removeHouse(@GetUserDecorator() user: IPayload, @Args('id', {type: () => Int}) id: number) {
        return this.housesService.remove(user, id);
    }
}
