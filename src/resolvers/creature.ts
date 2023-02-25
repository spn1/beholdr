import { Creature } from '../entities/creature';
import { Resolver, Query, Ctx } from 'type-graphql';
import { MyContext } from 'src/types';

@Resolver()
export class CreatureResolver {
  @Query(() => [Creature])
  creatures(@Ctx() ctx: MyContext): Promise<Creature[]> {
    return ctx.em.find(Creature, {})
  }
}