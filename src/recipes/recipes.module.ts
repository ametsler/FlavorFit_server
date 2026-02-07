import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { StepModule } from './step/step.module';
import { DishModule } from './dish/dish.module';
import { TagModule } from './tag/tag.module';
import { LikeModule } from './like/like.module';
import { ViewModule } from './view/view.module';
import { AdminRecipesService } from './admin-recipes.service'

@Module({
	providers: [RecipesResolver, RecipesService, AdminRecipesService],
	imports: [StepModule, DishModule, TagModule, LikeModule, ViewModule]
})
export class RecipesModule {}
