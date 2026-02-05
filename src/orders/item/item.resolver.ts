import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ItemService } from './item.service';
import { OrderItemModel } from './models/item.model';
import { CreateItemInput } from './inputs/create-item.input';

@Resolver(() => OrderItemModel)
export class ItemResolver {
	constructor(private readonly itemService: ItemService) {}

	@Mutation(() => OrderItemModel)
	createItem(@Args('createItemInput') createItemInput: CreateItemInput) {
		return this.itemService.create(createItemInput)
	}

	@Query(() => [OrderItemModel], { name: 'item' })
	findAll() {
		return this.itemService.findAll()
	}

	@Query(() => OrderItemModel, { name: 'item' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.itemService.findOne(id)
	}

	@Mutation(() => OrderItemModel)
	updateItem(
		@Args('id') id: string,
		@Args('updateItemInput') updateItemInput: CreateItemInput
	) {
		return this.itemService.update(id, updateItemInput)
	}

	@Mutation(() => OrderItemModel)
	removeItem(@Args('id', { type: () => Int }) id: number) {
		return this.itemService.remove(id)
	}
}
