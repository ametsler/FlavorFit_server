import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TagService } from './tag.service';
import { CreateTagInput } from './inputs/create-tag.input';
import { RecipeTagModel } from './models/recipe-tag.model'

@Resolver(() => RecipeTagModel)
export class TagResolver {
	constructor(private readonly tagService: TagService) {}

	@Mutation(() => RecipeTagModel)
	createTag(@Args('createTagInput') createTagInput: CreateTagInput) {
		return this.tagService.create(createTagInput)
	}

	@Query(() => [RecipeTagModel], { name: 'tag' })
	findAll() {
		return this.tagService.findAll()
	}

	@Query(() => RecipeTagModel, { name: 'tag' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.tagService.findOne(id)
	}

	@Mutation(() => RecipeTagModel)
	updateTag(
		@Args('id') id: string,
		@Args('updateTagInput') updateTagInput: CreateTagInput
	) {
		return this.tagService.update(id, updateTagInput)
	}

	@Mutation(() => RecipeTagModel)
	removeTag(@Args('id', { type: () => Int }) id: number) {
		return this.tagService.remove(id)
	}
}
